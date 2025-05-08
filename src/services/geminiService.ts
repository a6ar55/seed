import { config } from '../config/api';

export async function generateGeminiResponse(prompt: string): Promise<string> {
  try {
    const response = await fetch(`${config.gemini.apiUrl}?key=${config.gemini.apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
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
    console.error('Error calling Gemini API:', error);
    throw error;
  }
} 