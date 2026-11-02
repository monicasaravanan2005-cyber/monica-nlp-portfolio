import React from 'react';
import { MessageSquareQuote, Lightbulb } from 'lucide-react';

export const ReflectionsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      
      {/* Header */}
      <div className="mb-10 pb-6 border-b border-white/10">
        <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
          <MessageSquareQuote className="w-4 h-4" />
          <span>Academic & Personal Synthesis</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Reflections
        </h1>
        <p className="text-slate-400 text-sm mt-2 max-w-2xl font-light">
          Personal reflections on studying Natural Language Processing and Computational Linguistics, connecting formal theory with applied engineering and research.
        </p>
      </div>

      <div className="space-y-6">

        {/* 1. What I Learned Throughout the Course */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <h2 className="text-base font-semibold text-white mb-2 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>Theoretical Foundations & Linguistic Awareness</span>
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            Studying Natural Language Processing revealed to me that human language is far more than statistical token sequences—it is a deeply structured, context-dependent communication system. Moving from basic tokenization and vector space models to transformer architectures helped me understand how mathematical algorithms approximate semantic meaning and discourse structure.
          </p>
        </div>

        {/* 2. How Hands-on Activities Improved Understanding */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <h2 className="text-base font-semibold text-white mb-2 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Bridging Abstract Theory Through Laboratory Practice</span>
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            The hands-on laboratory sessions and coding exercises were instrumental in transforming mathematical definitions into working algorithms. Implementing text preprocessing, building document-term matrices with CountVectorizer, and computing pairwise cosine similarities demonstrated the concrete trade-offs between vocabulary size, sparsity, and computational efficiency.
          </p>
        </div>

        {/* 3. How the Project Helped Apply NLP Concepts */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <h2 className="text-base font-semibold text-white mb-2 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Applied Research Through JurisGraph</span>
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            Developing JurisGraph allowed me to apply theoretical NLP to a critical domain: Indian jurisprudence. It highlighted the limitations of generic models and naive chunking, showing why domain-specialized classification (InLegalBERT) and sequence decoding (Viterbi HMM) are crucial for preserving who said what before feeding text to generative models.
          </p>
        </div>

        {/* 4. How NLP Connects with Real-World Applications */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <h2 className="text-base font-semibold text-white mb-2 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            <span>High-Stakes Societal & Professional Impact</span>
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            In domains like law, healthcare, and public policy, hallucinations and inaccurate attributions carry severe consequences. Working on corrective retrieval and abstention mechanisms demonstrated that reliable AI requires deterministic verification layers, grounding guarantees, and calibrated uncertainty estimation rather than unverified generation.
          </p>
        </div>

        {/* 5. Influence on Future Aspirations */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <h2 className="text-base font-semibold text-white mb-2 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>Future Outlook in Computational Linguistics & AI</span>
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            This course solidified my passion for computational linguistics and agentic AI systems. I look forward to exploring multilingual processing across Indian vernacular languages, temporal knowledge graphs, and advancing verifiable, accountable natural language intelligence.
          </p>
        </div>

        {/* Core Takeaway Quote Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-violet-950/40 via-obsidian-900 to-indigo-950/30 border border-purple-500/20">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            <Lightbulb className="w-4 h-4" />
            <span>Core Epistemic Takeaway</span>
          </div>
          <p className="text-xs sm:text-sm text-purple-200 font-mono italic">
            “True computational language intelligence requires combining linguistic structure with agentic self-verification—ensuring that every generated assertion remains faithful to verified source reality.”
          </p>
          <div className="mt-3 text-right text-xs font-mono text-slate-400">
            — Monica S.
          </div>
        </div>

      </div>

    </div>
  );
};
