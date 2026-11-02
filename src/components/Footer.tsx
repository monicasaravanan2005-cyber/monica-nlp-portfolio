import React from 'react';
import { Heart, Github, GraduationCap } from 'lucide-react';

interface FooterProps {
  onNavigate: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-20 border-t border-purple-500/15 bg-obsidian-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Faculty Acknowledgment Box */}
        <div className="p-6 rounded-2xl bg-obsidian-900/60 border border-purple-500/20 max-w-4xl mx-auto mb-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center justify-center sm:justify-start space-x-1.5 text-xs font-mono text-purple-300 mb-1">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/40" />
              <span>FACULTY ACKNOWLEDGMENT</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              With sincere gratitude to the course instructors, mentors, and teaching assistants of <strong>Natural Language Processing & Computational Linguistics</strong> for their guidance and academic inspiration.
            </p>
          </div>
          <div className="shrink-0 flex items-center space-x-2 text-xs font-mono text-cyan-400 px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-800/40">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Year 2026</span>
          </div>
        </div>

        {/* Footer Navigation & Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 border-t border-white/5 pt-6">
          <div>
            © {new Date().getFullYear()} Monica S. • NLP & Computational Linguistics Portfolio
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/ZEKRAALL-0811/NLP-Corrective-RAG-for-Indian-Judgement-Legal-Document-Segmentation.git"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-purple-400" />
              <span>JurisGraph Repo</span>
            </a>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
