import React, { useState, useEffect } from 'react';
import { initialReflections, ReflectionItem } from '../data/portfolioData';
import { MessageSquareQuote, Sparkles, Edit3, Save, X, Lightbulb, BookmarkCheck } from 'lucide-react';

const REFLECTIONS_STORAGE_KEY = 'monica_s_reflections';

export const Reflections: React.FC = () => {
  const [reflections, setReflections] = useState<ReflectionItem[]>(() => {
    try {
      const saved = localStorage.getItem(REFLECTIONS_STORAGE_KEY) || localStorage.getItem('monica_saravanan_reflections');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return initialReflections;
  });

  const [activeEditingRef, setActiveEditingRef] = useState<ReflectionItem | null>(null);
  const [editInsight, setEditInsight] = useState('');
  const [editTakeaway, setEditTakeaway] = useState('');
  const [editTitle, setEditTitle] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(REFLECTIONS_STORAGE_KEY, JSON.stringify(reflections));
    } catch {
      // Ignore
    }
  }, [reflections]);

  const openEditModal = (item: ReflectionItem) => {
    setActiveEditingRef(item);
    setEditTitle(item.title);
    setEditInsight(item.insight);
    setEditTakeaway(item.takeaway);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeEditingRef) return;

    setReflections((prev) =>
      prev.map((r) =>
        r.id === activeEditingRef.id
          ? {
              ...r,
              title: editTitle,
              insight: editInsight,
              takeaway: editTakeaway,
              isPlaceholder: false,
            }
          : r
      )
    );
    setActiveEditingRef(null);
  };

  return (
    <section id="reflections" className="relative py-28 border-t border-purple-500/10">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-electric-violet/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-violet-950/70 border border-violet-800/40 text-xs font-mono text-violet-300 mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>CRITICAL INQUIRY & METANARRATIVE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Learning Reflections & Synthesis
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 font-light">
            Insights on the intersection of formal computational linguistics, transformer architectures, and ethical domain reasoning.
          </p>
        </div>

        {/* Reflections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reflections.map((ref) => (
            <div
              key={ref.id}
              className={`glass-panel rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${
                ref.isPlaceholder
                  ? 'border-dashed border-amber-500/30 bg-obsidian-950/60'
                  : 'border-white/10 hover:border-violet-500/40 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)]'
              }`}
            >
              {/* Top ambient highlight */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-600/20 transition-all" />

              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-950/80 text-violet-300 border border-violet-800/50">
                    {ref.category}
                  </span>
                  {ref.isPlaceholder && (
                    <span className="text-[11px] font-mono text-amber-400/90 flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Editable Placeholder</span>
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-200 transition-colors mb-4 leading-snug">
                  {ref.title}
                </h3>

                {/* Main Reflection Text */}
                <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                  {ref.insight}
                </p>

                {/* Core Takeaway Box */}
                <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-white/5 group-hover:border-violet-500/20 transition-colors mb-4">
                  <div className="flex items-center space-x-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1.5">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>Key Epistemic Takeaway</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-mono italic">
                    "{ref.takeaway}"
                  </p>
                </div>
              </div>

              {/* Card Footer: Edit Trigger */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-2">
                <span className="text-xs font-mono text-slate-500">
                  Monica S. • NLP
                </span>
                <button
                  onClick={() => openEditModal(ref)}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-violet-600/20 border border-white/5 hover:border-violet-500/40 transition-all"
                >
                  <Edit3 className="w-3 h-3 text-violet-400" />
                  <span>{ref.isPlaceholder ? 'Personalize Reflection' : 'Edit Reflection'}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Edit Reflection Modal */}
      {activeEditingRef && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-xl bg-obsidian-900 border border-purple-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveEditingRef(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-obsidian-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-800/50 text-purple-400">
                <BookmarkCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white">
                  Edit Reflection & Academic Insights
                </h3>
                <p className="text-xs font-mono text-purple-300">
                  Category: {activeEditingRef.category}
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Reflection Title
                </label>
                <input
                  type="text"
                  required
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-800 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Reflection Body / Theoretical Analysis
                </label>
                <textarea
                  rows={5}
                  required
                  value={editInsight}
                  onChange={(e) => setEditInsight(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-800 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Epistemic Takeaway (One Key Sentence)
                </label>
                <input
                  type="text"
                  required
                  value={editTakeaway}
                  onChange={(e) => setEditTakeaway(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-800 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 font-mono"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveEditingRef(null)}
                  className="px-4 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-purple-600/30"
                >
                  <Save className="w-4 h-4" />
                  <span>Update Reflection</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
