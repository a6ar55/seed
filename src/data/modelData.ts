import type { ModelCapabilities } from '../types/ModelTypes';

export const modelData: ModelCapabilities[] = [
  {
    name: 'claude',
    displayName: 'Claude',
    description: 'Anthropic\'s Claude is known for its nuanced understanding and safety-focused approach.',
    strengths: [
      'Strong reasoning and analysis',
      'Excellent at following complex instructions',
      'High safety and ethical considerations',
      'Good at maintaining context'
    ],
    weaknesses: [
      'More conservative in responses',
      'May be slower than other models',
      'Limited code generation capabilities'
    ],
    maxTokens: 100000,
    knowledgeCutoff: '2023',
    bestFor: [
      'Complex reasoning tasks',
      'Ethical considerations',
      'Detailed analysis',
      'Long-form content'
    ]
  },
  {
    name: 'chatgpt',
    displayName: 'ChatGPT',
    description: 'OpenAI\'s ChatGPT excels at creative tasks and code generation.',
    strengths: [
      'Excellent code generation',
      'Strong creative writing',
      'Good at following instructions',
      'Wide range of capabilities'
    ],
    weaknesses: [
      'May hallucinate information',
      'Can be inconsistent in long conversations',
      'Limited context window'
    ],
    maxTokens: 4096,
    knowledgeCutoff: '2023',
    bestFor: [
      'Code generation',
      'Creative writing',
      'General purpose tasks',
      'Quick responses'
    ]
  },
  {
    name: 'gemini',
    displayName: 'Gemini',
    description: 'Google\'s Gemini is optimized for real-time interactions and multimodal tasks.',
    strengths: [
      'Fast response times',
      'Good at multimodal tasks',
      'Strong in technical domains',
      'Efficient token usage'
    ],
    weaknesses: [
      'Limited context window',
      'May struggle with complex reasoning',
      'Less established track record'
    ],
    maxTokens: 32768,
    knowledgeCutoff: '2024',
    bestFor: [
      'Real-time interactions',
      'Technical documentation',
      'Quick answers',
      'Multimodal tasks'
    ]
  }
]; 