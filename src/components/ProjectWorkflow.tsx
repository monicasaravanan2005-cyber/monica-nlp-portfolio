import React, { useState, useEffect } from 'react';
import { projectWorkflowStages, WorkflowStage } from '../data/portfolioData';
import { 
  GitBranch, Play, Pause, RotateCcw, CheckCircle2, ArrowRight, 
  HelpCircle, Search, ShieldCheck, RefreshCw, Sparkles, Check, ChevronRight
} from 'lucide-react';

export const ProjectWorkflow: React.FC = () => {
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const stages = projectWorkflowStages;
  const currentStage: WorkflowStage = stages[selectedStageIndex];

  // Automated step-by-step simulator
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isSimulating) {
      timer = setTimeout(() => {
        setSelectedStageIndex((prev) => {
          if (prev >= stages.length - 1) {
            setIsSimulating(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2600);
    }
    return () => clearTimeout(timer);
  }, [isSimulating, selectedStageIndex, stages.length]);

  const toggleSimulation = () => {
    if (selectedStageIndex >= stages.length - 1) {
      setSelectedStageIndex(0);
    }
    setIsSimulating(!isSimulating);
  };

  const getStageIcon = (step: number) => {
    switch (step) {
      case 1:
        return HelpCircle;
      case 2:
        return Search;
      case 3:
        return ShieldCheck;
      case 4:
        return RefreshCw;
      case 5:
      default:
        return Sparkles;
    }
  };

  return (
    <section id="workflow" className="relative py-28 border-t border-purple-500/10">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[300px] bg-electric-violet/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/40 text-xs font-mono text-cyan-300 mb-3">
              <GitBranch className="w-3.5 h-3.5" />
              <span>END-TO-END PIPELINE ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Agentic Corrective RAG Workflow
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Interactive 5-stage pipeline: from ambiguous natural language query to citation-grounded judicial synthesis.
            </p>
          </div>

          {/* Simulator Controls */}
          <div className="mt-6 md:mt-0 flex items-center space-x-3">
            <button
              onClick={toggleSimulation}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white transition-all shadow-lg ${
                isSimulating
                  ? 'bg-amber-600 shadow-amber-600/30'
                  : 'bg-gradient-to-r from-cyan-600 to-blue-600 shadow-cyan-600/30 hover:scale-[1.02]'
              }`}
            >
              {isSimulating ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pause Simulation</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Simulate Pipeline Flow</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                setIsSimulating(false);
                setSelectedStageIndex(0);
              }}
              className="p-2.5 rounded-xl glass-panel-interactive border-white/10 text-slate-400 hover:text-white"
              title="Reset to Stage 1"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5-Step Visual Pipeline Stepper */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {stages.map((stage, idx) => {
              const Icon = getStageIcon(stage.stepNumber);
              const isSelected = selectedStageIndex === idx;
              const isPast = selectedStageIndex > idx;

              return (
                <button
                  key={stage.id}
                  onClick={() => {
                    setIsSimulating(false);
                    setSelectedStageIndex(idx);
                  }}
                  className={`text-left p-4 rounded-2xl transition-all duration-300 relative border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-obsidian-800/90 border-cyan-400/80 shadow-[0_0_25px_rgba(6,182,212,0.3)] ring-1 ring-cyan-400/50'
                      : isPast
                      ? 'bg-obsidian-900/60 border-purple-500/30 text-slate-300 hover:border-purple-500/60'
                      : 'bg-obsidian-950/60 border-white/5 text-slate-500 hover:border-white/20'
                  }`}
                >
                  {/* Top Step Number & Status Indicator */}
                  <div className="flex items-center justify-between mb-3 w-full">
                    <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded-md ${
                      isSelected
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : isPast
                        ? 'bg-purple-950/70 text-purple-300 border border-purple-800/40'
                        : 'bg-white/5 text-slate-500'
                    }`}>
                      STAGE 0{stage.stepNumber}
                    </span>
                    {isPast ? (
                      <Check className="w-4 h-4 text-purple-400" />
                    ) : isSelected ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    ) : null}
                  </div>

                  {/* Stage Icon & Name */}
                  <div className="flex items-center space-x-2.5">
                    <div className={`p-2 rounded-xl ${
                      isSelected
                        ? 'bg-cyan-950 text-cyan-400 border border-cyan-800'
                        : isPast
                        ? 'bg-purple-950 text-purple-400'
                        : 'bg-obsidian-900 text-slate-600'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`text-xs sm:text-sm font-semibold tracking-tight leading-snug ${
                        isSelected ? 'text-white' : isPast ? 'text-slate-200' : 'text-slate-400'
                      }`}>
                        {stage.shortTag}
                      </h4>
                    </div>
                  </div>

                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-indigo-500 rounded-b-2xl" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Progress Connector Flow Bar */}
          <div className="hidden lg:flex items-center justify-between px-6 mt-4 text-slate-600">
            {stages.map((_, i) => (
              <React.Fragment key={i}>
                <div className={`h-1 flex-1 mx-2 rounded-full transition-all duration-500 ${
                  i < selectedStageIndex
                    ? 'bg-purple-500'
                    : i === selectedStageIndex
                    ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]'
                    : 'bg-white/5'
                }`} />
                {i < stages.length - 1 && (
                  <ArrowRight className={`w-3.5 h-3.5 transition-colors ${
                    i < selectedStageIndex ? 'text-purple-400' : 'text-slate-700'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Selected Stage Detail Inspector */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border-cyan-500/20 bg-gradient-to-br from-obsidian-900/90 via-obsidian-950/80 to-purple-950/20 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Stage Summary & Inputs */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5">
                  <span>STAGE 0{currentStage.stepNumber} DETAILED INSPECTOR</span>
                  <span>•</span>
                  <span>ROLE: {currentStage.agentRole}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  {currentStage.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mt-2 font-light leading-relaxed">
                  {currentStage.summary}
                </p>
              </div>

              {/* Input Description Card */}
              <div className="p-4 rounded-xl bg-obsidian-950/80 border border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Input Stream / Context State
                </span>
                <p className="text-xs sm:text-sm text-cyan-200/90 font-mono">
                  {currentStage.inputDescription}
                </p>
              </div>

              {/* Core Execution Actions */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold block mb-3">
                  Core Agentic Actions Executed
                </span>
                <ul className="space-y-2.5">
                  {currentStage.actionDetails.map((action, i) => (
                    <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-200 font-light">
                      <div className="w-5 h-5 rounded-full bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400 text-xs shrink-0 mt-0.5 font-mono">
                        {i + 1}
                      </div>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Critique Criteria (If Stage 3 Evidence Evaluation) */}
              {currentStage.critiqueCriteria && (
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30">
                  <span className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold block mb-2">
                    Evaluator Verification Criteria
                  </span>
                  <div className="space-y-1.5 text-xs text-purple-200/90 font-mono">
                    {currentStage.critiqueCriteria.map((c, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Output State & Live Context Box */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              
              <div className="p-5 rounded-2xl bg-obsidian-950/90 border border-cyan-500/30 relative overflow-hidden shadow-inner">
                <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Pipeline Stage Output
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                    {currentStage.statusBadge}
                  </span>
                </div>

                <div className="text-xs text-slate-300 font-mono leading-relaxed space-y-2">
                  <div className="text-violet-400">
                    &gt; Agent State: <span className="text-emerald-400">PROCEEDING_VALIDATED</span>
                  </div>
                  <div className="text-slate-400">
                    &gt; Attributed Passages: <span className="text-white">Active</span>
                  </div>
                  <div className="text-slate-400">
                    &gt; Confidence Threshold: <span className="text-cyan-300">0.89 / 1.00</span>
                  </div>
                  <div className="text-slate-400">
                    &gt; Hallucination Risk: <span className="text-emerald-400">Suppressed (Constrained)</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400 font-mono italic">
                  State transition verified for Indian Supreme Court case corpus.
                </div>
              </div>

              {/* Quick Navigation to Next Stage */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={selectedStageIndex === 0}
                  onClick={() => setSelectedStageIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3.5 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed glass-panel-interactive border-white/5"
                >
                  ← Previous Stage
                </button>

                <button
                  disabled={selectedStageIndex === stages.length - 1}
                  onClick={() => setSelectedStageIndex((prev) => Math.min(stages.length - 1, prev + 1))}
                  className="flex items-center space-x-1 px-4 py-2 rounded-xl text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
