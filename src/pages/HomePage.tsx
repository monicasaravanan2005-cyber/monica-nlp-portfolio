import React from 'react';
import { ArrowRight, BookOpen, Layers, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate: (pageId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Large Prominent Photograph */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[410px]">
            {/* Subtle Ambient Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 rounded-3xl blur-xl opacity-50 -z-10" />
            
            {/* Main Portrait Frame */}
            <div className="relative aspect-[3/4] w-full rounded-3xl p-[2px] bg-gradient-to-tr from-violet-500 via-purple-500 to-cyan-400 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-obsidian-950">
                <img
                  src="/monica.jpg"
                  alt="Monica S. — Natural Language Processing & Computational Linguistics"
                  className="w-full h-full object-cover object-[center_15%] filter contrast-[1.02]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Status Badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-obsidian-900 border border-purple-500/40 text-xs font-mono text-cyan-300 shadow-lg whitespace-nowrap">
              Monica S. • NLP & AI
            </div>
          </div>
        </div>

        {/* Right Column: Name, Description & Actions */}
        <div className="lg:col-span-7 text-center lg:text-left pt-4 lg:pt-0">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-950/80 border border-violet-800/40 text-xs font-mono text-violet-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACADEMIC PORTFOLIO</span>
          </div>

          {/* Student Name & Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-2">
            Monica S.
          </h1>
          <p className="text-lg sm:text-xl font-mono text-purple-300 font-medium mb-6">
            NLP & Computational Linguistics Portfolio
          </p>

          {/* Academic Introduction */}
          <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 mb-8 font-light">
            <p>
              Welcome to my academic learning portfolio for Natural Language Processing (NLP) and Computational Linguistics. This portfolio documents my coursework, conceptual explorations, practical laboratory experiments, and research initiatives.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              My primary academic interests center on computational linguistics, natural language understanding, domain-specialized information extraction, and agentic retrieval-augmented architectures for complex texts.
            </p>
          </div>

          {/* Navigation Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              onClick={() => onNavigate('journey')}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors shadow-md"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore My NLP Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('featured-project')}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-obsidian-900 border border-white/10 hover:border-purple-500/40 transition-colors"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Featured Project — JurisGraph</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
