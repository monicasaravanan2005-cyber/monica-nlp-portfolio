import React, { useState } from 'react';
import { projectDetailSections } from '../data/portfolioData';
import { 
  Compass, AlertTriangle, Target, Layers, Cpu, Wrench, BarChart3, 
  Sparkles, Info
} from 'lucide-react';

export const ProjectDetails: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>('overview');

  const getSectionIcon = (id: string) => {
    switch (id) {
      case 'overview':
        return Compass;
      case 'problem-statement':
        return AlertTriangle;
      case 'objectives':
        return Target;
      case 'methodology':
        return Layers;
      case 'architecture':
        return Cpu;
      case 'technologies':
        return Wrench;
      case 'evaluation':
        return BarChart3;
      case 'future-improvements':
      default:
        return Sparkles;
    }
  };

  const currentSection = projectDetailSections.find((s) => s.id === activeSectionId) || projectDetailSections[0];
  const CurrentIcon = getSectionIcon(currentSection.id);

  return (
    <section id="details" className="relative py-28 border-t border-purple-500/10">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-electric-violet/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-electric-cyan/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-violet-950/70 border border-violet-800/40 text-xs font-mono text-violet-300 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>DEEP-DIVE SYSTEM DOCUMENTATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Comprehensive Project Specifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 font-light">
            Granular technical breakdown of the Agentic Corrective RAG system for Indian Legal Jurisprudence.
          </p>
        </div>

        {/* Tab Navigation (Responsive Horizontal Scroll) */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none justify-start lg:justify-center">
          {projectDetailSections.map((sec) => {
            const Icon = getSectionIcon(sec.id);
            const isActive = sec.id === activeSectionId;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveSectionId(sec.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.35)] scale-100 ring-1 ring-violet-400'
                    : 'text-slate-400 hover:text-white glass-panel-interactive border-white/5 hover:border-white/10'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{sec.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Display Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Header of Active Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-8">
            <div className="flex items-center space-x-3.5">
              <div className="p-3 rounded-2xl bg-violet-950/80 border border-violet-700/50 text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                <CurrentIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold block mb-0.5">
                  Section: {currentSection.title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  {currentSection.title}
                </h3>
              </div>
            </div>

            <div className="text-xs font-mono text-slate-400 bg-obsidian-950/80 px-3 py-1.5 rounded-lg border border-white/5">
              Spec Ref: #{currentSection.id.toUpperCase()}
            </div>
          </div>

          {/* Section Summary Callout */}
          <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-violet-950/30 to-obsidian-950/40 border border-violet-500/20 text-slate-200 text-sm sm:text-base font-light leading-relaxed">
            <span className="font-semibold text-white">Summary: </span>
            {currentSection.summary}
          </div>

          {/* Main Content Paragraphs */}
          <div className="space-y-4 mb-8 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            {currentSection.content.map((paragraph, idx) => (
              <p key={idx} className="text-justify">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Subsections if available */}
          {currentSection.subsections && (
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-4">
                Detailed Subsystem Breakdown
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentSection.subsections.map((sub, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-obsidian-950/70 border border-white/5 hover:border-violet-500/30 transition-all">
                    <h5 className="text-sm font-semibold text-white mb-1.5">{sub.subtitle}</h5>
                    <p className="text-xs text-slate-300 leading-relaxed font-light mb-3">{sub.description}</p>
                    {sub.tags && (
                      <div className="flex flex-wrap gap-1.5">
                        {sub.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-violet-950/60 text-violet-300 border border-violet-800/40">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Interactive Diagram (When viewing architecture section) */}
          {currentSection.id === 'architecture' && (
            <div className="mt-8 p-6 rounded-2xl bg-obsidian-950/90 border border-cyan-500/30">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Interactive Modular Architecture Diagram
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  Data Flow • Left to Right
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-obsidian-900 border border-white/10 hover:border-purple-400 transition-all">
                  <div className="text-purple-400 font-bold mb-1">01. INGESTION</div>
                  <div className="text-slate-300 text-[11px]">SCR / SCC PDF Judgments</div>
                  <div className="text-slate-400 text-[10px] mt-1 font-sans">Attribution & Discourse Segmenter</div>
                </div>

                <div className="p-3.5 rounded-xl bg-obsidian-900 border border-white/10 hover:border-cyan-400 transition-all">
                  <div className="text-cyan-400 font-bold mb-1">02. INDEXING</div>
                  <div className="text-slate-300 text-[11px]">Dense + Lexical Index</div>
                  <div className="text-slate-400 text-[10px] mt-1 font-sans">Legal-BERT & BM25 Statutes</div>
                </div>

                <div className="p-3.5 rounded-xl bg-obsidian-900 border border-white/10 hover:border-violet-400 transition-all">
                  <div className="text-violet-400 font-bold mb-1">03. CRAG AGENT</div>
                  <div className="text-slate-300 text-[11px]">Evidence Evaluator</div>
                  <div className="text-slate-400 text-[10px] mt-1 font-sans">Attribution Fidelity & Fallback Loop</div>
                </div>

                <div className="p-3.5 rounded-xl bg-obsidian-900 border border-white/10 hover:border-emerald-400 transition-all">
                  <div className="text-emerald-400 font-bold mb-1">04. SYNTHESIS</div>
                  <div className="text-slate-300 text-[11px]">Grounded Output</div>
                  <div className="text-slate-400 text-[10px] mt-1 font-sans">Zero Hallucination Citation Graph</div>
                </div>
              </div>
            </div>
          )}

          {/* Evaluation Placeholders with Academic Integrity Warning */}
          {currentSection.placeholders && (
            <div className="mt-8 pt-6 border-t border-white/10">
              
              <div className="mb-4 p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-center space-x-3 text-xs text-amber-200">
                <Info className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  <strong>Academic Verification Note:</strong> Per project specifications, empirical benchmark scores and experimental values are kept strictly as placeholders pending final laboratory evaluation runs.
                </span>
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block mb-3">
                Empirical Evaluation Metrics (Placeholders Reserved)
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentSection.placeholders.map((placeholder, pIdx) => (
                  <div key={pIdx} className="p-3.5 rounded-xl bg-obsidian-950/80 border border-amber-500/20 flex items-center space-x-2.5">
                    <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0 animate-pulse" />
                    <span className="text-xs font-mono text-amber-200/90">
                      {placeholder}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Categorized Tooling Chips (When viewing technologies section) */}
          {currentSection.id === 'technologies' && (
            <div className="mt-8 p-6 rounded-2xl bg-obsidian-950/80 border border-purple-500/20">
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-4">
                Core Computational Linguistics & NLP Frameworks
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {[
                  'Python 3.11', 'LangGraph', 'LlamaIndex', 'SpaCy', 'Legal-BERT', 
                  'PyTorch', 'Hugging Face Transformers', 'Qdrant Vector DB', 'Rank-BM25',
                  'RAGAS Evaluation', 'Indian Kanoon Corpus API', 'Tiktoken', 'FastAPI'
                ].map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-mono bg-purple-950/60 text-purple-300 border border-purple-800/40">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
