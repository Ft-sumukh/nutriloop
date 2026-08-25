import React from 'react';
import { 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  RotateCcw, 
  Activity, 
  Layers,
  Award,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TIMELINE_STAGES, RETEST_BIOMARKERS } from '../data/mockData';

export default function HealthTimeline({ 
  isRetestMode, 
  setIsRetestMode, 
  setActiveTab 
}) {
  
  const handleTriggerRetest = () => {
    setIsRetestMode(true);
    // Fire celebratory confetti for milestone achievement
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10B981', '#06B6D4', '#8B5CF6', '#F59E0B']
    });
  };

  const handleResetToBaseline = () => {
    setIsRetestMode(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-border/60 pb-6">
        <div>
          <div className="flex items-center space-x-2 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-1">
            <Clock className="w-4 h-4" />
            <span>Step 6 & 7: Retest & Continuous Loop Optimization</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Longitudinal Health Timeline & Closed-Loop Engine
          </h1>
          <p className="text-sm text-slate-300 mt-1">
            NutriLoop is not a one-off blood test. It is a continuous loop that measures, predicts, executes, verifies with retesting, and automatically adapts.
          </p>
        </div>

        {/* Retest Simulation Trigger Button */}
        <div className="flex items-center space-x-2">
          {isRetestMode ? (
            <button
              onClick={handleResetToBaseline}
              className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center space-x-1.5 transition-colors border border-slate-700"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Revert to Baseline (W0)</span>
            </button>
          ) : (
            <button
              onClick={handleTriggerRetest}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-emerald to-brand-cyan text-slate-950 font-bold text-xs flex items-center space-x-2 shadow-lg shadow-brand-emerald/20 hover:scale-[1.02] transition-all"
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span>Simulate Week 12 Retest & Loop Optimization</span>
            </button>
          )}
        </div>
      </div>

      {/* 4-Stage Timeline Visualizer */}
      <div className="p-6 rounded-2xl bg-brand-surface/80 border border-brand-border/80 shadow-xl space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white">The 12-Week Closed Loop Journey</h2>
          <span className="text-xs text-brand-emerald font-semibold font-mono">Test ➔ Plan ➔ Adjust ➔ Retest ➔ Optimize</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {TIMELINE_STAGES.map((stage, idx) => {
            const isCurrentOrPassed = isRetestMode || idx <= 2;
            const isMilestone = idx === 3;

            return (
              <div 
                key={stage.week}
                className={`p-5 rounded-xl border transition-all flex flex-col justify-between relative ${
                  isMilestone && isRetestMode
                    ? 'bg-emerald-950/30 border-brand-emerald ring-1 ring-brand-emerald/50'
                    : isCurrentOrPassed
                    ? 'bg-slate-900/80 border-slate-700'
                    : 'bg-slate-900/40 border-slate-800 opacity-60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-brand-cyan">
                      {stage.dateLabel}
                    </span>
                    {isCurrentOrPassed && (
                      <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1.5">
                    {stage.title}
                  </h3>

                  <div className="flex items-baseline space-x-2 my-2">
                    <span className="text-xl font-black text-white">{stage.healthScore}</span>
                    <span className="text-[10px] text-slate-400">/100 Health</span>
                    <span className="text-xs font-semibold text-brand-rose ml-2">
                      HbA1c {stage.hba1c}%
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {stage.highlights}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] text-brand-emerald font-medium">
                  {stage.action}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Before vs After Transformation Comparison Cards */}
      <div className="bg-brand-surface/70 border border-brand-border/80 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-border/60 pb-4">
          <div>
            <span className="text-xs font-bold text-brand-emerald uppercase tracking-wider">
              {isRetestMode ? 'Measured 12-Week Transformation' : 'Simulated 12-Week Retest Comparison'}
            </span>
            <h3 className="text-xl font-bold text-white mt-0.5">
              Before & After Health Trajectory
            </h3>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <span className="flex items-center space-x-1.5 text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              <span>Week 0 Baseline</span>
            </span>
            <span className="flex items-center space-x-1.5 text-emerald-400 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-emerald" />
              <span>Week 12 Follow-up</span>
            </span>
          </div>
        </div>

        {/* 4 Pillars Transformation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Health Score */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs font-semibold text-slate-400">Overall Health Score</span>
            <div className="flex items-baseline space-x-2 my-2">
              <span className="text-slate-400 font-bold text-lg">64</span>
              <span className="text-slate-600 text-sm">➔</span>
              <span className="text-2xl font-black text-brand-emerald">82</span>
              <span className="text-xs font-bold text-emerald-400 ml-1">+18 pts</span>
            </div>
            <p className="text-[11px] text-slate-400">Comprehensive multi-system resilience achieved.</p>
          </div>

          {/* Nutrition */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs font-semibold text-slate-400">Nutrition Pillar</span>
            <div className="flex items-baseline space-x-2 my-2">
              <span className="text-slate-400 font-bold text-lg">58</span>
              <span className="text-slate-600 text-sm">➔</span>
              <span className="text-2xl font-black text-brand-emerald">79</span>
              <span className="text-xs font-bold text-emerald-400 ml-1">+21 pts</span>
            </div>
            <p className="text-[11px] text-slate-400">Vitamin D restored; 85g daily protein sustained.</p>
          </div>

          {/* Metabolic */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs font-semibold text-slate-400">Metabolic Health</span>
            <div className="flex items-baseline space-x-2 my-2">
              <span className="text-slate-400 font-bold text-lg">62</span>
              <span className="text-slate-600 text-sm">➔</span>
              <span className="text-2xl font-black text-brand-emerald">83</span>
              <span className="text-xs font-bold text-emerald-400 ml-1">+21 pts</span>
            </div>
            <p className="text-[11px] text-slate-400">HbA1c reversed to 5.5% (Pre-diabetes cleared).</p>
          </div>

          {/* Lifestyle */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs font-semibold text-slate-400">Lifestyle & Activity</span>
            <div className="flex items-baseline space-x-2 my-2">
              <span className="text-slate-400 font-bold text-lg">55</span>
              <span className="text-slate-600 text-sm">➔</span>
              <span className="text-2xl font-black text-brand-emerald">83</span>
              <span className="text-xs font-bold text-emerald-400 ml-1">+28 pts</span>
            </div>
            <p className="text-[11px] text-slate-400">Steps increased from 3.4k to 8,650 daily average.</p>
          </div>

        </div>

        {/* Retest Biomarker Shifts Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-800 text-left text-xs">
            <thead className="text-slate-400 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-2.5 px-3">Biomarker</th>
                <th className="py-2.5 px-3">Week 0 (Baseline)</th>
                <th className="py-2.5 px-3 text-brand-emerald">Week 12 (Retest)</th>
                <th className="py-2.5 px-3">Physiological Change</th>
                <th className="py-2.5 px-3">Outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {RETEST_BIOMARKERS.map((bio) => (
                <tr key={bio.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-3 px-3 font-semibold text-white">{bio.name}</td>
                  <td className="py-3 px-3 text-slate-400 font-mono">
                    {bio.id === 'hba1c' ? '5.9%' : bio.id === 'fpg' ? '106 mg/dL' : bio.id === 'vit_d' ? '16.2 ng/mL' : bio.id === 'triglycerides' ? '182 mg/dL' : bio.id === 'ldl' ? '138 mg/dL' : bio.id === 'alt' ? '44 U/L' : '2.3 mg/L'}
                  </td>
                  <td className="py-3 px-3 text-brand-emerald font-mono font-bold">
                    {bio.value} {bio.unit}
                  </td>
                  <td className="py-3 px-3 font-semibold text-brand-cyan">
                    {bio.changeDelta > 0 ? `+${bio.changeDelta}` : bio.changeDelta} {bio.unit}
                  </td>
                  <td className="py-3 px-3 text-slate-300">{bio.changeNote}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Plan Automatically Adapts Section */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-emerald/15 via-slate-900 to-brand-cyan/15 border border-brand-emerald/40 shadow-xl space-y-4">
        <div className="flex items-center space-x-2 text-brand-emerald text-xs font-bold uppercase tracking-wider">
          <Zap className="w-4 h-4" />
          <span>Closed Loop Complete: Intelligent Plan Adaptation</span>
        </div>

        <h3 className="text-xl font-bold text-white">
          Phase 2 Protocol: Athletic Longevity & Insulin Maintenance
        </h3>

        <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
          Because Arjun's 12-week retest confirms full reversal of pre-diabetes (HbA1c 5.5%) and normalization of Vitamin D (35.4 ng/mL), NutriLoop's AI does <strong>not</strong> keep him on the acute deficiency protocol. The system automatically shifts goals:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <h4 className="text-xs font-bold text-white mb-1">1. Vitamin D Maintenance</h4>
            <p className="text-xs text-slate-400">Tapers from therapeutic 60k IU weekly replenishment to 1,000 IU/day maintenance dose.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <h4 className="text-xs font-bold text-white mb-1">2. Hypertrophy & Muscle Mass</h4>
            <p className="text-xs text-slate-400">Introduces progressive resistance overload (3x/week) to expand skeletal glycogen storage capacity.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <h4 className="text-xs font-bold text-white mb-1">3. Flexible Carbohydrate Timing</h4>
            <p className="text-xs text-slate-400">Re-introduces wholesome complex grains around resistance workouts without risk of glycemic spikes.</p>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-emerald" />
            <span>Physician Reviewed Phase 2 Optimization</span>
          </span>
          <button
            onClick={() => setActiveTab('dashboard')}
            className="text-brand-emerald font-bold hover:underline flex items-center space-x-1"
          >
            <span>View Updated Health Profile ➔</span>
          </button>
        </div>
      </div>

    </div>
  );
}
