import { useState, useEffect } from 'react';

export default function About() {
  const [animateSection, setAnimateSection] = useState(false);

  useEffect(() => {
    setAnimateSection(true);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* Header */}
      <div className={`text-center max-w-4xl mx-auto ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'} transition-all duration-1000`}>
        <div className="flex justify-center mb-6">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
            </svg>
          </div>
        </div>
        <h1 className="mb-4">About Seed</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're passionate about helping you craft the perfect prompts to optimize your outcomes with AI, 
          making it faster and easier to achieve remarkable results.
        </p>
      </div>

      {/* Mission Section */}
      <div className="glass-card p-8 md:p-12 mt-12 max-w-4xl mx-auto animate-fade-in animation-delay-300">
        <div className="relative">
          <div className="absolute -top-10 -left-10 opacity-10 animate-float animation-delay-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
            </svg>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Our Mission</h2>
          <p className="text-lg mb-8">
            At Seed, we believe that the right prompt can transform your interactions with AI. 
            We've built a platform that helps you plant the seeds of better AI conversations,
            cultivating powerful results through expertly engineered prompts tailored to leading
            AI models like ChatGPT, Claude, and Gemini.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="glass-card p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-primary mb-4 p-3 rounded-full bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovative</h3>
              <p className="text-muted-foreground">Using cutting-edge techniques to optimize prompts for each AI model</p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-primary mb-4 p-3 rounded-full bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Efficient</h3>
              <p className="text-muted-foreground">Saving you time by eliminating the trial and error of prompt creation</p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-primary mb-4 p-3 rounded-full bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Powerful</h3>
              <p className="text-muted-foreground">Delivering optimized outcomes that exceed expectations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16 md:mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            The passionate minds behind Seed, cultivating the future of AI interaction
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Team Member 1 */}
          <div className="glass-card p-6 md:p-8 group">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-80 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">A</div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Adars T S</h3>
                <p className="text-muted-foreground mb-4">Co-Founder & Lead Developer</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                  <a href="mailto:adars.nambootiri@gmail.com" className="flex items-center gap-2 bg-secondary/50 hover:bg-secondary p-2 rounded-lg transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-sm">Email</span>
                  </a>
                  <a href="https://www.instagram.com/a___dars" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-secondary/50 hover:bg-secondary p-2 rounded-lg transition-colors">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                      <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                      <circle cx="18.406" cy="5.594" r="1.44" />
                    </svg>
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a href="https://www.linkedin.com/in/adars-t-s-95b523255/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-secondary/50 hover:bg-secondary p-2 rounded-lg transition-colors">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div className="glass-card p-6 md:p-8 group">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-80 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">S</div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Sidharth Mohan</h3>
                <p className="text-muted-foreground mb-4">Co-Founder & Lead Designer</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                  <a href="mailto:sidharthmohan284@gmail.com" className="flex items-center gap-2 bg-secondary/50 hover:bg-secondary p-2 rounded-lg transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-sm">Email</span>
                  </a>
                  <a href="https://www.instagram.com/sid_.284" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-secondary/50 hover:bg-secondary p-2 rounded-lg transition-colors">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                      <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                      <circle cx="18.406" cy="5.594" r="1.44" />
                    </svg>
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a href="https://www.linkedin.com/in/sidharthmohan284/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-secondary/50 hover:bg-secondary p-2 rounded-lg transition-colors">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="glass-card p-8 md:p-12 mt-16 max-w-4xl mx-auto animate-fade-in animation-delay-500">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Philosophy</h2>
        
        <div className="relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 opacity-10 animate-float animation-delay-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
            </svg>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Seed to Harvest</h3>
              <p className="text-muted-foreground">
                We believe in nurturing every interaction with AI, carefully planting the right seeds through thoughtful prompts. 
                Like gardeners, we know that the quality of your harvest depends on how you begin. Our prompt engineering follows 
                this natural growth cycle - plant well, nurture carefully, and harvest abundantly.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Growth Mindset</h3>
              <p className="text-muted-foreground">
                Our platform continuously evolves. We learn from each interaction, constantly refining our understanding of what makes 
                prompts effective for different models. This growth mindset ensures that our users always benefit from the latest 
                developments in prompt engineering.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-16 md:mt-24 max-w-4xl mx-auto px-4 py-12 glass-card animate-fade-in animation-delay-700">
        <div className="relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions or feedback? Want to collaborate? We'd love to hear from you!
          </p>
          
          <button className="btn-gradient px-8 py-4 text-lg mx-auto">
            Contact Us
          </button>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Or email us directly at <a href="mailto:info@seedprompts.com" className="text-primary hover:underline">info@seedprompts.com</a>
          </p>
        </div>
      </div>
    </div>
  );
} 