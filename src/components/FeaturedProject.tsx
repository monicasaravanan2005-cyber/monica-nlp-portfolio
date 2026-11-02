import React, { useState, useEffect } from 'react';
import { 
  Scale, ShieldAlert, CheckCircle2, XCircle, 
  Layers, GitBranch, Sparkles, FileText, Split, ArrowRight,
  Cpu
} from 'lucide-react';
import { JurisGraphDetailsModal } from './JurisGraphDetailsModal';
import { JurisGraphIllustration } from './JurisGraphIllustration';

export const FeaturedProject: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'naive-vs-crag' | 'legal-context'>('naive-vs-crag');
  const [isJurisGraphOpen, setIsJurisGraphOpen] = useState(false);

  // Check URL hash for direct link
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#jurisgraph') {
        setIsJurisGraphOpen(true);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <section id="project" className="relative py-28 border-t border-purple-500/10">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-electric-violet/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-electric-cyan/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Project Header Banner */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-violet-950/70 border border-violet-800/50 text-xs font-mono text-violet-300 mb-4 shadow-[0_0_20px_rgba(139,92,246,0.25)]">
            <Scale className="w-4 h-4 text-cyan-400" />
            <span>FEATURED NLP CAPSTONE & RESEARCH INITIATIVE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Agentic Corrective RAG for{' '}
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Indian Legal Documents
            </span>
          </h2>

          {/* Exact required description */}
          <div className="mt-6 p-4 rounded-2xl glass-panel border-purple-500/30 bg-obsidian-900/60 max-w-3xl mx-auto shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]">
            <p className="text-lg sm:text-xl font-medium text-purple-100 leading-relaxed">
              “A legal NLP system that preserves who said what, retrieves the right passages, and corrects weak evidence before generation.”
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-400 mt-5 max-w-2xl mx-auto font-light leading-relaxed">
            Engineered specifically to overcome the severe limitations of standard RAG on complex multi-judge opinions, petitioner-respondent argumentation, and colonial statutes in Indian jurisprudence.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsJurisGraphOpen(true)}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-600/30 transition-all hover:scale-[1.02]"
            >
              <Cpu className="w-4 h-4 text-cyan-300" />
              <span>Explore JurisGraph System</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#workflow"
              className="flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-medium text-slate-300 glass-panel-interactive border-white/10"
            >
              <GitBranch className="w-4 h-4 text-cyan-400" />
              <span>Step-by-Step Workflow</span>
            </a>

            <a
              href="#details"
              className="flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-medium text-slate-300 glass-panel-interactive border-white/10"
            >
              <FileText className="w-4 h-4 text-purple-400" />
              <span>System Documentation</span>
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* NEW JURISGRAPH FEATURED PROJECT CARD */}
        {/* ========================================================================= */}
        <div className="mb-20 glass-panel rounded-3xl p-6 sm:p-10 border-purple-500/30 bg-gradient-to-br from-obsidian-900/90 via-obsidian-950 to-purple-950/20 shadow-[0_0_50px_-10px_rgba(139,92,246,0.25)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 via-violet-600/15 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

          <div className="relative z-10">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/40 text-xs font-mono text-cyan-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FEATURED RESEARCH PROJECT</span>
              </div>
              <span className="text-xs font-mono text-purple-300 bg-purple-950/60 px-3 py-1 rounded-lg border border-purple-800/40">
                InLegalBERT + LangGraph + ChromaDB
              </span>
            </div>

            {/* Project Title & Subtitle */}
            <div className="mb-4">
              <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                JurisGraph
              </h3>
              <p className="text-sm sm:text-lg font-medium text-purple-200/90 mt-2 font-display">
                Agentic Corrective Retrieval-Augmented Generation for Indian Legal Documents with Rhetorical Role Segmentation
              </p>
            </div>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-light mb-8">
              An agentic AI-powered legal intelligence system that analyzes Indian court judgments using rhetorical role segmentation and corrective retrieval-augmented generation.
            </p>

            {/* Technology Badges */}
            <div className="mb-8">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
                Technology Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Python',
                  'PyTorch',
                  'InLegalBERT',
                  'LangGraph',
                  'ChromaDB',
                  'Ollama',
                  'Streamlit'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium bg-obsidian-950/90 text-cyan-300 border border-cyan-500/30 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Architecture Illustration */}
            <div className="mb-8">
              <JurisGraphIllustration />
            </div>

            {/* Card Action Controls: View Project */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="text-xs font-mono text-slate-400">
                Macro F1: <span className="text-emerald-400 font-bold">57.52%</span> • False-Positive Hallucination: <span className="text-cyan-300 font-bold">0%</span>
              </div>

              <button
                onClick={() => setIsJurisGraphOpen(true)}
                className="flex items-center space-x-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(139,92,246,0.45)] hover:shadow-[0_0_35px_rgba(139,92,246,0.65)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* The 3 Core Pillars of the Legal System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="glass-panel rounded-2xl p-6 border-white/10 hover:border-violet-500/40 transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/10 rounded-full blur-xl group-hover:bg-violet-600/25 transition-all" />
            <div className="w-12 h-12 rounded-xl bg-violet-950/70 border border-violet-800/50 flex items-center justify-center text-violet-400 mb-5 group-hover:scale-105 transition-transform">
              <Split className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Preserves "Who Said What"</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-4">
              Indian judicial decisions weave together petitioner arguments, respondent rejoinders, and multi-judge concurring or dissenting opinions. The attribution parser links every chunk to its true legal speaker.
            </p>
            <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-violet-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Eliminates Speaker Scrambling</span>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border-white/10 hover:border-cyan-500/40 transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-600/10 rounded-full blur-xl group-hover:bg-cyan-600/25 transition-all" />
            <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-105 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Retrieves the Right Passages</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-4">
              Judgments easily span 100+ pages of dense legalese. By pairing dense semantic vectors with lexical BM25 over statutory sections (e.g. IPC, CrPC), the system pinpoints verbatim legal holdings.
            </p>
            <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Hybrid Dense-Sparse Precision</span>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border-white/10 hover:border-indigo-500/40 transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-600/10 rounded-full blur-xl group-hover:bg-indigo-600/25 transition-all" />
            <div className="w-12 h-12 rounded-xl bg-indigo-950/70 border border-indigo-800/50 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-105 transition-transform">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Corrects Weak Evidence</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-4">
              Unlike naive RAG that blindly generates text from low-quality retrieved passages, an agentic evaluator scores relevance and triggers self-directed query reformulation before answering.
            </p>
            <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-indigo-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Agentic Corrective Loop</span>
            </div>
          </div>

        </div>

        {/* Interactive Comparison & Demonstration Showcase */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border-purple-500/20 shadow-2xl relative overflow-hidden">
          
          {/* Showcase Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-violet-400 font-semibold block mb-1">
                Comparative Architecture Analysis
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Why Naive RAG Fails in Indian Jurisprudence vs. Agentic CRAG
              </h3>
            </div>

            <div className="flex items-center space-x-2 bg-obsidian-950 p-1.5 rounded-xl border border-white/5">
              <button
                onClick={() => setActiveTab('naive-vs-crag')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'naive-vs-crag'
                    ? 'bg-violet-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Head-to-Head Comparison
              </button>
              <button
                onClick={() => setActiveTab('legal-context')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'legal-context'
                    ? 'bg-violet-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Real-World Legal Example
              </button>
            </div>
          </div>

          {/* Tab 1: Comparison Matrix */}
          {activeTab === 'naive-vs-crag' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
              
              {/* Naive RAG Failure Mode */}
              <div className="rounded-2xl bg-red-950/20 border border-red-500/30 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-red-950/80 text-red-400 border border-red-800/60">
                      Standard / Naive RAG
                    </span>
                    <XCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-3">
                    Vulnerable to Legal Hallucinations & Role Inversion
                  </h4>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-light">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400 mt-0.5">✕</span>
                      <span><strong>Speaker Blindness:</strong> Confuses what a defense advocate submitted with the actual binding judicial verdict of the bench.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400 mt-0.5">✕</span>
                      <span><strong>Blind Generation:</strong> If retrieved passages are irrelevant or contain overturned statutes, it hallucinates plausible-sounding legal advice anyway.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400 mt-0.5">✕</span>
                      <span><strong>Arbitrary Chunking:</strong> Cuts off 500 tokens mid-sentence, losing who was being quoted or which section was being distinguished.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-red-500/20 text-xs font-mono text-red-300/80">
                  Critical Risk: Inadmissible in court & hazardous for legal research.
                </div>
              </div>

              {/* Agentic Corrective RAG (Our Solution) */}
              <div className="rounded-2xl bg-violet-950/20 border border-violet-500/40 p-6 flex flex-col justify-between shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-violet-950/80 text-violet-300 border border-violet-700/60">
                      Agentic Corrective RAG (CRAG)
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-3">
                    Provenance-Guaranteed & Evaluated Before Generation
                  </h4>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-light">
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-400 mt-0.5">✓</span>
                      <span><strong>Preserves Speaker Attribution:</strong> Extracts explicit metadata: <em>{'{Speaker: Judge/Counsel, Role: Ratio/Obiter, Bench: Supreme Court}'}</em>.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-400 mt-0.5">✓</span>
                      <span><strong>Evidence Critique Gatekeeper:</strong> An agent checks evidence validity. If low confidence, it triggers query reformulation & statutory lookup.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-400 mt-0.5">✓</span>
                      <span><strong>Grounded Citations:</strong> Synthesizes strict answers where every legal claim is anchored directly to verbatim judgment paragraphs.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-violet-500/30 text-xs font-mono text-cyan-300">
                  Verified Outcome: High fidelity, zero unattributed assertions.
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: Concrete Legal Example */}
          {activeTab === 'legal-context' && (
            <div className="bg-obsidian-950/80 rounded-2xl p-6 border border-white/10 animate-in fade-in duration-300 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-purple-400">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>CASE STUDY: K.S. PUTTASWAMY V. UNION OF INDIA (RIGHT TO PRIVACY BENCH)</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-obsidian-900 border border-red-500/20">
                  <div className="text-red-400 font-bold mb-2">FAIL STATE (Naive Chunking)</div>
                  <p className="text-slate-400 leading-relaxed font-sans text-xs">
                    "The Attorney General argued that the Indian Constitution contains no fundamental right to privacy, citing M.P. Sharma and Kharak Singh..."
                  </p>
                  <p className="mt-2 text-red-300 font-sans text-xs">
                    <strong>LLM Output (Scrambled):</strong> "The Supreme Court ruled that privacy is not a fundamental right." (ATTRIBUTION DISASTER)
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-obsidian-900 border border-emerald-500/20">
                  <div className="text-emerald-400 font-bold mb-2">SUCCESS STATE (Agentic CRAG)</div>
                  <p className="text-slate-400 leading-relaxed font-sans text-xs">
                    Retriever tags passage as <em>[SPEAKER: Attorney General, SUBMISSION]</em> and retrieves Justice Chandrachud's holding <em>[SPEAKER: Bench, RATIO DECIDENDI]</em>.
                  </p>
                  <p className="mt-2 text-emerald-300 font-sans text-xs">
                    <strong>LLM Output (Grounded):</strong> "While the Attorney General argued against it, the 9-judge bench unanimously held privacy is a protected fundamental right under Article 21."
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Dedicated JurisGraph Project Details Modal */}
      <JurisGraphDetailsModal
        isOpen={isJurisGraphOpen}
        onClose={() => setIsJurisGraphOpen(false)}
      />
    </section>
  );
};
