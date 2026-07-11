import React, { useState } from 'react';
import { 
  Activity, 
  Apple, 
  Moon, 
  Flame, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  HelpCircle, 
  Info, 
  ShieldCheck, 
  TrendingUp,
  Filter,
  User
} from 'lucide-react';
import { 
  DEMO_USER, 
  BASELINE_BIOMARKERS, 
  RETEST_BIOMARKERS, 
  PILLARS_CONFIG 
} from '../data/mockData';
import ExplainabilityModal from './ExplainabilityModal';

export default function HealthProfileDashboard({ 
  setActiveTab, 
  isRetestMode, 
  onStartSimulation,
  onOpenCopilot 
}) {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');
  const [modalItem, setModalItem] = useState(null);

  const activeBiomarkers = isRetestMode ? RETEST_BIOMARKERS : BASELINE_BIOMARKERS;
  const overallScore = isRetestMode ? 82 : 64;

  const filteredBiomarkers = selectedCategoryFilter === 'all'
    ? activeBiomarkers
    : activeBiomarkers.filter(b => b.category === selectedCategoryFilter);

  const getPillarIcon = (id) => {
    switch (id) {
      case 'nutrition': return <Apple className="w-5 h-5 text-amber-400" />;
      case 'metabolic': return <Activity className="w-5 h-5 text-rose-400" />;
      case 'recovery': return <Moon className="w-5 h-5 text-purple-400" />;
      case 'lifestyle': return <Flame className="w-5 h-5 text-emerald-400" />;
      default: return <Activity className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'optimal':
      case 'normal':
        return <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">Optimal</span>;
      case 'borderline':
        return <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">Borderline</span>;
      case 'elevated':
        return <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-500/15 text-rose-400 border border-rose-500/30">Elevated</span>;
      case 'deficient':
        return <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-500/15 text-rose-400 border border-rose-500/30">Deficient</span>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
      {/* Explainability Deep Dive Modal */}
      {modalItem && (
        <ExplainabilityModal
          item={modalItem}
          onClose={() => setModalItem(null)}
          onLaunchSimulator={() => {
            setModalItem(null);
            setActiveTab('simulator');
          }}
        />
      )}

      {/* Top Banner & Profile Overview */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-6 rounded-2xl bg-brand-surface/80 border border-brand-border/80 shadow-xl">
        
        {/* User Identity Info */}
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-emerald/20 to-brand-cyan/20 border border-brand-emerald/40 flex items-center justify-center text-brand-emerald text-xl font-bold">
            AM
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{DEMO_USER.name}</h1>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                {DEMO_USER.age}y • {DEMO_USER.gender}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {DEMO_USER.occupation} • {DEMO_USER.location} • BMI {DEMO_USER.bmi}
            </p>
            <p className="text-xs text-brand-cyan font-medium mt-1">
              🎯 Primary Goal: {DEMO_USER.primaryGoal}
            </p>
          </div>
        </div>

        {/* Overall Health Score Gauge Card */}
        <div className="flex items-center space-x-5 bg-brand-navy/80 p-4 rounded-xl border border-brand-border/60 self-start lg:self-center">
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 border-2 border-brand-border">
            <svg className="w-16 h-16 transform -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="#1E293B"
                strokeWidth="5"
                fill="none"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke={isRetestMode ? "#10B981" : "#F59E0B"}
                strokeWidth="5"
                fill="none"
                strokeDasharray="175"
                strokeDashoffset={175 - (175 * overallScore) / 100}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-lg font-black text-white">{overallScore}</span>
              <span className="text-[9px] text-slate-400 -mt-1">/100</span>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold text-white">Overall Health Score</span>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                isRetestMode 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                  : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
              }`}>
                {isRetestMode ? 'Optimal (+18 Pts)' : 'Moderate Strain'}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-xs">
              {isRetestMode
                ? 'Follow-up retest confirms full metabolic recovery and normal glycemia.'
                : 'Weighted across fasting biomarkers, metabolic strain, and sedentary hours.'}
            </p>
          </div>
        </div>

        {/* Quick Simulator CTA */}
        <div className="flex flex-col sm:flex-row gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('simulator')}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-emerald to-brand-cyan text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-brand-emerald/20 hover:scale-[1.02] transition-all"
          >
            <Sparkles className="w-4 h-4 fill-current" />
            <span>Simulate What-If Scenarios</span>
          </button>
          <button
            onClick={onOpenCopilot}
            className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors border border-slate-700"
          >
            <span>Ask Copilot</span>
          </button>
        </div>

      </div>

      {/* 4 Pillars Category Grid with Explainability Trigger */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-white">4 Core Health Pillars</h2>
            <p className="text-xs text-slate-400">Click any pillar card to view explainable biological reasoning</p>
          </div>
          <span className="text-xs text-brand-cyan font-semibold flex items-center space-x-1">
            <Info className="w-3.5 h-3.5" />
            <span>Clickable for Explainability</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS_CONFIG.map((pillar) => {
            const currentScore = isRetestMode ? pillar.retestScore : pillar.baselineScore;
            const currentBadge = isRetestMode ? pillar.retestBadge : pillar.baselineBadge;
            const delta = pillar.retestScore - pillar.baselineScore;

            return (
              <div
                key={pillar.id}
                onClick={() => setModalItem(pillar)}
                className="group p-5 rounded-2xl bg-brand-surface/70 border border-brand-border/80 hover:border-brand-emerald/50 transition-all cursor-pointer shadow-lg hover:shadow-brand-emerald/10 hover:-translate-y-1 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 group-hover:scale-105 transition-transform">
                      {getPillarIcon(pillar.id)}
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${
                      isRetestMode 
                        ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' 
                        : 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}>
                      {currentBadge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors">
                    {pillar.title}
                  </h3>

                  <div className="flex items-baseline space-x-2 my-2">
                    <span className="text-3xl font-black text-white">{currentScore}</span>
                    <span className="text-xs text-slate-400">/100</span>
                    {isRetestMode && (
                      <span className="text-xs font-bold text-emerald-400 ml-2">
                        +{delta} pts
                      </span>
                    )}
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden mb-3">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${
                        currentScore >= 75 ? 'bg-emerald-400' : currentScore >= 60 ? 'bg-amber-400' : 'bg-rose-400'
                      }`}
                      style={{ width: `${currentScore}%` }}
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-white">
                  <span>View Breakdown</span>
                  <HelpCircle className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-emerald transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Priority Action Areas (Only if not already normalized) */}
      {!isRetestMode && (
        <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-surface via-slate-900 to-brand-surface border border-rose-500/30 shadow-xl">
          <div className="flex items-center space-x-2.5 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
            <AlertTriangle className="w-4 h-4" />
            <span>High-Priority Metabolic & Nutritional Flags</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-1">
            Identified Action Targets from Arjun's Bloodwork
          </h3>
          <p className="text-xs text-slate-300 mb-4 max-w-2xl">
            NutriLoop's AI engine filtered through 8 biomarkers and isolated the top four behavioral leverage points to prevent overt Type 2 diabetes onset.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">Metabolic Flag</span>
              <h4 className="text-xs font-bold text-white mt-1">Pre-diabetic HbA1c (5.9%)</h4>
              <p className="text-[11px] text-slate-400 mt-1">High postprandial glucose swings during sedentary desk work.</p>
              <div className="mt-2 text-[10px] text-brand-emerald font-semibold">Action: 15-min post-lunch walk</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">Nutrition Deficit</span>
              <h4 className="text-xs font-bold text-white mt-1">Vitamin D (16.2 ng/mL)</h4>
              <p className="text-[11px] text-slate-400 mt-1">Clinically deficient; impairs insulin sensitivity & cellular immunity.</p>
              <div className="mt-2 text-[10px] text-brand-emerald font-semibold">Action: 2000 IU/day + Morning sun</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Lipid Strain</span>
              <h4 className="text-xs font-bold text-white mt-1">Triglycerides (182 mg/dL)</h4>
              <p className="text-[11px] text-slate-400 mt-1">Direct marker of excess circulating sugars & sweet beverage intake.</p>
              <div className="mt-2 text-[10px] text-brand-emerald font-semibold">Action: Zero liquid sugar policy</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">Lifestyle Inertia</span>
              <h4 className="text-xs font-bold text-white mt-1">3,400 Daily Steps</h4>
              <p className="text-[11px] text-slate-400 mt-1">Elevates hepatic liver fat and blunts peripheral glucose uptake.</p>
              <div className="mt-2 text-[10px] text-brand-emerald font-semibold">Action: Target 8,000 steps/day</div>
            </div>
          </div>
        </div>
      )}

      {/* Biomarkers Explorer Table */}
      <div className="bg-brand-surface/70 border border-brand-border/80 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-brand-border/60 pb-4">
          <div>
            <h3 className="text-base font-bold text-white">Detailed Biomarker Panel</h3>
            <p className="text-xs text-slate-400">Click any row to view scientific literature and biological mechanism</p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {['all', 'metabolic', 'nutrition', 'recovery', 'lifestyle'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all whitespace-nowrap ${
                  selectedCategoryFilter === cat
                    ? 'bg-brand-emerald/20 text-brand-emerald border border-brand-emerald/40'
                    : 'bg-slate-900/70 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-800 text-left text-xs">
            <thead className="text-slate-400 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-3">Biomarker</th>
                <th className="py-3 px-3">Category</th>
                <th className="py-3 px-3">Measured Value</th>
                <th className="py-3 px-3">Reference Range</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3 text-right">Explainability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {filteredBiomarkers.map((bio) => (
                <tr 
                  key={bio.id}
                  onClick={() => setModalItem(bio)}
                  className="hover:bg-slate-800/40 cursor-pointer transition-colors group"
                >
                  <td className="py-3.5 px-3 font-semibold text-white group-hover:text-brand-cyan transition-colors">
                    {bio.name}
                  </td>
                  <td className="py-3.5 px-3 capitalize text-slate-400">
                    {bio.category}
                  </td>
                  <td className="py-3.5 px-3 font-mono font-bold text-white text-sm">
                    {bio.value} <span className="text-xs font-normal text-slate-400">{bio.unit}</span>
                  </td>
                  <td className="py-3.5 px-3 font-mono text-slate-400">
                    {bio.referenceRange}
                  </td>
                  <td className="py-3.5 px-3">
                    {getStatusBadge(bio.status)}
                  </td>
                  <td className="py-3.5 px-3 text-right">
                    <button className="text-[11px] font-semibold text-brand-cyan hover:underline flex items-center space-x-1 ml-auto">
                      <span>Inspect</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
