import { config } from '../config/api';
import type { UserInput, LLMModel } from '../types/ModelTypes';

// Helper function to get system prompts
async function getSystemPrompt(model: LLMModel): Promise<string> {
  try {
    const response = await fetch(`/${model}_prompt.txt`);
    if (!response.ok) {
      throw new Error(`Failed to fetch system prompt for ${model}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error loading system prompt for ${model}:`, error);
    return `System prompt for ${model} could not be loaded.`;
  }
}

export async function generatePrompt(model: LLMModel, userInput: UserInput): Promise<string> {
  try {
    // Get system prompt for the selected model
    const systemPrompt = await getSystemPrompt(model);

    // Create a prompt for Gemini that specifically asks for a usable prompt
    const promptForGemini = `
Your task is to create a well-structured, specific prompt for ${model} about the following topic:

Project Goal: ${userInput.projectGoal}
Domain: ${userInput.domain}
Complexity Level: ${userInput.complexity}
Output Format: ${userInput.outputFormat}
${userInput.constraints ? `Additional Constraints: ${userInput.constraints}` : ''}

IMPORTANT: The system prompt for ${model} is provided below for context only. DO NOT include any part of this system prompt in your response. Instead, create a NEW prompt that would be given TO ${model}.

System prompt for context:
${systemPrompt}

GUIDELINES:
1. Generate a COMPLETE PROMPT that a user could directly copy and send to ${model}.
2. The prompt should be specific, detailed, and focused on ${userInput.projectGoal}.
3. DO NOT ask clarifying questions - assume you have all the information needed.
4. DO NOT include phrases like "here's a prompt" or "prompt:". Just write the prompt itself.
5. The prompt should be ready to use immediately with ${model}.
6. Include specific requirements based on the complexity level and output format.
7. The prompt should be at least 100 words to provide sufficient detail and context.

Output ONLY the finished prompt with NO additional commentary or questions.
`;

    // Call Gemini API with the prompt
    const response = await fetch(`${config.gemini.apiUrl}?key=${config.gemini.apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: promptForGemini }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to generate response from Gemini: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error('Invalid response format from Gemini API');
    }

    let responseText = data.candidates[0].content.parts[0].text;
    
    // Clean up the response to remove any system prompt references
    responseText = responseText.replace(/Response Guidelines.*?(Based on|User Request)/s, '');
    responseText = responseText.replace(/Based on the above guidelines.*?(generate|provide)/s, '');
    
    // Remove any instructions about not including guidelines
    responseText = responseText.replace(/Your response should be directly usable.*?guidelines themselves in your response\./s, '');
    
    return responseText.trim();
  } catch (error) {
    console.error('Error generating prompt:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unknown error occurred while generating the prompt');
  }
} 