import { useState } from 'react';
import type { UserInput, LLMModel } from '../types/ModelTypes';
import { modelData } from '../data/modelData';
import { config } from '../config/api';

export default function PromptBuilder() {
  const [userInput, setUserInput] = useState<UserInput>({
    projectGoal: '',
    domain: '',
    complexity: 'beginner',
    outputFormat: 'explanation',
    constraints: '',
  });
  const [selectedModel, setSelectedModel] = useState<LLMModel | null>(null);
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleInputChange = (field: keyof UserInput, value: string) => {
    setUserInput(prev => ({ ...prev, [field]: value }));
  };

  const handleModelSelect = (model: LLMModel) => {
    setSelectedModel(model);
  };

  const generatePrompt = async () => {
    if (!selectedModel) return;

    setIsLoading(true);
    setError(null);
    setGeneratedPrompt('');

    try {
      const response = await fetch(`${config.backend.url}/api/generate-prompt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: selectedModel,
          userInput,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to generate prompt');
      }

      const data = await response.json();
      setGeneratedPrompt(data.prompt);
    } catch (error) {
      console.error('Error generating prompt:', error);
      setError(error instanceof Error ? error.message : 'An error occurred while generating the prompt');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center">Prompt Builder</h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-4 mb-12">
          Create tailored prompts for your preferred LLM model by providing your goals and requirements below.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left side - Form */}
          <div className="lg:col-span-3 glass-card p-6 md:p-8 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Project Information</h2>
            
            {/* Project Goal Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Project/Learning Goal <span className="text-primary">*</span>
              </label>
              <textarea
                className="input-field w-full"
                rows={4}
                value={userInput.projectGoal}
                onChange={(e) => handleInputChange('projectGoal', e.target.value)}
                placeholder="Describe what you want to accomplish..."
                required
              />
            </div>

            {/* Domain Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Domain/Industry <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="input-field w-full"
                value={userInput.domain}
                onChange={(e) => handleInputChange('domain', e.target.value)}
                placeholder="e.g., Software Development, Education, Finance..."
                required
              />
            </div>

            {/* Two columns for smaller inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Complexity Level */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Complexity Level
                </label>
                <select
                  className="input-field w-full"
                  value={userInput.complexity}
                  onChange={(e) => handleInputChange('complexity', e.target.value)}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              {/* Output Format */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Output Format
                </label>
                <select
                  className="input-field w-full"
                  value={userInput.outputFormat}
                  onChange={(e) => handleInputChange('outputFormat', e.target.value)}
                >
                  <option value="code">Code</option>
                  <option value="explanation">Explanation</option>
                  <option value="analysis">Analysis</option>
                  <option value="creative">Creative Content</option>
                </select>
              </div>
            </div>

            {/* Additional Constraints */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Additional Constraints (Optional)
              </label>
              <textarea
                className="input-field w-full"
                rows={3}
                value={userInput.constraints || ''}
                onChange={(e) => handleInputChange('constraints', e.target.value)}
                placeholder="Any specific requirements or limitations..."
              />
            </div>
          </div>

          {/* Right side - Model selection */}
          <div className="lg:col-span-2 glass-card p-6 md:p-8 animate-fade-in animation-delay-200">
            <h2 className="text-2xl font-bold mb-6">Select LLM Model</h2>
            
            <div className="space-y-4">
              {modelData.map((model) => (
                <div
                  key={model.name}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedModel === model.name
                      ? 'border-primary bg-primary/10 neon-border'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                  onClick={() => handleModelSelect(model.name)}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center mr-3">
                      {model.name === 'chatgpt' && (
                        <span className="text-green-400 text-lg font-bold">G</span>
                      )}
                      {model.name === 'claude' && (
                        <span className="text-purple-400 text-lg font-bold">C</span>
                      )}
                      {model.name === 'gemini' && (
                        <span className="text-blue-400 text-lg font-bold">G</span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">{model.displayName}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {model.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Generate Button */}
            <button
              className="btn-gradient w-full mt-6 py-3"
              onClick={generatePrompt}
              disabled={!selectedModel || !userInput.projectGoal || !userInput.domain || isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </span>
              ) : 'Generate Prompt'}
            </button>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="mt-8 p-4 bg-destructive/10 text-destructive rounded-lg animate-fade-in">
            <p>{error}</p>
          </div>
        )}

        {/* Generated Prompt */}
        {generatedPrompt && (
          <div className="mt-12 glass-card p-6 md:p-8 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Generated Prompt</h2>
              <button
                onClick={handleCopy}
                className="bg-primary/20 hover:bg-primary/30 text-primary px-4 py-2 rounded-lg flex items-center transition-colors"
              >
                {isCopied ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                      <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                    </svg>
                    Copy to Clipboard
                  </>
                )}
              </button>
            </div>
            <div className="bg-secondary/30 rounded-lg p-4 max-h-96 overflow-y-auto">
              <pre className="whitespace-pre-wrap font-mono text-sm">{generatedPrompt}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 