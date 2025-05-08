import { useState } from 'react';

interface Template {
  id: string;
  title: string;
  description: string;
  tags: string[];
  model: string;
  prompt: string;
}

const templateData: Template[] = [
  {
    id: '1',
    title: 'Detailed Code Analysis',
    description: 'Get a comprehensive analysis of your code with suggestions for optimization.',
    tags: ['code', 'analysis', 'advanced'],
    model: 'chatgpt',
    prompt: `Please provide a detailed analysis of the following code, focusing on:
1. Algorithmic efficiency and time complexity
2. Memory usage and optimization opportunities
3. Potential bugs or edge cases
4. Code style and readability
5. Architecture and design patterns
6. Suggestions for improvement

[Insert code here]

Please be detailed in your analysis and provide specific examples of how to improve the code.`
  },
  {
    id: '2',
    title: 'Educational Concept Explanation',
    description: 'Explain complex topics in a clear, educational manner with examples.',
    tags: ['education', 'explanation', 'beginner'],
    model: 'claude',
    prompt: `I want you to explain the concept of [Topic] as if you were teaching it to a student.

Please structure your explanation as follows:
1. Simple definition in 1-2 sentences
2. Historical context or background (if relevant)
3. Core principles or mechanisms (keep it simple)
4. 2-3 real-world examples or applications
5. Common misconceptions
6. How this connects to related concepts
7. A simple analogy to help understand the concept

Make your explanation engaging, clear, and accessible to someone with a [beginner/intermediate/advanced] level of understanding. Use analogies and visual descriptions where helpful.`
  },
  {
    id: '3',
    title: 'Product Feature Brainstorming',
    description: 'Generate innovative feature ideas for your product or application.',
    tags: ['product', 'brainstorming', 'creative'],
    model: 'gemini',
    prompt: `I'd like to brainstorm innovative features for a [type of product/app] in the [industry/domain] space.

Product context:
- Target audience: [describe ideal users]
- Current main features: [list existing features if any]
- Key pain points to solve: [describe problems]
- Competitors: [list main competitors if known]

Please generate 7-10 innovative feature ideas that:
1. Solve real user problems
2. Stand out from competitors
3. Are technically feasible
4. Align with current technology trends
5. Could provide strong user value

For each feature idea, provide:
- A concise name
- A short description (2-3 sentences)
- The main user benefit
- A brief implementation consideration
- Potential measurement metrics for success`
  },
  {
    id: '4',
    title: 'Data Analysis Plan',
    description: 'Create a structured plan for analyzing a dataset.',
    tags: ['data', 'analysis', 'intermediate'],
    model: 'chatgpt',
    prompt: `I need to analyze a dataset about [topic/domain]. The dataset contains [brief description of what data it contains and its approximate size].

My objective is to [what insights you want to gain or questions you want to answer].

Please create a comprehensive data analysis plan that includes:

1. Data preparation steps:
   - Cleaning procedures
   - Handling missing values
   - Feature engineering opportunities

2. Exploratory data analysis approach:
   - Key variables to examine
   - Statistical summaries to generate
   - Visualization techniques to apply

3. Analysis methods:
   - Statistical tests to consider
   - Machine learning models if appropriate
   - Evaluation metrics

4. Interpretation framework:
   - How to validate findings
   - Potential pitfalls or biases to watch for
   - How to communicate results effectively

Please be specific and provide a step-by-step approach that I can follow.`
  },
  {
    id: '5',
    title: 'Marketing Campaign Strategy',
    description: 'Develop a comprehensive marketing campaign strategy.',
    tags: ['marketing', 'strategy', 'business'],
    model: 'claude',
    prompt: `Help me create a marketing campaign strategy for [product/service] targeting [target audience]. 

Business context:
- Product/service: [brief description]
- Current brand positioning: [how the brand is currently perceived]
- Budget level: [approximate budget range if known]
- Campaign timeframe: [duration of campaign]
- Primary goal: [e.g., brand awareness, lead generation, sales]

Please develop a comprehensive marketing campaign strategy that includes:

1. Campaign concept and key messaging
2. Target audience segmentation and persona development
3. Channel strategy (digital, social, traditional media, etc.)
4. Content plan with specific content types for each channel
5. Timeline with key milestones
6. Budget allocation across channels
7. KPIs and measurement approach
8. Potential risks and mitigation strategies

Be specific, creative, and provide actionable recommendations that align with current marketing best practices.`
  },
  {
    id: '6',
    title: 'Technical Documentation',
    description: 'Generate clear, structured technical documentation.',
    tags: ['technical', 'documentation', 'advanced'],
    model: 'gemini',
    prompt: `Create comprehensive technical documentation for [product/feature/API], following software industry best practices.

The documentation should include:

1. Introduction
   - Purpose and scope
   - Target audience (technical level)
   - Prerequisites

2. System Overview
   - Architecture diagram description
   - Key components and their interactions
   - Technical specifications

3. Installation and Setup
   - System requirements
   - Step-by-step installation process
   - Configuration options

4. Core Functionality
   - Detailed explanation of main features
   - API endpoints or methods (if applicable)
   - Input/output formats
   - Error handling

5. Advanced Usage
   - Optimization techniques
   - Customization options
   - Integration with other systems

6. Troubleshooting
   - Common issues and their solutions
   - Debugging techniques
   - Support resources

Format the documentation with clear headings, code examples where appropriate, and concise explanations. Use technical language appropriate for developers, but ensure concepts are explained clearly.`
  }
];

