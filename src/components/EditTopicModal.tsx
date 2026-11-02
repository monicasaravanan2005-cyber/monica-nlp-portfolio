import React, { useState, useEffect } from 'react';
import { CourseTopicCard } from '../data/portfolioData';
import { X, Save, Sparkles, CheckCircle2 } from 'lucide-react';

interface EditTopicModalProps {
  isOpen: boolean;
  onClose: () => void;
  card: CourseTopicCard | null;
  onSave: (updatedCard: CourseTopicCard) => void;
}

export const EditTopicModal: React.FC<EditTopicModalProps> = ({
  isOpen,
  onClose,
  card,
  onSave,
}) => {
  const [formData, setFormData] = useState<CourseTopicCard>({
    id: '',
    moduleCode: 'MODULE 01',
    title: '',
    strategy: '',
    keyConcepts: [],
    learningNotes: '',
    category: 'Foundations',
    status: 'In Progress',
    dateAdded: 'Week 1',
  });

  const [conceptsInput, setConceptsInput] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (card) {
      setFormData(card);
      setConceptsInput(card.keyConcepts.join(', '));
    } else {
      setFormData({
        id: 'topic-' + Date.now(),
        moduleCode: 'MODULE 0' + Math.floor(Math.random() * 8 + 1),
        title: '[Course Topic Placeholder: Add Topic Name]',
        strategy: '[Study Strategy: Add class preparation and study strategy here]',
        keyConcepts: ['[Concept 1]', '[Concept 2]'],
        learningNotes: '[Add personal lab notes, questions, or key takeaways]',
        category: 'Foundations',
        status: 'In Progress',
        dateAdded: 'Current Week',
      });
      setConceptsInput('[Concept 1], [Concept 2]');
    }
    setSaveSuccess(false);
  }, [card, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedConcepts = conceptsInput
      .split(',')
      .map((c) => c.trim())
      .filter((c) => c.length > 0);

    const updated: CourseTopicCard = {
      ...formData,
      keyConcepts: parsedConcepts.length > 0 ? parsedConcepts : ['[Key Concept Placeholder]'],
    };

    onSave(updated);
    setSaveSuccess(true);
    setTimeout(() => {
      onClose();
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-obsidian-900 border border-purple-500/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(139,92,246,0.25)] relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-obsidian-800 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-800/50 text-purple-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-display font-bold text-white">
              {card ? 'Edit Course Topic & Strategy' : 'Add New Learning Module'}
            </h2>
            <p className="text-xs font-mono text-purple-300">
              Natural Language Processing and Computational Linguistics
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Module Code & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Module Code
              </label>
              <input
                type="text"
                required
                value={formData.moduleCode}
                onChange={(e) => setFormData({ ...formData, moduleCode: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-800 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 font-mono"
                placeholder="e.g. MODULE 01"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    category: e.target.value as CourseTopicCard['category'],
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-800 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
              >
                <option value="Foundations">Foundations</option>
                <option value="Algorithms">Algorithms</option>
                <option value="Deep Learning & LLMs">Deep Learning & LLMs</option>
                <option value="Applications">Applications</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value as CourseTopicCard['status'],
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-800 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
              >
                <option value="Planned">Planned</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          {/* Topic Title */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
              Topic Title / Subject Matter
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-800 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 font-medium"
              placeholder="e.g. [Topic: Syntactic Parsing & Dependency Trees]"
            />
          </div>

          {/* Strategy */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
              Study & Implementation Strategy
            </label>
            <textarea
              rows={3}
              value={formData.strategy}
              onChange={(e) => setFormData({ ...formData, strategy: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-800 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-purple-500"
              placeholder="e.g. [Study Strategy: Implementing shift-reduce parsing and analyzing edge cases...]"
            />
          </div>

          {/* Key Concepts (comma separated) */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
              Key Concepts & Formalisms (comma-separated)
            </label>
            <input
              type="text"
              value={conceptsInput}
              onChange={(e) => setConceptsInput(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-800 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
              placeholder="e.g. Tokenization, Perplexity, BPE, Hidden Markov Models"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Separate each concept or algorithm with a comma.
            </p>
          </div>

          {/* Personal Learning Notes / Takeaways */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
              Personal Notes, Laboratory Insights, or Homework Findings
            </label>
            <textarea
              rows={3}
              value={formData.learningNotes}
              onChange={(e) => setFormData({ ...formData, learningNotes: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-800 border border-white/10 text-slate-300 text-sm focus:outline-none focus:border-purple-500"
              placeholder="[Placeholder: Record class insights, lab takeaways, or experimental notes here]"
            />
          </div>

          {/* Modal Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>

            <button
              type="submit"
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all shadow-lg ${
                saveSuccess
                  ? 'bg-emerald-600 shadow-emerald-600/30'
                  : 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-purple-600/30'
              }`}
            >
              {saveSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
