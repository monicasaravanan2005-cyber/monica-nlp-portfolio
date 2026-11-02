import React, { useState, useEffect } from 'react';
import { CourseTopicCard, initialCourseTopics } from '../data/portfolioData';
import { EditTopicModal } from './EditTopicModal';
import { 
  BookOpen, Plus, Edit3, Trash2, Search, RotateCcw, 
  Sparkles, CheckCircle2, Clock, AlertCircle, Bookmark, Compass
} from 'lucide-react';

const STORAGE_KEY = 'monica_s_course_topics';

export const LearningJourney: React.FC = () => {
  const [topics, setTopics] = useState<CourseTopicCard[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('monica_saravanan_course_topics');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return initialCourseTopics;
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [editingCard, setEditingCard] = useState<CourseTopicCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Save to local storage whenever topics change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(topics));
    } catch {
      // Ignore write errors
    }
  }, [topics]);

  const handleSaveCard = (updatedCard: CourseTopicCard) => {
    setTopics((prev) => {
      const index = prev.findIndex((t) => t.id === updatedCard.id);
      if (index >= 0) {
        const next = [...prev];
        next[index] = updatedCard;
        return next;
      }
      return [updatedCard, ...prev];
    });
  };

  const handleDeleteCard = (id: string) => {
    if (window.confirm('Are you sure you want to remove this module placeholder?')) {
      setTopics((prev) => prev.filter((t) => t.id !== id));
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all modules to initial placeholder templates?')) {
      setTopics(initialCourseTopics);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const openAddModal = () => {
    setEditingCard(null);
    setIsModalOpen(true);
  };

  const openEditModal = (card: CourseTopicCard) => {
    setEditingCard(card);
    setIsModalOpen(true);
  };

  // Filter topics
  const filteredTopics = topics.filter((t) => {
    const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      t.title.toLowerCase().includes(q) ||
      t.moduleCode.toLowerCase().includes(q) ||
      t.strategy.toLowerCase().includes(q) ||
      t.keyConcepts.some((c) => c.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const getStatusBadge = (status: CourseTopicCard['status']) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
            <CheckCircle2 className="w-3 h-3" />
            <span>Completed</span>
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-amber-950/80 text-amber-400 border border-amber-800/50">
            <Clock className="w-3 h-3" />
            <span>In Progress</span>
          </span>
        );
      case 'Planned':
      default:
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-slate-900 text-slate-400 border border-slate-700/60">
            <AlertCircle className="w-3 h-3" />
            <span>Planned</span>
          </span>
        );
    }
  };

  return (
    <section id="journey" className="relative py-24 border-t border-purple-500/10">
      {/* Subtle backdrop elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-cyan-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-violet-950/70 border border-violet-800/40 text-xs font-mono text-violet-300 mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>ACADEMIC CURRICULUM & STRATEGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Learning Journey & Course Topics
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Structured study roadmaps, theoretical frameworks, and preparation strategies for Natural Language Processing & Computational Linguistics.
            </p>
          </div>

          {/* Action Controls */}
          <div className="mt-6 md:mt-0 flex items-center space-x-3">
            <button
              onClick={openAddModal}
              className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all hover:scale-[1.02]"
            >
              <Plus className="w-4 h-4" />
              <span>Add Module</span>
            </button>

            <button
              onClick={handleReset}
              title="Reset all cards to initial placeholders"
              className="flex items-center space-x-1.5 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white glass-panel-interactive border-white/5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Templates</span>
            </button>
          </div>
        </div>

        {/* Academic Integrity Notice Card */}
        <div className="mb-10 p-4 rounded-2xl glass-panel border-purple-500/20 bg-gradient-to-r from-purple-950/30 via-obsidian-900/50 to-indigo-950/20 flex items-start space-x-3.5">
          <div className="p-2 rounded-xl bg-purple-900/40 border border-purple-700/40 text-purple-300 shrink-0 mt-0.5">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <span className="font-semibold text-white">Curriculum Integrity Standard:</span> In accordance with course guidelines, topics are presented as clean, editable template cards (<code className="text-violet-300 font-mono text-xs">[Course Topic Placeholder]</code>). No artificial class topics or test scores are fabricated. Click <span className="text-violet-400 font-medium">"Edit Card"</span> on any module to insert your exact syllabus chapters, lab strategies, and lecture notes.
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {['All', 'Foundations', 'Algorithms', 'Deep Learning & LLMs', 'Applications'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.35)]'
                    : 'text-slate-400 hover:text-white bg-obsidian-900/80 border border-white/5 hover:border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search topics, concepts, strategies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-obsidian-900/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

        </div>

        {/* Topics Grid */}
        {filteredTopics.length === 0 ? (
          <div className="text-center py-16 glass-panel rounded-2xl border-white/5">
            <Compass className="w-10 h-10 mx-auto text-slate-600 mb-3" />
            <p className="text-slate-400 text-sm">No course modules found matching your query.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-violet-400 hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTopics.map((topic) => (
              <div
                key={topic.id}
                className="group glass-panel rounded-2xl p-6 border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)] relative overflow-hidden"
              >
                {/* Top Subtle Glow */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-600/20 transition-all" />

                <div>
                  {/* Card Header: Module Code & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs font-bold text-violet-400 tracking-wider">
                        {topic.moduleCode}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {topic.category}
                      </span>
                    </div>
                    {getStatusBadge(topic.status)}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-white group-hover:text-purple-200 transition-colors mb-3 leading-snug">
                    {topic.title}
                  </h3>

                  {/* Strategy Box */}
                  <div className="mb-4 p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <div className="flex items-center space-x-1.5 text-[11px] font-mono uppercase tracking-wider text-purple-400 mb-1">
                      <Bookmark className="w-3 h-3" />
                      <span>Class & Study Strategy</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {topic.strategy}
                    </p>
                  </div>

                  {/* Key Concepts Chips */}
                  <div className="mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Core Concepts & Formalisms
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {topic.keyConcepts.map((concept, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-purple-950/50 text-purple-300 border border-purple-900/40"
                        >
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learning Notes */}
                  {topic.learningNotes && (
                    <div className="mb-4 text-xs text-slate-400 border-t border-white/5 pt-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                        Lab & Personal Takeaways
                      </span>
                      <p className="italic text-slate-300 font-light line-clamp-3">
                        {topic.learningNotes}
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer Controls: Edit & Delete */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-2">
                  <span className="text-[11px] font-mono text-slate-500">
                    {topic.dateAdded || 'Semester Session'}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => openEditModal(topic)}
                      className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-purple-600/20 border border-white/5 hover:border-purple-500/30 transition-all"
                      title="Edit this module's topics and strategies"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-purple-400" />
                      <span>Edit Card</span>
                    </button>
                    <button
                      onClick={() => handleDeleteCard(topic.id)}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-950/30 transition-colors"
                      title="Remove module"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Edit/Add Modal */}
      <EditTopicModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        card={editingCard}
        onSave={handleSaveCard}
      />
    </section>
  );
};
