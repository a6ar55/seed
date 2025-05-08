import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    setAnimateHero(true);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent z-0"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse opacity-20 animation-delay-700"></div>
        
        {/* Animated Seed Elements - Hide some on very small screens */}
        <div className="absolute top-20 left-10 opacity-20 animate-float animation-delay-300 hidden sm:block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 sm:h-20 w-12 sm:w-20 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
          </svg>
        </div>
        <div className="absolute bottom-32 right-10 opacity-20 animate-float animation-delay-700 hidden sm:block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 sm:h-16 w-10 sm:w-16 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
          </svg>
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-10 animate-float animation-delay-500 hidden md:block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 sm:h-24 w-16 sm:w-24 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`transform transition-all duration-1000 ${animateHero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex justify-center mb-6">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 sm:h-20 sm:w-20 text-primary animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                  </svg>
                </div>
              </div>
              
              <h1 className="animate-fade-in mb-0">
                Plant the <span className="text-primary">Seeds</span> of Better Prompts
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mt-4 sm:mt-6 animate-fade-in animation-delay-300">
                Optimize your outcomes faster and easier with tailored prompts for ChatGPT, Claude, and Gemini.
              </p>
              
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-500">
                <Link 
                  to="/prompt-builder" 
                  className="btn-gradient px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group relative overflow-hidden"
                >
                  <span className="relative z-10">Plant Your Seed</span>
                  <div className="absolute bottom-0 left-0 w-full h-full bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>
                <Link 
                  to="/templates" 
                  className="bg-secondary/50 hover:bg-secondary/70 text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  Browse Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/0 pointer-events-none"></div>
        
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Why Use <span className="seed-logo">Seed</span>?
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10 sm:mb-16 px-2">
            Our intelligent prompt engineering helps you get the most out of your AI interactions
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="glass-card p-6 sm:p-8 h-full flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-primary mb-5 sm:mb-6 p-3 sm:p-4 rounded-full bg-primary/10 relative">
                <div className="absolute inset-0 rounded-full animate-pulse bg-primary/5"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Model-Optimized Growth</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Every seed is cultivated specifically for ChatGPT, Claude, or Gemini, leveraging each model's unique capabilities for optimal results.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="glass-card p-6 sm:p-8 h-full flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-primary mb-5 sm:mb-6 p-3 sm:p-4 rounded-full bg-primary/10 relative">
                <div className="absolute inset-0 rounded-full animate-pulse bg-primary/5"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Perfect Environment</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Adjust complexity levels from seedling to mature, ensuring your prompts create the perfect environment for your AI interactions.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="glass-card p-6 sm:p-8 h-full flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-primary mb-5 sm:mb-6 p-3 sm:p-4 rounded-full bg-primary/10 relative">
                <div className="absolute inset-0 rounded-full animate-pulse bg-primary/5"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Domain Fertile Ground</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Plant your seeds in fertile ground with domain-specific terminology and frameworks that yield the most bountiful results.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section with Animations */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-secondary/10 to-background/0 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6">
            How <span className="seed-logo">Seed</span> Works
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10 sm:mb-16 px-2">
            From planting to harvest in four simple steps
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-5 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start">
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold text-primary mr-3 sm:mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Select Your Seed</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Define your goals, domain, and complexity to find the perfect seed variety for your needs.</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-5 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start">
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold text-primary mr-3 sm:mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Choose Your Soil</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Select from ChatGPT, Claude, or Gemini - each with unique properties for different types of growth.</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-5 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start">
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold text-primary mr-3 sm:mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Plant Your Prompt</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Our system cultivates a tailored prompt optimized for your selected model and requirements.</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-5 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start">
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold text-primary mr-3 sm:mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Harvest Results</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Watch your AI responses bloom with significantly improved relevance, accuracy, and insight.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="glass-card p-6 sm:p-8 md:p-12 max-w-4xl mx-auto text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 transform -skew-y-6 -translate-y-12 group-hover:translate-y-0 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 text-primary animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                </svg>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Ready to Grow Better AI Interactions?
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
                Start planting the seeds for more fruitful AI conversations today.
              </p>
              
              <Link 
                to="/prompt-builder" 
                className="btn-gradient px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg inline-block transform transition-transform hover:scale-105"
              >
                Plant Your First Seed
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 