import React from 'react';
import { Scale, Image } from 'lucide-react';
import { JurisGraphIllustration } from '../components/JurisGraphIllustration';

export const FeaturedProjectPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      
      {/* Header */}
      <div className="mb-10 pb-6 border-b border-white/10">
        <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
          <Scale className="w-4 h-4" />
          <span>Capstone Research Initiative</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Featured Project — JurisGraph
        </h1>
        <p className="text-purple-300 font-mono text-xs sm:text-sm mt-1">
          Agentic Corrective Retrieval-Augmented Generation for Indian Legal Documents with Rhetorical Role Segmentation
        </p>
      </div>

      <div className="space-y-8">

        {/* Short Professional Project Overview */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <h2 className="text-base font-semibold text-white mb-3">
            Project Overview
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
            JurisGraph is a domain-specialized legal intelligence system engineered specifically to analyze Indian Supreme Court and High Court judgments. It combines rhetorical role segmentation, agentic corrective retrieval, semantic cross-encoder reranking, and citation-grounded generation to provide reliable, verifiable, and context-aware legal document analysis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light">
            <div className="p-4 rounded-xl bg-obsidian-950/80 border border-red-500/20">
              <span className="font-mono text-red-400 font-semibold block mb-1">
                The Problem Addressed:
              </span>
              <p className="text-slate-300 leading-relaxed">
                Traditional RAG systems struggle with lengthy judicial opinions because arbitrary token chunking severs legal context, conflating submissions made by petitioner/respondent counsel with binding judicial ratio decidendi, resulting in incorrect party attribution, hallucinated citations, and invalid legal advice.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-950/80 border border-emerald-500/20">
              <span className="font-mono text-emerald-400 font-semibold block mb-1">
                The Proposed Solution:
              </span>
              <p className="text-slate-300 leading-relaxed">
                JurisGraph introduces rhetorical role classification with InLegalBERT and Viterbi HMM smoothing to construct role-aware chunks. An agentic LangGraph workflow evaluates evidence sufficiency, triggers self-corrective query rewriting, enforces paragraph-level citations, and abstains on unanswerable questions.
              </p>
            </div>
          </div>
        </div>

        {/* Demonstration Photograph Container */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
              Project Demonstration Photo
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              monica_jurisgraph_demo.jpg
            </span>
          </div>

          <div className="rounded-xl border border-dashed border-white/10 p-8 text-center bg-obsidian-950/60">
            <Image className="w-8 h-8 text-slate-500 mx-auto mb-2" />
            <p className="text-xs font-mono text-slate-300">
              Demonstration Photo: <code className="text-purple-300">/monica_jurisgraph_demo.jpg</code>
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              Place your demonstration photograph in the public folder to display here.
            </p>
          </div>
        </div>

        {/* System Architecture Diagram Illustration */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              System Architecture & Pipeline
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              InLegalBERT • LangGraph • ChromaDB
            </span>
          </div>

          {/* Interactive Illustration */}
          <JurisGraphIllustration />

          {/* Architecture Image Upload Placeholder */}
          <div className="mt-4 rounded-xl border border-dashed border-white/10 p-6 text-center bg-obsidian-950/40">
            <p className="text-xs font-mono text-slate-400">
              Architecture Image File: <code className="text-cyan-300">/jurisgraph_architecture.png</code>
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Place your exported pipeline diagram into the public folder to display alongside this schematic.
            </p>
          </div>
        </div>

        {/* Reported Experimental Results */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              Reported Experimental Benchmarks
            </span>
            <span className="text-[10px] font-mono text-amber-300/90 bg-amber-950/40 px-2.5 py-0.5 rounded border border-amber-800/40">
              Reported in project writeup
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-obsidian-950 border border-white/5">
              <span className="text-[10px] font-mono text-purple-400 block mb-1">
                Macro F1 Improvement
              </span>
              <div className="text-xl font-display font-bold text-white">
                50.16% → 57.52%
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                After Viterbi HMM sequence smoothing
              </p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-950 border border-white/5">
              <span className="text-[10px] font-mono text-cyan-400 block mb-1">
                Passage Fragmentation
              </span>
              <div className="text-xl font-display font-bold text-cyan-300">
                -74.2%
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Reduction in unnatural cuts
              </p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-950 border border-white/5">
              <span className="text-[10px] font-mono text-emerald-400 block mb-1">
                Adversarial Abstention
              </span>
              <div className="text-xl font-display font-bold text-emerald-400">
                100%
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Rate on unanswerable queries
              </p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-950 border border-white/5">
              <span className="text-[10px] font-mono text-blue-400 block mb-1">
                False-Positive Hallucination
              </span>
              <div className="text-xl font-display font-bold text-blue-300">
                0%
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Reported on unanswerable suite
              </p>
            </div>
          </div>
        </div>

        {/* Key NLP & AI Techniques Summary */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
            Key NLP & AI Techniques Implemented
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              'InLegalBERT Rhetorical Classification',
              'Viterbi HMM Decoding',
              'Role-Aware Semantic Chunking',
              'LangGraph State Machine',
              'ChromaDB Vector Store',
              'BGE Contextual Embeddings',
              'Cross-Encoder Reranking',
              'Query Rewriting & Self-Correction',
              'Llama 3.2 3B (Ollama)',
              'Paragraph-Level Citation Verification',
              'Adversarial Abstention Guardrails'
            ].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-obsidian-950 text-slate-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
