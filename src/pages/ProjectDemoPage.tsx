import React from 'react';
import { Github, ExternalLink, Video, Sparkles } from 'lucide-react';

export const ProjectDemoPage: React.FC = () => {
  const driveEmbedUrl = "https://drive.google.com/file/d/1-aqtNRHnMzT3i12YGRshEY38Z76IATIo/preview";
  const driveViewUrl = "https://drive.google.com/file/d/1-aqtNRHnMzT3i12YGRshEY38Z76IATIo/view?usp=drive_link";
  const repoUrl = "https://github.com/ZEKRAALL-0811/NLP-Corrective-RAG-for-Indian-Judgement-Legal-Document-Segmentation.git";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      
      {/* Page Header */}
      <div className="mb-10 pb-6 border-b border-white/10">
        <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
          <Video className="w-4 h-4" />
          <span>System Walkthrough</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Project Demo
        </h1>
        <p className="text-slate-400 text-sm mt-2 max-w-2xl font-light">
          A video demonstration of JurisGraph showcasing document ingestion, InLegalBERT rhetorical role segmentation, LangGraph corrective retrieval, and grounded citation generation.
        </p>
      </div>

      <div className="space-y-8">
        
        {/* Main Video Demonstration Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          
          {/* Requested Heading */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-white/5 gap-3">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>INTERACTIVE DEMO PLAYER</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                JurisGraph — Project Demonstration
              </h2>
            </div>

            <a
              href={driveViewUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
            >
              <span>Open in Google Drive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Embedded Google Drive Preview Player (Fully Responsive) */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-obsidian-950 border border-purple-500/20 shadow-[0_0_35px_rgba(139,92,246,0.15)]">
            <iframe
              src={driveEmbedUrl}
              title="JurisGraph — Project Demonstration"
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </div>

          <p className="text-xs text-slate-400 mt-4 font-light leading-relaxed">
            The video demonstrates real-time Indian court judgment ingestion, rhetorical role classification using InLegalBERT, Viterbi HMM sequence smoothing, role-aware retrieval in ChromaDB, and LangGraph corrective query rewriting.
          </p>
        </div>

        {/* GitHub Repository Showcase Card (Positioned below the video) */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center space-x-2 text-xs font-mono text-purple-300 mb-1">
              <Github className="w-4 h-4 text-purple-400" />
              <span>OFFICIAL OPEN-SOURCE REPOSITORY</span>
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">
              Explore Codebase & Pipeline Implementation
            </h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Browse the complete repository containing rhetorical role classification notebooks, Viterbi HMM smoothers, LangGraph agentic CRAG loops, and the Streamlit legal interface.
            </p>
          </div>

          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 shadow-md hover:shadow-violet-600/30 transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

    </div>
  );
};
