import React from 'react';
import { 
  Activity, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Brain, 
  TrendingUp, 
  Target, 
  RefreshCw, 
  Sliders, 
  Layers,
  ChevronRight,
  UserCheck,
  AlertCircle
} from 'lucide-react';
import { COMPETITIVE_MATRIX } from '../data/mockData';

export default function LandingPage({ setActiveTab, onTriggerSampleUpload, onStartSimulation }) {
  const loopSteps = [
    { 
      num: '01', 
      title: 'Test', 
      desc: 'Blood tests, metabolic panels, wearable sleep & activity data uploaded seamlessly.',
      tab: 'upload',
      color: 'from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-400'
    },
    { 
      num: '02', 
      title: 'Understand', 
      desc: 'AI extracts biomarkers and creates an explainable Personal Health Profile with category scores.',
      tab: 'dashboard',
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400'
    },
    { 
      num: '03', 
      title: 'Simulate', 
      desc: 'Signature Feature: Ask "What if I walk 8,000 steps and cut sugar?" and see projected trajectories.',
      tab: 'simulator',
      color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-400'
    },
    { 
      num: '04', 
      title: 'Act', 
      desc: 'The selected scenario turns into a customized, actionable 30-Day Health Mission.',
      tab: 'mission',
      color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400'
    },
    { 
      num: '05', 
      title: 'Track', 
      desc: 'Daily execution logging, habit adherence percentage, and active behavioral streaks.',
      tab: 'mission',
      color: 'from-rose-500/20 to-pink-500/20 border-rose-500/30 text-rose-400'
    },
    { 
      num: '06', 
      title: 'Retest', 
      desc: 'Follow-up lab markers compared against baseline to validate genuine physiological transformation.',
      tab: 'timeline',
      color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400'
    },
    { 
      num: '07', 
      title: 'Optimize', 
      desc: 'AI adapts the next protocol based on measured progress, keeping health in continuous refinement.',
      tab: 'timeline',
      color: 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-300'
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 text-center overflow-hidden">
        {/* Glow background circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-brand-emerald/15 to-brand-cyan/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Track & Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-border/80 text-xs text-slate-300 mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-emerald animate-ping" />
            <span className="font-semibold text-white">Mochatrade YC26 Hackathon</span>
            <span className="text-slate-500">•</span>
            <span className="text-brand-cyan font-medium">Medtech Track</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Know your health. <br />
            <span className="bg-gradient-to-r from-brand-emerald via-brand-cyan to-brand-accent bg-clip-text text-transparent">
              Simulate your choices.
            </span> <br />
            Change your trajectory.
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            “Turn health data into decisions, decisions into habits, and habits into measurable health improvement.”
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setActiveTab('simulator')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-emerald to-brand-cyan text-slate-950 font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-brand-emerald/25 hover:shadow-brand-emerald/40 hover:scale-[1.02] transition-all"
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span>Launch Health Simulator</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => setActiveTab('dashboard')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand-surface hover:bg-brand-card text-white border border-brand-border font-semibold text-sm flex items-center justify-center space-x-2 transition-all hover:border-brand-emerald/50"
            >
              <Activity className="w-4 h-4 text-brand-emerald" />
              <span>Explore Arjun's Profile (64/100)</span>
            </button>

            <button
              onClick={onTriggerSampleUpload}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800 text-sm font-medium flex items-center justify-center space-x-2 transition-all"
            >
              <FileText className="w-4 h-4 text-brand-cyan" />
              <span>Extract Demo Lab Report</span>
            </button>
          </div>

          {/* Sub-credibility note */}
          <div className="mt-8 flex items-center justify-center space-x-4 text-xs text-slate-400">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-emerald" />
              <span>Clinician Review Layer</span>
            </span>
            <span>•</span>
            <span>Non-diagnostic Decision Support</span>
            <span>•</span>
            <span>Deterministic Physiological Modeling</span>
          </div>

        </div>
      </section>

      {/* The Core 7-Step Loop Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            The Continuous Preventive Health Loop
          </h2>
          <p className="text-sm text-slate-300">
            Most health platforms stop at static reports or generic supplements. NutriLoop builds an operating system where data transforms into sustained behavior and continuous optimization.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {loopSteps.map((step) => (
            <div
              key={step.num}
              onClick={() => setActiveTab(step.tab)}
              className="group p-4 rounded-xl bg-brand-surface/80 border border-brand-border/80 hover:border-brand-emerald/50 transition-all cursor-pointer flex flex-col justify-between hover:-translate-y-1 shadow-md hover:shadow-brand-emerald/10"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-white transition-colors">
                    {step.num}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-emerald transition-colors" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5 flex items-center space-x-1.5">
                  <span>{step.title}</span>
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  {step.desc}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] font-semibold text-brand-cyan group-hover:underline flex items-center space-x-1">
                <span>Open {step.title}</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-surface/60 border border-brand-border/80 rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-rose px-2.5 py-1 rounded bg-brand-rose/10 border border-brand-rose/20">
              The Real Problem
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-2">
              People receive numbers, not decisions.
            </h2>
            <p className="text-sm text-slate-300">
              Receiving a 5-page PDF with HbA1c 5.9%, Vitamin D 16 ng/mL, and LDL 138 mg/dL doesn't tell a person what to eat for lunch today or what habit changes will move the needle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center mb-3">
                <AlertCircle className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">1. Fragmented Data</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Lab results sit in PDF emails, wearable sleep metrics live in smartwatch silos, and food logs are abandoned. No single brain connects them into one coherent personal health picture.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <Sliders className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">2. Generic Advice</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                One-size-fits-all diet templates fail to adjust to an individual's changing glycemic response, work stress, and micronutrient deficiencies.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                <RefreshCw className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">3. Missing Closed Loop</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Traditional healthcare ends at the recommendation. NutriLoop tracks execution, re-tests biomarkers at 12 weeks, and automatically adapts the next quarter's plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Differentiation Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Why NutriLoop Wins in Preventive Medtech
          </h2>
          <p className="text-sm text-slate-300">
            India already has blood labs and generic vitamin sellers. NutriLoop is the missing <span className="text-brand-emerald font-semibold">decision and execution layer</span>.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-brand-border/80 bg-brand-surface/40 shadow-xl">
          <table className="min-w-full divide-y divide-brand-border/60 text-left text-xs">
            <thead className="bg-brand-card/70 text-slate-300">
              <tr>
                <th className="px-4 py-3.5 font-bold uppercase tracking-wider text-[11px]">Provider Type</th>
                <th className="px-4 py-3.5 font-bold uppercase tracking-wider text-[11px]">Typical Model</th>
                <th className="px-4 py-3.5 font-bold uppercase tracking-wider text-[11px]">Critical Limitation</th>
                <th className="px-4 py-3.5 font-bold uppercase tracking-wider text-[11px] text-brand-emerald">NutriLoop Moat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border/40 text-slate-300">
              {COMPETITIVE_MATRIX.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-4 py-3.5 font-semibold text-white">{row.competitor}</td>
                  <td className="px-4 py-3.5 text-slate-400">{row.model}</td>
                  <td className="px-4 py-3.5 text-rose-300/90">{row.limitation}</td>
                  <td className="px-4 py-3.5 text-brand-emerald font-medium bg-brand-emerald/5">{row.nutriloopAdvantage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-brand-emerald/10 via-brand-cyan/10 to-transparent border border-brand-emerald/30 flex items-center justify-between flex-col sm:flex-row gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-brand-emerald/20 text-brand-emerald flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="text-xs text-slate-200">
              <strong className="text-white">Core Hackathon Positioning:</strong> “We do not compete on testing or supplement margins; we compete on the continuous intelligence and feedback loop that turns biomarkers into sustained health improvement.”
            </p>
          </div>
          <button
            onClick={() => setActiveTab('simulator')}
            className="px-4 py-2 rounded-lg bg-brand-emerald text-slate-950 font-bold text-xs shrink-0 hover:bg-brand-emerald/90 transition-colors"
          >
            Try Health Simulator ➔
          </button>
        </div>
      </section>

    </div>
  );
}
