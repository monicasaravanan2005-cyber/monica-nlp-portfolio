import React from 'react';
import { Layers, ExternalLink } from 'lucide-react';

export const ClassActivitiesPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      
      {/* Header */}
      <div className="mb-10 pb-6 border-b border-white/10">
        <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
          <Layers className="w-4 h-4" />
          <span>Interactive Class Exercises</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Class Activities
        </h1>
        <p className="text-slate-400 text-sm mt-2 max-w-2xl font-light">
          A collection of focused coursework exercises, linguistic investigations, and applied computational linguistics tasks completed during class sessions.
        </p>
      </div>

      <div className="space-y-8">

        {/* Activity 1: Ancient Tamil Translation Comparison */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <span className="text-[11px] font-mono text-purple-300 bg-purple-950 px-2.5 py-0.5 rounded border border-purple-800/40 block w-fit mb-2">
            LINGUISTIC TRANSLATION ANALYSIS
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
            Ancient Tamil Translation Comparison
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            A comparative linguistic analysis evaluating translations of classical Tamil literary passages. The study examines how historical versus contemporary translation models handle morphological richness, agglutinative syntax, poetic metaphor, and cultural nuance.
          </p>
        </div>

        {/* Activity 2: Broadway Map NLP Application */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950 px-2.5 py-0.5 rounded border border-cyan-800/40">
              APPLIED NLP ASSISTANT
            </span>
            <span className="text-xs font-mono text-slate-500">
              thebroadwaymap.com
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
            Broadway Map NLP Application
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed mb-4">
            An NLP-powered Broadway Show Discovery and Recommendation Assistant that allows users to search for Broadway shows using natural language. Rather than manually navigating map markers, users query the assistant about shows, genres, theatres, performance dates, and subjective preferences.
          </p>

          <div className="mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-medium">
              Applied NLP Techniques:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Intent Classification',
                'Named Entity Recognition (NER)',
                'Semantic Search',
                'Content-Based Recommendation',
                'Retrieval-Augmented Generation (RAG)',
                'Conversational Context Tracking'
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-obsidian-950 text-slate-300 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-end text-xs font-mono">
            <a
              href="https://www.thebroadwaymap.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-800/40 transition-colors"
            >
              <span>Visit Broadway Map Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Activity 3: Metaphor Identification */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <span className="text-[11px] font-mono text-purple-300 bg-purple-950 px-2.5 py-0.5 rounded border border-purple-800/40 block w-fit mb-2">
            FIGURATIVE LANGUAGE & SEMANTICS
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
            Metaphor Identification
          </h2>
          <div className="p-3.5 rounded-xl bg-obsidian-950 border border-purple-500/20 text-purple-200 font-mono text-sm mb-3">
            “It's raining cats and dogs outside.”
          </div>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            This expression is a traditional English metaphorical idiom used to describe exceptionally heavy, torrential rain. In Natural Language Processing, recognizing non-literal figurative language presents an important challenge: models must differentiate between compositionally literal readings and idiomatic non-compositional semantics to prevent incorrect inference.
          </p>
        </div>

        {/* Activity 4: India Through NLP — A Cultural State Classification System */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950 px-2.5 py-0.5 rounded border border-cyan-800/40 block w-fit mb-2">
            TEXT CLASSIFICATION & MACHINE LEARNING
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
            India Through NLP — A Cultural State Classification System
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed mb-3">
            This activity explores how NLP and machine learning can analyse textual descriptions of Indian states using linguistic, cultural, and geographical features. The system processes descriptive information regarding state languages, literature, cuisines, festivals, traditional attire, climate, geography, and regional cultural practices.
          </p>
          <p className="text-sm text-slate-300 font-light leading-relaxed mb-4">
            NLP techniques extract meaningful features from raw textual descriptions, which are then analyzed by a machine learning model to predict whether a state belongs to the North Indian or South Indian category (using Kerala and Punjab as primary illustrative examples).
          </p>
          <div className="p-3 rounded-xl bg-obsidian-950 border border-white/5 text-xs text-slate-400 font-mono">
            Note: This classification represents a simplified pedagogical model of India's vast cultural diversity and inherently depends on the specific feature definitions and training corpora utilized.
          </div>
        </div>

        {/* Activity 5: CBDB — China Biographical Database Project */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950 px-2.5 py-0.5 rounded border border-cyan-800/40 block w-fit mb-2">
            TEXT MINING & DIGITAL HUMANITIES
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
            CBDB — China Biographical Database Project
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed mb-3">
            The China Biographical Database (CBDB) is a freely accessible relational database holding biographical records for approximately 657,909 historical figures from Chinese history. Initiated through the historical scholarship of Robert M. Hartwell, the project is jointly developed by Harvard University's Fairbank Center for Chinese Studies, Academia Sinica, and Peking University.
          </p>
          <p className="text-sm text-slate-300 font-light leading-relaxed mb-4">
            Data sources include published biographical indexes, pre-existing historical archives, digitized historical texts, and text mining methods. The database systematically stores historical names, dates, kinship lineages, social associations, administrative offices, career timelines, geographic places, and family backgrounds, demonstrating how large-scale text mining and structured databases empower digital humanities research.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono text-slate-400">
            <div className="p-2 rounded bg-obsidian-950 border border-white/5 text-center">
              657,909+ Figures
            </div>
            <div className="p-2 rounded bg-obsidian-950 border border-white/5 text-center">
              Harvard • Sinica • Peking
            </div>
            <div className="p-2 rounded bg-obsidian-950 border border-white/5 text-center">
              Relational Text Mining
            </div>
            <div className="p-2 rounded bg-obsidian-950 border border-white/5 text-center">
              Kinship & Careers
            </div>
          </div>
        </div>

        {/* Activity 6: CountVectorizer and Document Similarity */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono text-purple-300 bg-purple-950 px-2.5 py-0.5 rounded border border-purple-800/40">
              PYTHON IMPLEMENTATION
            </span>
            <span className="text-xs font-mono text-slate-500">
              CountVectorizer & Cosine Similarity
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
            CountVectorizer and Document Similarity
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed mb-4">
            A concise Python implementation illustrating how text documents are converted into numerical feature vectors using scikit-learn's <code className="text-purple-300 font-mono text-xs">CountVectorizer</code> to construct a binary Bag of Words representation. The vocabulary is created across input documents, sentences are vectorized, and their pairwise alignment is evaluated using Cosine Similarity on OCR-related sentences.
          </p>

          {/* Code Preview Snippet */}
          <div className="rounded-xl bg-obsidian-950 border border-white/10 p-4 font-mono text-xs text-slate-300 overflow-x-auto">
            <div className="text-slate-500 mb-2">// Python Implementation Snippet</div>
            <pre className="text-slate-200">
{`from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# OCR sentences comparison
doc1 = "Optical Character Recognition converts scanned documents into editable text."
doc2 = "OCR technology extracts textual characters from scanned image files."

# Binary Bag of Words Vectorization
vectorizer = CountVectorizer(binary=True)
X = vectorizer.fit_transform([doc1, doc2])

# Cosine Similarity computation
similarity = cosine_similarity(X[0:1], X[1:2])
print(f"Document Similarity: {similarity[0][0]:.4f}")`}
            </pre>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono text-slate-400">
            <span className="px-2 py-0.5 rounded bg-obsidian-950 border border-white/5">CountVectorizer</span>
            <span className="px-2 py-0.5 rounded bg-obsidian-950 border border-white/5">Binary Bag of Words</span>
            <span className="px-2 py-0.5 rounded bg-obsidian-950 border border-white/5">Vocabulary Creation</span>
            <span className="px-2 py-0.5 rounded bg-obsidian-950 border border-white/5">Cosine Similarity</span>
          </div>
        </div>

      </div>

    </div>
  );
};
