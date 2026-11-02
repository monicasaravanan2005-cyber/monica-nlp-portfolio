import React, { useState, useEffect } from 'react';
import { 
  X, Scale, CheckCircle2, Database, 
  Workflow, GitBranch, ShieldCheck, TrendingUp, Layers, 
  AlertTriangle, FileText, Sparkles, UserCheck, 
  ChevronRight, Brain, Terminal, Code2, Copy, Check
} from 'lucide-react';

interface JurisGraphDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JurisGraphDetailsModal: React.FC<JurisGraphDetailsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<'ingestion' | 'inference'>('ingestion');
  const [copiedLink, setCopiedLink] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText("JurisGraph: Agentic Corrective Retrieval-Augmented Generation for Indian Legal Documents with Rhetorical Role Segmentation (Monica S., 2026)");
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const ingestionSteps = [
    { name: 'Document Upload', desc: 'Raw PDF judgments from Indian Supreme Court or High Courts', tag: 'INPUT' },
    { name: 'PDF Extraction', desc: 'PyMuPDF text extraction preserving columnar structure & formatting', tag: 'PARSING' },
    { name: 'Sentence Segmentation', desc: 'Boundary disambiguation for legal abbreviations and section numbers', tag: 'TOKENIZATION' },
    { name: 'InLegalBERT Classification', desc: 'Token-level rhetorical role prediction (Facts, Arguments, Ruling)', tag: 'TRANSFORMER' },
    { name: 'Viterbi HMM Smoothing', desc: 'Sequence decoding correcting spurious labels via legal discourse transitions', tag: 'SEQUENCE' },
    { name: 'Role-Aware Chunking', desc: 'Synthesizing contiguous rhetorical blocks instead of arbitrary token cuts', tag: 'CHUNKING' },
    { name: 'ChromaDB Indexing', desc: 'Vector storage with BGE embeddings enriched with speaker & role metadata', tag: 'VECTOR STORE' },
  ];

  const inferenceSteps = [
    { name: 'Query', desc: 'User input legal question or statutory precedent inquiry', tag: 'INPUT' },
    { name: 'Role Mapping', desc: 'Classifying target legal intent (Ratio Decidendi vs. Party Submission)', tag: 'ROUTING' },
    { name: 'Filtered Retrieval', desc: 'Metadata-filtered vector search over role-constrained ChromaDB segments', tag: 'DENSE RETRIEVAL' },
    { name: 'Reranking', desc: 'Cross-encoder scoring to filter out high-similarity semantic distractors', tag: 'CROSS-ENCODER' },
    { name: 'Relevance Grading', desc: 'Agentic evaluator grading evidence sufficiency and attribution match', tag: 'CRITIC' },
    { name: 'Query Rewriting / Correction', desc: 'Iterative query reformulation if retrieved evidence is weak or ambiguous', tag: 'LANGGRAPH' },
    { name: 'Grounded Generation', desc: 'Constrained synthesis utilizing Llama 3.2 3B via Ollama', tag: 'GENERATION' },
    { name: 'Citation Verification', desc: 'Strict verification of paragraph numbers and legal bench attributions', tag: 'GUARDRAIL' },
    { name: 'Final Answer', desc: 'Attributed legal brief or calibrated abstention for unanswerable queries', tag: 'OUTPUT' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      
      {/* Sticky Top Bar */}
      <div className="sticky top-0 z-40 bg-obsidian-950/90 backdrop-blur-md border-b border-purple-500/20 px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-500 p-[1.5px]">
            <div className="w-full h-full bg-[#07070d] rounded-[6px] flex items-center justify-center">
              <Scale className="w-4 h-4 text-cyan-300" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-display font-bold text-white text-sm sm:text-base">
                JurisGraph
              </span>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-violet-950 text-violet-300 border border-violet-800/40">
                RESEARCH CAPSTONE
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-400 hidden sm:block">
              Agentic Corrective RAG with Rhetorical Role Segmentation
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleCopyCitation}
            className="hidden md:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 hover:text-white bg-obsidian-900 border border-white/10 hover:border-violet-500/30 transition-all"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-violet-400" />}
            <span>{copiedLink ? 'Citation Copied' : 'Cite Project'}</span>
          </button>

          <button
            onClick={onClose}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-obsidian-800 hover:bg-violet-950 text-slate-300 hover:text-white border border-white/10 hover:border-violet-500/40 transition-all"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>
      </div>

      {/* Modal Main Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Project Header Banner */}
        <div className="relative p-6 sm:p-10 rounded-3xl glass-panel border-purple-500/30 bg-gradient-to-br from-obsidian-900/90 via-obsidian-950 to-purple-950/30 shadow-[0_0_50px_-10px_rgba(139,92,246,0.3)] mb-12 overflow-hidden">
          {/* Subtle Ambient Background Light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 via-violet-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/40 text-xs font-mono text-cyan-300 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DOMAIN-SPECIALIZED LEGAL NLP & AGENTIC AI</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-4">
              JurisGraph
            </h1>

            <p className="text-base sm:text-xl font-medium text-purple-200/90 leading-relaxed mb-6 max-w-4xl font-display">
              Agentic Corrective Retrieval-Augmented Generation for Indian Legal Documents with Rhetorical Role Segmentation
            </p>

            {/* Quick Links & Placeholders */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono bg-obsidian-950 border border-white/10 text-slate-300">
                <Code2 className="w-3.5 h-3.5 text-violet-400" />
                <span>GitHub:</span>
                <span className="text-violet-300 font-semibold">[Repository Placeholder]</span>
              </div>

              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono bg-obsidian-950 border border-white/10 text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Live Demo:</span>
                <span className="text-cyan-300 font-semibold">[Streamlit App Placeholder]</span>
              </div>

              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono bg-emerald-950/60 border border-emerald-800/40 text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Technical Writeup Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overview & Problem Statement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Overview */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-white/10 hover:border-violet-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2.5 text-xs font-mono uppercase tracking-wider text-violet-400 mb-3">
                <FileText className="w-4 h-4" />
                <span>Project Overview</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-4">
                Domain-Specialized Legal Intelligence
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                JurisGraph is a domain-specialized legal intelligence system designed to analyze Indian Supreme Court and High Court judgments. It combines rhetorical role segmentation, agentic corrective retrieval, semantic reranking, and citation-grounded generation to provide reliable and context-aware legal document analysis.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-xs font-mono text-slate-400">
              Focus: Indian Supreme Court & High Court Judgments
            </div>
          </div>

          {/* Problem Statement */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-red-500/20 bg-gradient-to-br from-obsidian-900 to-red-950/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2.5 text-xs font-mono uppercase tracking-wider text-red-400 mb-3">
                <AlertTriangle className="w-4 h-4" />
                <span>Problem Statement</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-4">
                The Failure of Arbitrary Legal Chunking
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Traditional RAG systems often struggle with long legal judgments because arbitrary chunking can mix arguments from different parties with judicial reasoning. This can lead to incorrect party attribution, hallucinated legal facts, and unreliable citations.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-red-500/20 text-xs font-mono text-red-300/80">
              Risk: High latent hallucination & inverted judicial authority
            </div>
          </div>

        </div>

        {/* Reported Research & Evaluation Metrics */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/40 text-xs font-mono text-emerald-400 mb-2">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>EXPERIMENTAL BENCHMARKS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Research and Evaluation
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Reported experimental results from the project technical writeup.
              </p>
            </div>
            <div className="mt-3 sm:mt-0 text-[11px] font-mono text-amber-300/90 bg-amber-950/40 px-3 py-1 rounded-lg border border-amber-800/40">
              Reported in project technical writeup
            </div>
          </div>

          {/* 4 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="glass-panel p-5 rounded-2xl border-purple-500/30 hover:border-purple-400 transition-all">
              <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block mb-1">
                Rhetorical Role Macro F1
              </span>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-2">
                50.16% <span className="text-emerald-400 text-2xl">→ 57.52%</span>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Test Macro F1 improved after Viterbi HMM sequence smoothing on InLegalBERT predictions.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border-cyan-500/30 hover:border-cyan-400 transition-all">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                Passage Segmentation
              </span>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-cyan-300 mb-2">
                -74.2%
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Reduction in unnatural passage fragmentation via role-aware discourse chunking.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border-emerald-500/30 hover:border-emerald-400 transition-all">
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                Adversarial Abstention
              </span>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-emerald-400 mb-2">
                100%
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Reported abstention rate on adversarial unanswerable queries to prevent false advice.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border-blue-500/30 hover:border-blue-400 transition-all">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block mb-1">
                False-Positive Hallucination
              </span>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-blue-300 mb-2">
                0%
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Reported false-positive hallucination rate on the unanswerable query benchmark.
              </p>
            </div>

          </div>
        </div>

        {/* Key Features Grid */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-violet-400 font-semibold block mb-1">
              ENGINEERING & NLP INNOVATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'Rhetorical Role Segmentation',
                desc: 'Utilizes InLegalBERT fine-tuned for legal discourse identification across Indian case law.',
                icon: Brain
              },
              {
                title: 'Viterbi HMM Sequence Smoothing',
                desc: 'Applies probabilistic Hidden Markov Model decoding to remove spurious tag fluctuations.',
                icon: TrendingUp
              },
              {
                title: 'Role-Aware Document Chunking',
                desc: 'Constructs semantic units anchored strictly to authoring speaker and judicial role.',
                icon: Layers
              },
              {
                title: 'Agentic Corrective RAG Workflow',
                desc: 'Orchestrated via LangGraph with cyclic reflection, conditional routing, and fallback states.',
                icon: Workflow
              },
              {
                title: 'Semantic Retrieval & Reranking',
                desc: 'ChromaDB vector store with BGE embeddings paired with cross-encoder precision rerankers.',
                icon: Database
              },
              {
                title: 'Query Rewriting & Self-Correction',
                desc: 'Autonomous reformulation if initial retrieval evidence is flagged incomplete or ambiguous.',
                icon: GitBranch
              },
              {
                title: 'Paragraph-Level Grounded Citations',
                desc: 'Constrained synthesis enforcing direct paragraph-level verbatim attribution links.',
                icon: CheckCircle2
              },
              {
                title: 'Unanswerable Question Abstention',
                desc: 'Calibrated guardrail that gracefully abstains rather than inventing legal conclusions.',
                icon: ShieldCheck
              },
              {
                title: 'Domain-Specialized Cross-Encoders',
                desc: 'Distinguishes petitioner submissions from final binding ratio decidendi.',
                icon: Scale
              }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="glass-panel p-5 rounded-2xl border-white/10 hover:border-violet-500/40 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-violet-950/70 border border-violet-800/40 flex items-center justify-center text-violet-400 mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1.5">{feature.title}</h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* System Architecture (Interactive Dual Workflow) */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
                DUAL-WORKFLOW PIPELINE SPECIFICATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                System Architecture
              </h2>
            </div>

            {/* Workflow Switcher Tabs */}
            <div className="mt-4 sm:mt-0 flex items-center space-x-2 bg-obsidian-950 p-1.5 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveWorkflowTab('ingestion')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeWorkflowTab === 'ingestion'
                    ? 'bg-violet-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                1. Ingestion & Indexing Pipeline
              </button>
              <button
                onClick={() => setActiveWorkflowTab('inference')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeWorkflowTab === 'inference'
                    ? 'bg-cyan-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                2. Query & Corrective Inference
              </button>
            </div>
          </div>

          {/* Workflow Interactive Visualizer */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-cyan-500/20 bg-gradient-to-br from-obsidian-950 via-obsidian-900 to-purple-950/20 shadow-2xl relative overflow-hidden">
            
            {activeWorkflowTab === 'ingestion' ? (
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-purple-300 uppercase tracking-wider mb-6">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>PIPELINE 01: DOCUMENT EXTRACTION, CLASSIFICATION & INDEXING FLOW</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
                  {ingestionSteps.map((step, idx) => (
                    <div key={idx} className="relative p-4 rounded-2xl bg-obsidian-900/90 border border-white/10 hover:border-purple-400 transition-all flex flex-col justify-between group">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/40">
                            STEP 0{idx + 1}
                          </span>
                          <span className="text-[9px] font-mono text-slate-500">{step.tag}</span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-semibold text-white mb-1.5 group-hover:text-purple-300 transition-colors">
                          {step.name}
                        </h4>
                        <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                      {idx < ingestionSteps.length - 1 && (
                        <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-purple-400">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-cyan-300 uppercase tracking-wider mb-6">
                  <GitBranch className="w-4 h-4 text-cyan-400" />
                  <span>PIPELINE 02: AGENTIC CORRECTIVE RETRIEVAL & GROUNDED SYNTHESIS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {inferenceSteps.map((step, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-obsidian-900/90 border border-white/10 hover:border-cyan-400 transition-all flex flex-col justify-between group">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                            NODE 0{idx + 1}
                          </span>
                          <span className="text-[9px] font-mono text-slate-500">{step.tag}</span>
                        </div>
                        <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                          {step.name}
                        </h4>
                        <p className="text-xs text-slate-400 font-light leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-slate-400 gap-2">
              <div>
                Workflow Standard: <span className="text-cyan-300">LangGraph State Machine Architecture</span>
              </div>
              <div className="text-purple-300">
                Model Backbone: InLegalBERT + Llama 3.2 3B (Ollama)
              </div>
            </div>

          </div>
        </div>

        {/* Technology Stack in Categorized Groups */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold block mb-1">
              TOOLCHAIN & FRAMEWORKS
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Technology Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { category: 'Programming', items: ['Python'] },
              { category: 'Deep Learning', items: ['PyTorch', 'Transformers'] },
              { category: 'NLP', items: ['InLegalBERT', 'Sentence Transformers'] },
              { category: 'Agentic AI', items: ['LangGraph', 'LangChain'] },
              { category: 'Vector Database', items: ['ChromaDB'] },
              { category: 'LLM', items: ['Ollama', 'Llama 3.2 3B'] },
              { category: 'Frontend', items: ['Streamlit'] },
              { category: 'Evaluation', items: ['DeepEval', 'Pytest'] },
            ].map((group, idx) => (
              <div key={idx} className="glass-panel p-5 rounded-2xl border-white/10 hover:border-violet-500/30 transition-all">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-3">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg text-xs font-mono bg-violet-950/70 text-violet-200 border border-violet-800/40">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Contribution & Project Impact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* My Contribution */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-white/10">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
              <UserCheck className="w-4 h-4" />
              <span>Project Role & Authorship</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-4">
              My Contribution
            </h2>
            <p className="text-xs font-mono text-slate-400 mb-4">
              End-to-end NLP & Agentic AI Research Project:
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-light">
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Legal Document Processing Pipeline:</strong> Designed the complete parsing and token-level boundary extraction workflow.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Rhetorical Role Integration:</strong> Integrated InLegalBERT classification with Viterbi HMM sequence smoothing to prevent arbitrary chunking.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Corrective Retrieval & Query Rewriting:</strong> Implemented LangGraph state machine with cyclic evidence evaluation and reformulation.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Grounded Answer Generation:</strong> Built strict paragraph-level citation anchoring mechanisms enforcing zero unattributed claims.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Interactive Legal Interface:</strong> Developed the Streamlit legal intelligence dashboard for real-time judgment analysis.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Evaluation & Hallucination Prevention:</strong> Benchmarked retrieval accuracy, abstention rates, and citation fidelity using DeepEval.</span>
              </li>
            </ul>
          </div>

          {/* Project Impact */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-purple-500/20 bg-gradient-to-br from-obsidian-900 to-purple-950/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-purple-400 mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Practical Significance</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-4">
                Project Impact
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                JurisGraph aims to help <strong>legal researchers, advocates, judicial clerks, law students, and compliance professionals</strong> analyze complex Indian legal judgments more efficiently.
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-light">
                <div className="p-3.5 rounded-xl bg-obsidian-950/80 border border-white/5">
                  <strong className="text-white">Accelerating Precedent Discovery:</strong> Pinpointing authoritative judicial rulings while filtering out irrelevant counsel arguments in 100+ page judgments.
                </div>
                <div className="p-3.5 rounded-xl bg-obsidian-950/80 border border-white/5">
                  <strong className="text-white">Eliminating Citation Risk:</strong> Giving advocates and judicial clerks confidence through zero-hallucination paragraph tracing and automatic unanswerable query abstention.
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-purple-300">
                Monica S. • NLP Portfolio
              </span>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-md transition-all"
              >
                Back to Portfolio
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
