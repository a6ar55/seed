export type LLMModel = 'claude' | 'chatgpt' | 'gemini';

export interface ModelCapabilities {
  name: LLMModel;
  displayName: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  maxTokens: number;
  knowledgeCutoff: string;
  bestFor: string[];
}

export interface ModelSelection {
  model: LLMModel;
  reason: string;
}

export interface UserInput {
  projectGoal: string;
  domain: string;
  complexity: 'beginner' | 'intermediate' | 'advanced';
  outputFormat: 'code' | 'explanation' | 'analysis' | 'creative';
  constraints?: string;
} 