export default function Templates() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [clipboardStatus, setClipboardStatus] = useState<{[key: string]: boolean}>({});

  const handleCopyPrompt = (id: string, prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setClipboardStatus({ ...clipboardStatus, [id]: true });
    setTimeout(() => {
      setClipboardStatus({ ...clipboardStatus, [id]: false });
    }, 2000);
  };

  const filteredTemplates = templateData.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesModel = selectedModel ? template.model === selectedModel : true;
    const matchesTag = selectedTag ? template.tags.includes(selectedTag) : true;
    
    return matchesSearch && matchesModel && matchesTag;
  });

  // Get all unique tags
  const allTags = Array.from(new Set(templateData.flatMap(t => t.tags)));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1>Prompt Templates</h1>
        <p className="text-muted-foreground mt-4">
          Browse our collection of professionally crafted prompt templates for various use cases.
          Find the perfect starting point for your next prompt.
        </p>
      </div>

      {/* Filters */}
      <div className="glass-card p-6 mb-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search input */}
          <div>
            <label className="block text-sm font-medium mb-2">Search Templates</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title or description..."
              className="input-field w-full"
            />
          </div>

          {/* Model filter */}
          <div>
            <label className="block text-sm font-medium mb-2">Filter by Model</label>
            <select 
              className="input-field w-full"
              value={selectedModel || ''}
              onChange={(e) => setSelectedModel(e.target.value || null)}
            >
              <option value="">All Models</option>
              <option value="chatgpt">ChatGPT</option>
              <option value="claude">Claude</option>
              <option value="gemini">Gemini</option>
            </select>
          </div>

          {/* Tag filter */}
          <div>
            <label className="block text-sm font-medium mb-2">Filter by Tag</label>
            <select 
              className="input-field w-full"
              value={selectedTag || ''}
              onChange={(e) => setSelectedTag(e.target.value || null)}
            >
              <option value="">All Tags</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Template grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map(template => (
            <div key={template.id} className="glass-card overflow-hidden h-full flex flex-col animate-fade-in">
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <div className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                    {template.model === 'chatgpt' ? 'ChatGPT' : 
                     template.model === 'claude' ? 'Claude' : 'Gemini'}
                  </div>
                </div>
                <h3 className="mt-2">{template.title}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{template.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {template.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-secondary/50 rounded-md text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 bg-secondary/30 rounded-md p-4 max-h-44 overflow-y-auto">
                  <pre className="text-xs whitespace-pre-wrap font-mono text-muted-foreground">
                    {template.prompt}
                  </pre>
                </div>
              </div>
              
              <div className="p-4 border-t border-white/10">
                <button 
                  onClick={() => handleCopyPrompt(template.id, template.prompt)}
                  className="w-full btn-gradient"
                >
                  {clipboardStatus[template.id] ? 'Copied!' : 'Copy Prompt'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <h3 className="text-xl text-muted-foreground">No templates found matching your filters</h3>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedModel(null);
                setSelectedTag(null);
              }}
              className="mt-4 btn-gradient"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 