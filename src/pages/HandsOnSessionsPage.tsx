import React from 'react';
import { FileText, ExternalLink, AlertCircle } from 'lucide-react';

export const HandsOnSessionsPage: React.FC = () => {
  const sessions = [
    {
      id: 'session-1',
      sessionNumber: '01',
      title: 'Hands-on Session 1: Text Preprocessing & Vector Space Models',
      fileName: 'nlp_handson_session_1.pdf',
      filePath: '/nlp_handson_session_1.pdf',
      description: 'Practical laboratory implementation focusing on the foundational stages of NLP pipelines, from raw text ingestion to structured numerical representation.',
      concepts: [
        'Tokenization & Sentence Splitting',
        'Stopword Removal & Lemmatization',
        'Term Frequency-Inverse Document Frequency (TF-IDF)',
        'Vector Space Representation'
      ],
      note: 'PDF file pending upload. Please place nlp_handson_session_1.pdf into the public folder.'
    },
    {
      id: 'session-2',
      sessionNumber: '02',
      title: 'Hands-on Session 2: Classification, Similarity & Semantic Evaluation',
      fileName: 'nlp_handson_session_2.pdf',
      filePath: '/nlp_handson_session_2.pdf',
      description: 'Laboratory exercise exploring document similarity computations, feature matrix extraction, and training statistical classifiers on textual datasets.',
      concepts: [
        'CountVectorizer & Document-Term Matrix',
        'Cosine Similarity Benchmarking',
        'Supervised Text Classification',
        'Model Evaluation & Precision/Recall Metrics'
      ],
      note: 'PDF file pending upload. Please place nlp_handson_session_2.pdf into the public folder.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      
      {/* Header */}
      <div className="mb-10 pb-6 border-b border-white/10">
        <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
          <FileText className="w-4 h-4" />
          <span>Practical Coursework</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
          NLP Hands-on Sessions
        </h1>
        <p className="text-slate-400 text-sm mt-2 max-w-2xl font-light">
          Laboratory reports and practical implementations demonstrating core NLP algorithms, text transformation techniques, and evaluation metrics.
        </p>
      </div>

      {/* Session Cards */}
      <div className="space-y-6">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-violet-950 text-violet-300 border border-violet-800/40">
                  SESSION {session.sessionNumber}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {session.fileName}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
                {session.title}
              </h2>

              <p className="text-sm text-slate-300 font-light leading-relaxed mb-4">
                {session.description}
              </p>

              {/* Concepts Demonstrated */}
              <div className="mb-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block mb-2 font-medium">
                  Concepts & Techniques Demonstrated:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {session.concepts.map((concept, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-obsidian-950 text-slate-300 border border-white/5"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Document Action / Preview Bar */}
            <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-2 text-xs text-amber-300/80 font-mono">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{session.note}</span>
              </div>

              <a
                href={session.filePath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-medium text-purple-300 bg-purple-950/50 hover:bg-purple-900/60 border border-purple-800/40 transition-colors shrink-0"
              >
                <span>Open / View PDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
