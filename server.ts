import express from 'express';
import cors from 'cors';
import { generateGeminiResponse } from './src/services/geminiService';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3001;

app.post('/api/generate-prompt', async (req, res) => {
  try {
    const { model, userInput } = req.body;

    if (!model || !userInput) {
      return res.status(400).json({ message: 'Missing model or userInput' });
    }

    // Get the system prompt for the selected model
    const promptFile = path.join(process.cwd(), `${model}_prompt.txt`);
    const systemPrompt = fs.readFileSync(promptFile, 'utf-8');

    // Create a prompt for Gemini that specifically asks for a usable prompt, not questions
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
    const geminiResponse = await generateGeminiResponse(promptForGemini);
    
    return res.json({ prompt: geminiResponse });
  } catch (error) {
    console.error('Error generating prompt:', error);
    return res.status(500).json({ message: 'Error generating prompt', error: String(error) });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 