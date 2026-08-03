import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Sliders, 
  TrendingUp, 
  Play, 
  Info, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  RotateCcw, 
  Zap, 
  HeartPulse, 
  Footprints, 
  Moon, 
  Activity, 
  Dumbbell, 
  Coffee,
  HelpCircle
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from 'recharts';
import { SIMULATION_PRESETS } from '../data/mockData';
import { simulateTrajectory } from '../utils/simulatorEngine';

export default function HealthSimulator({ setActiveTab, onCommitMission }) {
  // Simulator input state
  const [naturalQuery, setNaturalQuery] = useState('What if I walk 8,000 steps every day and reduce sugary drinks for 8 weeks?');
  const [steps, setSteps] = useState(8000);
  const [sugarCutPercent, setSugarCutPercent] = useState(90);
  const [sleepHours, setSleepHours] = useState(7.2);
  const [proteinGrams, setProteinGrams] = useState(75);
  const [strengthDays, setStrengthDays] = useState(2);
  const [durationWeeks, setDurationWeeks] = useState(8);
  const [adherenceRate, setAdherenceRate] = useState(85);

  // Active chart metric view: 'score', 'hba1c', 'glucose', 'energy'
  const [activeMetricView, setActiveMetricView] = useState('score');

  // Compute dynamic trajectory using deterministic engine
  const simulationResult = useMemo(() => {
    return simulateTrajectory({
      steps,
      sugarCutPercent,
      sleepHours,
      proteinGrams,
      strengthDays,
      durationWeeks,
      adherenceRate
    });
  }, [steps, sugarCutPercent, sleepHours, proteinGrams, strengthDays, durationWeeks, adherenceRate]);

  // Handle clicking a curated preset
  const handleApplyPreset = (preset) => {
    setNaturalQuery(preset.title);
    setSteps(preset.steps);
    setSugarCutPercent(preset.sugarCutPercent);
    setSleepHours(preset.sleepHours);
    setProteinGrams(preset.proteinGrams);
    setStrengthDays(preset.strengthDays);
    setDurationWeeks(preset.durationWeeks);
  };

  const handleReset = () => {
    setNaturalQuery('What if I walk 8,000 steps every day and reduce sugary drinks for 8 weeks?');
    setSteps(8000);
    setSugarCutPercent(90);
    setSleepHours(7.2);
    setProteinGrams(75);
    setStrengthDays(2);
    setDurationWeeks(8);
    setAdherenceRate(85);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-border/60 pb-6">
        <div>
          <div className="flex items-center space-x-2 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 fill-current" />
            <span>The Signature NutriLoop Innovation</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Preventive Health Scenario Simulator
          </h1>
          <p className="text-sm text-slate-300 mt-1">
            Simulate how specific daily behavior shifts alter your 90-day metabolic and cardiovascular trajectories before committing.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleReset}
            className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center space-x-1.5 transition-colors border border-slate-700"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default</span>
          </button>
        </div>
      </div>

      {/* Natural Language Prompt & Presets Bar */}
      <div className="p-6 rounded-2xl bg-brand-surface/80 border border-brand-border/80 shadow-xl space-y-4">
        
        {/* Search / NLP Input */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            Scenario Query (Natural Language or Slider Controls)
          </label>
          <div className="relative">
            <input
              type="text"
              value={naturalQuery}
              onChange={(e) => setNaturalQuery(e.target.value)}
              className="w-full bg-slate-900 border border-brand-border focus:border-brand-emerald rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-emerald shadow-inner"
              placeholder="e.g. What if I walk 8,000 steps every day and reduce sugary drinks for 8 weeks?"
            />
            <button
              onClick={() => handleApplyPreset(SIMULATION_PRESETS[0])}
              className="absolute right-2 top-2 px-3 py-1.5 rounded-lg bg-brand-emerald text-slate-950 font-bold text-xs hover:bg-brand-emerald/90 transition-colors"
            >
              Simulate
            </button>
          </div>
        </div>

        {/* Curated Preset Chips */}
        <div>
          <span className="text-[11px] font-semibold text-slate-400 block mb-2">
            1-Click Curated Clinical Protocols:
          </span>
          <div className="flex flex-wrap gap-2">
            {SIMULATION_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handleApplyPreset(preset)}
                className="px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-left border border-slate-800 hover:border-brand-cyan/40 transition-all group"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {preset.title}
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded font-bold bg-brand-emerald/15 text-brand-emerald border border-brand-emerald/30">
                    {preset.badge}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5">{preset.subtitle}</p>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Main Simulator Workspace: Interactive Controls + Trajectory Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Fine-Tuning Parameter Sliders (5 cols) */}
        <div className="lg:col-span-5 bg-brand-surface/70 border border-brand-border/80 rounded-2xl p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-brand-border/60 pb-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <Sliders className="w-4 h-4 text-brand-emerald" />
              <span>Intervention Variables</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">Baseline ➔ Target</span>
          </div>

          {/* Slider 1: Daily Steps */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-200 flex items-center space-x-1.5">
                <Footprints className="w-3.5 h-3.5 text-emerald-400" />
                <span>Daily Accumulated Steps</span>
              </span>
              <span className="font-mono font-bold text-brand-emerald">{steps.toLocaleString()} steps/day</span>
            </div>
            <input
              type="range"
              min="2000"
              max="15000"
              step="500"
              value={steps}
              onChange={(e) => setSteps(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>Arjun's Baseline: 3,400</span>
              <span>Target: 8,000+</span>
            </div>
          </div>

          {/* Slider 2: Sugar Reduction */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-200 flex items-center space-x-1.5">
                <Coffee className="w-3.5 h-3.5 text-amber-400" />
                <span>Refined / Liquid Sugar Cut</span>
              </span>
              <span className="font-mono font-bold text-amber-400">{sugarCutPercent}% reduction</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="10"
              value={sugarCutPercent}
              onChange={(e) => setSugarCutPercent(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>0% (No change)</span>
              <span>100% (Zero liquid sugar)</span>
            </div>
          </div>

          {/* Slider 3: Sleep Duration */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-200 flex items-center space-x-1.5">
                <Moon className="w-3.5 h-3.5 text-purple-400" />
                <span>Nightly Sleep Sanctuary</span>
              </span>
              <span className="font-mono font-bold text-purple-400">{sleepHours} hours/night</span>
            </div>
            <input
              type="range"
              min="5.0"
              max="9.0"
              step="0.2"
              value={sleepHours}
              onChange={(e) => setSleepHours(Number(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>Baseline: 6.1 hrs</span>
              <span>Target: 7.5 - 8.0 hrs</span>
            </div>
          </div>

          {/* Slider 4: Protein Intake */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-200 flex items-center space-x-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>Daily Protein Intake</span>
              </span>
              <span className="font-mono font-bold text-brand-cyan">{proteinGrams}g / day</span>
            </div>
            <input
              type="range"
              min="40"
              max="120"
              step="5"
              value={proteinGrams}
              onChange={(e) => setProteinGrams(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>Baseline: ~42g</span>
              <span>Target: 75g - 90g</span>
            </div>
          </div>

          {/* Slider 5: Resistance Training */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-200 flex items-center space-x-1.5">
                <Dumbbell className="w-3.5 h-3.5 text-rose-400" />
                <span>Resistance Training</span>
              </span>
              <span className="font-mono font-bold text-rose-400">{strengthDays} days/week</span>
            </div>
            <input
              type="range"
              min="0"
              max="5"
              step="1"
              value={strengthDays}
              onChange={(e) => setStrengthDays(Number(e.target.value))}
              className="w-full accent-rose-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>Baseline: 0 days</span>
              <span>Recommended: 2-3 days</span>
            </div>
          </div>

          {/* Adherence Rate Sensitivity */}
          <div className="pt-3 border-t border-slate-800 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-300">Projected Adherence Sensitivity</span>
              <span className="font-mono font-bold text-white">{adherenceRate}% adherence</span>
            </div>
            <input
              type="range"
              min="50"
              max="100"
              step="5"
              value={adherenceRate}
              onChange={(e) => setAdherenceRate(Number(e.target.value))}
              className="w-full accent-slate-400 cursor-pointer"
            />
            <p className="text-[10px] text-slate-400">
              Accounts for behavioral lapses; 80%+ adherence needed to reach expected trajectory.
            </p>
          </div>

        </div>

        {/* Right: Dynamic Chart & Clinical Insights (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Chart Container */}
          <div className="bg-brand-surface/70 border border-brand-border/80 rounded-2xl p-6 shadow-xl space-y-4">
            
            {/* Chart Metric Selector Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-border/60 pb-3">
              <div>
                <h3 className="text-sm font-bold text-white">Estimated Physiological Trajectory</h3>
                <p className="text-xs text-slate-400">Week 0 Baseline ➔ Week {durationWeeks} Projection</p>
              </div>

              <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setActiveMetricView('score')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeMetricView === 'score' ? 'bg-brand-emerald text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Health Score
                </button>
                <button
                  onClick={() => setActiveMetricView('hba1c')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeMetricView === 'hba1c' ? 'bg-brand-rose text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  HbA1c (%)
                </button>
                <button
                  onClick={() => setActiveMetricView('glucose')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeMetricView === 'glucose' ? 'bg-brand-amber text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Glucose
                </button>
                <button
                  onClick={() => setActiveMetricView('energy')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeMetricView === 'energy' ? 'bg-brand-cyan text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Energy Index
                </button>
              </div>
            </div>

            {/* Recharts Trajectory Graph */}
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={simulationResult.trajectory} margin={{ top: 10, right: 20, bottom: 5, left: -10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                  <XAxis dataKey="week" stroke="#64748B" tick={{ fontSize: 11 }} />
                  
                  {activeMetricView === 'score' && (
                    <>
                      <YAxis domain={[55, 90]} stroke="#64748B" tick={{ fontSize: 11 }} />
                      <Tooltip contentStyle={{ backgroundColor: '#0B132B', borderColor: '#243463', borderRadius: '8px', fontSize: '12px' }} />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                      <Line type="monotone" dataKey="baselineScore" name="Baseline (No Change)" stroke="#64748B" strokeDasharray="4 4" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="healthScore" name="Simulated Health Score" stroke="#10B981" strokeWidth={3} dot={{ r: 4, fill: '#10B981' }} />
                    </>
                  )}

                  {activeMetricView === 'hba1c' && (
                    <>
                      <YAxis domain={[5.2, 6.2]} stroke="#64748B" tick={{ fontSize: 11 }} />
                      <Tooltip contentStyle={{ backgroundColor: '#0B132B', borderColor: '#243463', borderRadius: '8px', fontSize: '12px' }} />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                      <Line type="monotone" dataKey="hba1c" name="Estimated HbA1c (%)" stroke="#F43F5E" strokeWidth={3} dot={{ r: 4, fill: '#F43F5E' }} />
                    </>
                  )}

                  {activeMetricView === 'glucose' && (
                    <>
                      <YAxis domain={[80, 115]} stroke="#64748B" tick={{ fontSize: 11 }} />
                      <Tooltip contentStyle={{ backgroundColor: '#0B132B', borderColor: '#243463', borderRadius: '8px', fontSize: '12px' }} />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                      <Line type="monotone" dataKey="fastingGlucose" name="Fasting Glucose (mg/dL)" stroke="#F59E0B" strokeWidth={3} dot={{ r: 4, fill: '#F59E0B' }} />
                    </>
                  )}

                  {activeMetricView === 'energy' && (
                    <>
                      <YAxis domain={[35, 100]} stroke="#64748B" tick={{ fontSize: 11 }} />
                      <Tooltip contentStyle={{ backgroundColor: '#0B132B', borderColor: '#243463', borderRadius: '8px', fontSize: '12px' }} />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                      <Line type="monotone" dataKey="energy" name="Vitality & Energy Index" stroke="#06B6D4" strokeWidth={3} dot={{ r: 4, fill: '#06B6D4' }} />
                    </>
                  )}
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Projected Deltas Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-800">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 font-medium">Health Score</span>
                <div className="text-base font-extrabold text-white mt-0.5">
                  {simulationResult.projectedHealthScore}/100
                </div>
                <span className="text-[10px] font-bold text-emerald-400">
                  +{simulationResult.totalScoreDelta} pts
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 font-medium">HbA1c Target</span>
                <div className="text-base font-extrabold text-white mt-0.5">
                  {simulationResult.projectedHbA1c}%
                </div>
                <span className="text-[10px] font-bold text-rose-400">
                  {simulationResult.totalHbA1cDelta}%
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 font-medium">Fasting Sugar</span>
                <div className="text-base font-extrabold text-white mt-0.5">
                  {simulationResult.projectedGlucose} mg/dL
                </div>
                <span className="text-[10px] font-bold text-amber-400">
                  {simulationResult.totalGlucoseDelta} mg/dL
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 font-medium">Triglycerides</span>
                <div className="text-base font-extrabold text-white mt-0.5">
                  {simulationResult.projectedTriglycerides} mg/dL
                </div>
                <span className="text-[10px] font-bold text-cyan-400">
                  {simulationResult.totalTriglycerideDelta} mg/dL
                </span>
              </div>
            </div>

          </div>

          {/* AI Biological Mechanism Explanation */}
          <div className="bg-brand-surface/70 border border-brand-border/80 rounded-2xl p-5 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-brand-emerald text-xs font-bold uppercase tracking-wider">
                <HeartPulse className="w-4 h-4" />
                <span>AI Physiological Mechanism Analysis</span>
              </div>
              <span className="text-[10px] text-slate-400">Deterministic Model</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/70 p-3 rounded-xl border border-slate-800">
              {simulationResult.explanation}
            </p>

            {/* Assumptions & Medical Boundary Notice */}
            <div className="flex items-start space-x-2 text-[11px] text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
              <span>{simulationResult.safetyNotice}</span>
            </div>
          </div>

          {/* Commit & Launch Mission CTA */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-emerald/15 via-brand-cyan/15 to-brand-emerald/15 border border-brand-emerald/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-white">Ready to change your trajectory?</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Convert this exact simulated scenario into your actionable 30-Day Health Mission.
              </p>
            </div>

            <button
              onClick={() => {
                if (onCommitMission) onCommitMission();
                setActiveTab('mission');
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-brand-emerald to-brand-cyan text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-lg shadow-brand-emerald/30 hover:scale-[1.02] transition-all shrink-0"
            >
              <span>START 30-DAY MISSION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
