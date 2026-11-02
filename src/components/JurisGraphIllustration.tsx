import React from 'react';
import { 
  Brain, Database, RefreshCw, CheckCircle2, 
  ShieldCheck
} from 'lucide-react';

export const JurisGraphIllustration: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-obsidian-950/90 border border-purple-500/20 p-5 relative overflow-hidden shadow-inner group">
      {/* Background Subtle Gradient Mesh */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-700" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-violet-600/10 rounded-full blur-2xl group-hover:bg-violet-600/20 transition-all duration-700" />
      
      {/* Diagram Header */}
      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[11px] font-mono text-cyan-300 font-semibold tracking-wider uppercase">
            JurisGraph Architecture Blueprint
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-500">
          InLegalBERT • LangGraph • ChromaDB
        </span>
      </div>

      {/* Interactive Micro-Architecture Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative z-10">
        
        {/* Node 1: InLegalBERT + HMM */}
        <div className="p-3.5 rounded-xl bg-obsidian-900/90 border border-violet-500/30 hover:border-violet-400 transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-mono text-violet-400 px-1.5 py-0.5 rounded bg-violet-950/80 border border-violet-800/40">
              STAGE 01
            </span>
            <Brain className="w-3.5 h-3.5 text-violet-400" />
          </div>
          <div className="text-xs font-bold text-white mb-1">InLegalBERT</div>
          <p className="text-[10px] text-slate-400 font-light leading-snug">
            Rhetorical role classification + Viterbi HMM smoothing
          </p>
          <div className="mt-2 text-[9px] font-mono text-cyan-300">
            F1: 50.16% → 57.52%
          </div>
        </div>

        {/* Node 2: Role-Aware ChromaDB */}
        <div className="p-3.5 rounded-xl bg-obsidian-900/90 border border-cyan-500/30 hover:border-cyan-400 transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-mono text-cyan-400 px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/40">
              STAGE 02
            </span>
            <Database className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="text-xs font-bold text-white mb-1">ChromaDB</div>
          <p className="text-[10px] text-slate-400 font-light leading-snug">
            BGE embeddings + speaker-filtered semantic indexing
          </p>
          <div className="mt-2 text-[9px] font-mono text-purple-300">
            -74.2% Fragmentation
          </div>
        </div>

        {/* Node 3: LangGraph Corrective Agent */}
        <div className="p-3.5 rounded-xl bg-obsidian-900/90 border border-purple-500/30 hover:border-purple-400 transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-mono text-purple-400 px-1.5 py-0.5 rounded bg-purple-950/80 border border-purple-800/40">
              STAGE 03
            </span>
            <RefreshCw className="w-3.5 h-3.5 text-purple-400 animate-spin-slow" />
          </div>
          <div className="text-xs font-bold text-white mb-1">LangGraph CRAG</div>
          <p className="text-[10px] text-slate-400 font-light leading-snug">
            Cross-encoder reranking & iterative query rewriting
          </p>
          <div className="mt-2 text-[9px] font-mono text-emerald-400">
            100% Abstention Safety
          </div>
        </div>

        {/* Node 4: Grounded Answer Synthesis */}
        <div className="p-3.5 rounded-xl bg-obsidian-900/90 border border-emerald-500/30 hover:border-emerald-400 transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-mono text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/40">
              STAGE 04
            </span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-xs font-bold text-white mb-1">Grounded Synthesis</div>
          <p className="text-[10px] text-slate-400 font-light leading-snug">
            Llama 3.2 3B (Ollama) with paragraph citation links
          </p>
          <div className="mt-2 text-[9px] font-mono text-blue-300">
            0% Hallucination Rate
          </div>
        </div>

      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span className="flex items-center space-x-1.5">
          <ShieldCheck className="w-3 h-3 text-cyan-400" />
          <span>Role Segmentation Preserved</span>
        </span>
        <span className="text-slate-500">
          Indian Supreme Court & High Court Judgments
        </span>
      </div>
    </div>
  );
};
