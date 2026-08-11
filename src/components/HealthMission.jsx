import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Flame, 
  Calendar, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Clock, 
  ArrowRight, 
  AlertCircle,
  ShieldCheck,
  Check,
  Award
} from 'lucide-react';
import { INITIAL_MISSION_TASKS, DEMO_USER } from '../data/mockData';

export default function HealthMission({ setActiveTab, onNavigateTimeline }) {
  const [tasks, setTasks] = useState(INITIAL_MISSION_TASKS);
  const [dayNumber, setDayNumber] = useState(18);
  const [totalDays, setTotalDays] = useState(30);

  // Toggle a daily task completion state
  const handleToggleTask = (taskId) => {
    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        return { ...t, completed: !t.completed };
      }
      return t;
    }));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const todayProgressPercent = Math.round((completedCount / tasks.length) * 100);

  // Overall 30-day adherence rate (e.g. 83% baseline from 18 days)
  const adherenceRate = 83;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-border/60 pb-6">
        <div>
          <div className="flex items-center space-x-2 text-brand-emerald text-xs font-semibold uppercase tracking-wider mb-1">
            <Target className="w-4 h-4" />
            <span>Step 4 & 5: Act & Daily Execution</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Active 30-Day Health Mission
          </h1>
          <p className="text-sm text-slate-300 mt-1">
            Converting simulated lifestyle targets into tangible daily routines with verified adherence metrics.
          </p>
        </div>

        {/* Retest Navigation Link */}
        <button
          onClick={() => setActiveTab('timeline')}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center space-x-1.5 transition-colors border border-slate-700 self-start sm:self-auto"
        >
          <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
          <span>View 12-Week Timeline ➔</span>
        </button>
      </div>

      {/* Mission Banner & Adherence KPI Bar */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-surface via-brand-navy to-brand-surface border border-brand-border/80 shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          {/* Mission Details */}
          <div>
            <div className="flex items-center space-x-2.5 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-brand-emerald/20 text-brand-emerald border border-brand-emerald/30">
                Active Protocol
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Initiated June 02, 2026
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Metabolic Reset & Vitality 30
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Targeted protocol designed to reverse pre-diabetic HbA1c (5.9%) and normalize serum Vitamin D through postprandial walking, high morning protein, and zero refined liquid sugar.
            </p>
          </div>

          {/* Adherence & Progress KPI Rings */}
          <div className="flex items-center space-x-6 bg-slate-900/80 p-4 rounded-xl border border-slate-800 shrink-0">
            
            {/* Days Progress */}
            <div className="text-center">
              <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">
                Mission Elapsed
              </span>
              <div className="flex items-baseline justify-center space-x-1 mt-1">
                <span className="text-2xl font-black text-white">{dayNumber}</span>
                <span className="text-xs text-slate-400">/{totalDays} days</span>
              </div>
              <span className="text-[10px] text-brand-cyan font-semibold">60% Complete</span>
            </div>

            <div className="h-10 w-px bg-slate-800" />

            {/* Adherence Score */}
            <div className="text-center">
              <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">
                Adherence Rate
              </span>
              <div className="flex items-baseline justify-center space-x-0.5 mt-1">
                <span className="text-2xl font-black text-brand-emerald">{adherenceRate}%</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-semibold">Above 80% Target</span>
            </div>

            <div className="h-10 w-px bg-slate-800" />

            {/* Streak Counter */}
            <div className="text-center">
              <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">
                Active Streak
              </span>
              <div className="flex items-center justify-center space-x-1 mt-1">
                <Flame className="w-5 h-5 text-amber-500 fill-amber-500 animate-pulse-subtle" />
                <span className="text-2xl font-black text-white">6</span>
              </div>
              <span className="text-[10px] text-amber-400 font-semibold">Days Unbroken</span>
            </div>

          </div>

        </div>

        {/* Day 18 Completion Bar */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-white">Today's Execution (Day {dayNumber}):</span>
            <span className="text-xs text-brand-emerald font-bold">{completedCount} of {tasks.length} Habits Completed ({todayProgressPercent}%)</span>
          </div>

          <div className="w-full sm:w-64 h-2 rounded-full bg-slate-800 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-brand-emerald to-brand-cyan transition-all duration-500 rounded-full"
              style={{ width: `${todayProgressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Checklist & Adherence Logic */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Interactive Daily Habits Checklist (8 cols) */}
        <div className="lg:col-span-8 bg-brand-surface/70 border border-brand-border/80 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-brand-border/60 pb-3">
            <div>
              <h3 className="text-base font-bold text-white">Day {dayNumber} Checklist</h3>
              <p className="text-xs text-slate-400">Click any habit to toggle completed status</p>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">Real-time Adherence Telemetry</span>
          </div>

          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => handleToggleTask(task.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start space-x-3.5 ${
                  task.completed 
                    ? 'bg-emerald-950/20 border-emerald-500/30 hover:border-emerald-500/50' 
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="pt-0.5 shrink-0">
                  {task.completed ? (
                    <div className="w-5 h-5 rounded-full bg-brand-emerald text-slate-950 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-slate-600 hover:border-slate-400" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className={`text-xs sm:text-sm font-semibold transition-colors ${
                      task.completed ? 'text-white line-through text-slate-400' : 'text-white'
                    }`}>
                      {task.title}
                    </h4>
                    <span className="text-[10px] text-slate-400 font-mono shrink-0">
                      {task.time}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 mt-1 flex items-center space-x-1.5">
                    <span className="text-brand-cyan font-medium">Mechanism:</span>
                    <span>{task.impact}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span>Automated sync with Apple Health / Google Fit</span>
            <span className="text-brand-emerald font-semibold">83% Adherence Logged</span>
          </div>
        </div>

        {/* Right: Adherence Correlation & Clinician Note (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Adherence vs Outcome Card */}
          <div className="p-5 rounded-2xl bg-brand-surface/70 border border-brand-border/80 shadow-xl space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-brand-cyan flex items-center space-x-1.5">
              <TrendingUp className="w-4 h-4" />
              <span>Adherence vs. Projected Outcome</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              In preventive metabolic interventions, outcomes scale non-linearly. Achieving <strong>&gt;80% consistency</strong> maintains insulin receptor upregulation and sustains GLUT-4 glucose clearance.
            </p>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Current Rate (83%):</span>
                <span className="font-bold text-emerald-400">On Track for HbA1c 5.5%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">If dropped to &lt;60%:</span>
                <span className="font-bold text-rose-400">HbA1c plateaus at 5.8%</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 pt-1 flex items-start space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
              <span>Correlated to observed biomarker shifts; causal links require clinical validation.</span>
            </div>
          </div>

          {/* Clinician Review Layer */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold text-white">
              <Award className="w-4 h-4 text-brand-purple" />
              <span>Clinician Oversight Active</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dr. Priya Raman (Consulting Diabetologist) reviewed Arjun's mission protocol on Day 1. Vitamin D3 dosage approved at 2,000 IU/day maintenance post 8-week replenishment.
            </p>
            <div className="text-[10px] text-slate-500 font-mono pt-1">
              Ref ID: CLIN-VERIF-2026-8921
            </div>
          </div>

          {/* Jump to Timeline Retest CTA */}
          <button
            onClick={() => setActiveTab('timeline')}
            className="w-full p-4 rounded-xl bg-gradient-to-r from-brand-emerald/15 to-brand-cyan/15 hover:from-brand-emerald/25 hover:to-brand-cyan/25 border border-brand-emerald/40 text-left transition-all group"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-white group-hover:text-brand-cyan transition-colors">
                Ready to Retest?
              </span>
              <ArrowRight className="w-4 h-4 text-brand-emerald group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-[11px] text-slate-300">
              Simulate Week 12 diagnostic blood panel and see the plan adapt automatically ➔
            </p>
          </button>

        </div>

      </div>

    </div>
  );
}
