import React from 'react';
import { BookOpen, CheckCircle2 } from 'lucide-react';

export const LearningJourneyPage: React.FC = () => {
  const coreConcepts = [
    {
      title: 'Text Preprocessing',
      description: 'Cleaning, normalising text, case folding, removing stopwords, punctuation handling, and stemming/lemmatization to standardise unstructured text for computational analysis.'
    },
    {
      title: 'Tokenization',
      description: 'Segmenting running text into discrete linguistic units (words, subwords, sentences) using rule-based and statistical boundaries, addressing language-specific orthography.'
    },
    {
      title: 'Text Representation',
      description: 'Transforming discrete symbolic tokens into numerical representations suitable for mathematical algorithms and statistical learning frameworks.'
    },
    {
      title: 'Bag of Words (BoW)',
      description: 'Representing documents based on word occurrence frequencies or binary presence while disregarding syntax and word order, serving as a foundational vector space baseline.'
    },
    {
      title: 'Feature Extraction',
      description: 'Deriving numerical signals from text through n-grams, term frequency-inverse document frequency (TF-IDF), part-of-speech tags, and syntactic dependencies.'
    },
    {
      title: 'Document Similarity',
      description: 'Measuring semantic and lexical alignment between documents using geometric vector measures such as Cosine Similarity, Jaccard distance, and Euclidean metrics.'
    },
    {
      title: 'Natural Language Understanding (NLU)',
      description: 'Moving beyond surface statistics to interpret syntactic structures, semantic roles, intent, discourse relations, and contextual nuance.'
    },
    {
      title: 'NLP Applications',
      description: 'Applying language processing to real-world tasks such as information retrieval, question answering, translation comparison, recommendation, and text classification.'
    },
    {
      title: 'Computational Linguistics',
      description: 'Formally studying language using computational models, exploring morphological rules, syntactic grammars, formal automata, and rhetorical discourse segmentation.'
    },
    {
      title: 'NLP and Machine Learning',
      description: 'Training supervised classifiers and neural models on linguistic representations to predict classes, score relevance, and perform contextual sequence labeling.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      
      {/* Page Header */}
      <div className="mb-10 pb-6 border-b border-white/10">
        <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
          <BookOpen className="w-4 h-4" />
          <span>Curriculum Overview</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
          NLP Learning Journey
        </h1>
        <p className="text-slate-400 text-sm mt-2 max-w-2xl font-light">
          A systematic record of the foundational principles, analytical methodologies, and computational frameworks studied in Natural Language Processing and Computational Linguistics.
        </p>
      </div>

      {/* Course Knowledge Summary */}
      <div className="glass-panel p-6 rounded-2xl border-white/10 mb-10">
        <h2 className="text-base font-semibold text-white mb-2">
          Course Knowledge & Foundations
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed font-light">
          Throughout this course, I developed a structured understanding of how human language is modeled computationally. The journey began with foundational text preprocessing and symbolic representations, advanced through vector space models and lexical similarity metrics, and culminated in modern neural approaches, semantic understanding, and applied machine learning architectures.
        </p>
      </div>

      {/* Major Concepts Learned */}
      <div>
        <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-4">
          Major Concepts Learned
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coreConcepts.map((concept, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-obsidian-900/80 border border-white/5 hover:border-purple-500/30 transition-colors"
            >
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {concept.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {concept.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
