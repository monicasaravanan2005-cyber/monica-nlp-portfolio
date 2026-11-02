import React from 'react';
import { Sparkles, Terminal, ArrowRight, ShieldCheck, Cpu, Code2, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Ambient Glows & Cyber Grid */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial Hero Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-violet-600/15 via-indigo-600/10 to-cyan-500/15 rounded-full blur-[120px] -z-10" />
        <div className="absolute -top-10 right-10 w-[350px] h-[350px] bg-electric-violet/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-electric-cyan/10 rounded-full blur-[110px] -z-10" />
        
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 cyber-grid opacity-60" />
        
        {/* Top Gradient Fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030306] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030306] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Academic Course Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full glass-panel border-purple-500/30 text-xs font-mono text-violet-300 mb-8 shadow-[0_0_20px_rgba(139,92,246,0.2)] animate-pulse-subtle">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="tracking-wide">COURSE PORTFOLIO</span>
            <span className="text-slate-600">•</span>
            <span className="text-white font-semibold">Natural Language Processing and Computational Linguistics</span>
          </div>

          {/* Profile Photo & Student Name Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-6 max-w-4xl mx-auto">
            
            {/* Elegant Portrait Frame with Violet-Blue Glow */}
            <div className="relative group shrink-0">
              {/* Outer Pulsing Glow Aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-700 -z-10 animate-pulse-subtle" />
              
              {/* Main Portrait Container */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-3xl p-[2px] bg-gradient-to-tr from-violet-500 via-purple-500 to-cyan-400 shadow-[0_0_35px_rgba(139,92,246,0.35)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-500 group-hover:scale-105">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-obsidian-950/90 backdrop-blur-md relative">
                  <img
                    src="/monica.jpg"
                    alt="Monica S."
                    className="w-full h-full object-cover object-[center_20%] filter contrast-[1.03] transition-all duration-700 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback stylized icon if image fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Subtle inner glass shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 pointer-events-none" />
                </div>
              </div>

              {/* Verified Status Pill */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-obsidian-900/95 border border-violet-500/50 shadow-lg backdrop-blur-md flex items-center space-x-1.5 text-[10px] font-mono text-cyan-300 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>NLP Researcher</span>
              </div>
            </div>

            {/* Student Name & Subtitle */}
            <div className="text-center sm:text-left">
              <span className="block text-slate-300 text-xs sm:text-sm font-mono font-normal tracking-widest uppercase mb-2 text-violet-400/90">
                Student Researcher Portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-2">
                <span className="gradient-text">
                  Monica S.
                </span>
              </h1>
              <p className="text-xs sm:text-sm font-mono text-slate-400 flex items-center justify-center sm:justify-start space-x-2">
                <span className="text-cyan-400">Computational Linguistics</span>
                <span className="text-slate-600">•</span>
                <span className="text-violet-300">Legal NLP & CRAG</span>
              </p>
            </div>

          </div>

          {/* Primary Motto / Tagline */}
          <div className="relative my-4">
            <p className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-purple-100 to-cyan-200">
              “Exploring Language. Building Intelligence.”
            </p>
            <div className="h-0.5 w-36 mx-auto mt-4 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
          </div>

          {/* Descriptive Context */}
          <p className="max-w-3xl text-base sm:text-lg text-slate-300 mt-4 mb-10 leading-relaxed font-light">
            Bridging formal linguistics, neural representations, and agentic reasoning. Exploring how computational discourse parsing and self-corrective retrieval architectures resolve critical ambiguities in domain-specific legal texts.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#project"
              className="flex items-center space-x-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(139,92,246,0.45)] hover:shadow-[0_0_35px_rgba(139,92,246,0.65)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Cpu className="w-4 h-4 text-cyan-300" />
              <span>Explore Featured Project: JurisGraph</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#journey"
              className="flex items-center space-x-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white glass-panel-interactive border-white/10 hover:border-violet-500/40"
            >
              <Terminal className="w-4 h-4 text-violet-400" />
              <span>Learning Journey & Topics</span>
            </a>

            <a
              href="#workflow"
              className="flex items-center space-x-2.5 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-400 hover:text-cyan-300 glass-panel-interactive border-white/5 hover:border-cyan-500/40"
            >
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Interactive Workflow</span>
            </a>
          </div>

          {/* Core Research Pillars / Quick Spec Cards */}
          <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            
            <div className="glass-panel p-4 rounded-2xl border-white/10 hover:border-violet-500/30 transition-all group">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 rounded-lg bg-violet-950/60 border border-violet-800/40 text-violet-400 group-hover:text-violet-300">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                  Attribution Integrity
                </span>
              </div>
              <h2 className="text-sm font-semibold text-white mb-1">Speaker Provenance</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Preserving "who said what" across multi-party legal arguments and judicial decrees.
              </p>
            </div>

            <div className="glass-panel p-4 rounded-2xl border-white/10 hover:border-cyan-500/30 transition-all group">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 group-hover:text-cyan-300">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                  Agentic CRAG
                </span>
              </div>
              <h2 className="text-sm font-semibold text-white mb-1">Corrective Feedback</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Evaluating evidence sufficiency before generation to eliminate hallucinated precedent.
              </p>
            </div>

            <div className="glass-panel p-4 rounded-2xl border-white/10 hover:border-purple-500/30 transition-all group">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 rounded-lg bg-purple-950/60 border border-purple-800/40 text-purple-400 group-hover:text-purple-300">
                  <Code2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                  Discourse Parsing
                </span>
              </div>
              <h2 className="text-sm font-semibold text-white mb-1">Hierarchical Chunking</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Transforming unstructured judicial opinions into semantically anchored legal units.
              </p>
            </div>

            <div className="glass-panel p-4 rounded-2xl border-white/10 hover:border-indigo-500/30 transition-all group">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 rounded-lg bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 group-hover:text-indigo-300">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                  Grounded Synthesis
                </span>
              </div>
              <h2 className="text-sm font-semibold text-white mb-1">Verifiable Generation</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Strict citation anchoring ensuring zero unsubstantiated assertions in high-stakes law.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
