export const config = {
  gemini: {
    apiKey: import.meta.env.VITE_GEMINI_API_KEY || '',
    apiUrl: import.meta.env.VITE_GEMINI_API_URL || 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent'
  },
  backend: {
    url: ''
  }
}; 