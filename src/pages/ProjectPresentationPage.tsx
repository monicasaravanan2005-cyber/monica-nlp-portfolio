import React from 'react';
import { Presentation, Download, ExternalLink, Image as ImageIcon } from 'lucide-react';

export const ProjectPresentationPage: React.FC = () => {
  const pptFileName = "jurisgraph_presentation.pptx";
  const pptPath = `/${pptFileName}`;

  // Presentation photo gallery - easily extensible if more photos are provided
  const presentationPhotos = [
    {
      src: '/presentation_photo.jpg',
      alt: 'Monica S. presenting JurisGraph architecture in class',
      caption: 'Monica S. presenting the JurisGraph Agentic Corrective RAG architecture in class, demonstrating the multi-stage legal document processing and LangGraph state machine.',
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      
      {/* Header */}
      <div className="mb-10 pb-6 border-b border-white/10">
        <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
          <Presentation className="w-4 h-4" />
          <span>Academic Defense & Slides</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Project Presentation
        </h1>
        <p className="text-slate-400 text-sm mt-2 max-w-2xl font-light">
          Photographs and slides from my classroom defense and presentation of JurisGraph: Agentic Corrective RAG with Rhetorical Role Segmentation.
        </p>
      </div>

      <div className="space-y-8">
        
        {/* In-Class Presentation Photographs Gallery */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold mb-4">
            <ImageIcon className="w-4 h-4" />
            <span>Classroom Presentation Photograph</span>
          </div>

          <div className="space-y-4">
            {presentationPhotos.map((photo, idx) => (
              <div key={idx} className="space-y-3">
                <div className="relative w-full rounded-2xl overflow-hidden bg-obsidian-950 border border-white/10 shadow-2xl">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-auto object-cover max-h-[540px] mx-auto filter contrast-[1.02]"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed px-1">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Presentation Slide Deck Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
              Capstone Defense Deck
            </span>
            <span className="text-xs font-mono text-slate-500">
              {pptFileName}
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
            JurisGraph: Agentic Corrective RAG with Rhetorical Role Segmentation
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
            The presentation deck covers the architectural design, Indian legal corpus preprocessing, InLegalBERT classification nuances, Viterbi HMM sequence decoding math, LangGraph agentic state transitions, and evaluation metrics across Supreme Court precedents.
          </p>

          {/* Action Bar */}
          <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-slate-400 font-mono">
              File: <code className="text-purple-300">/{pptFileName}</code>
            </span>

            <div className="flex items-center space-x-3">
              <a
                href={pptPath}
                download
                className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Presentation</span>
              </a>

              <a
                href={pptPath}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-obsidian-900 border border-white/10 hover:border-white/20 transition-colors"
              >
                <span>Open / View</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Slide Deck Outline */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
            Presentation Slide Outline
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-light text-slate-300">
            <div className="p-3.5 rounded-xl bg-obsidian-950 border border-white/5">
              <strong className="text-white block font-mono text-[11px] mb-0.5">01. Motivation & Legal NLP Challenges</strong>
              Speaker entanglement and why standard RAG fails on Indian case law.
            </div>
            <div className="p-3.5 rounded-xl bg-obsidian-950 border border-white/5">
              <strong className="text-white block font-mono text-[11px] mb-0.5">02. Rhetorical Role Segmentation</strong>
              InLegalBERT token labeling & Viterbi HMM sequence decoding.
            </div>
            <div className="p-3.5 rounded-xl bg-obsidian-950 border border-white/5">
              <strong className="text-white block font-mono text-[11px] mb-0.5">03. Corrective Agentic Architecture</strong>
              LangGraph state graph, relevance grading, and iterative fallback loops.
            </div>
            <div className="p-3.5 rounded-xl bg-obsidian-950 border border-white/5">
              <strong className="text-white block font-mono text-[11px] mb-0.5">04. Empirical Evaluation & Impact</strong>
              Macro F1 gain, 100% abstention on unanswerable queries, and future scope.
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
