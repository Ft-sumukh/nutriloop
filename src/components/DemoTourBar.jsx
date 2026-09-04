import React from 'react';
import { 
  Play, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  X,
  Clock,
  Zap,
  ArrowRight
} from 'lucide-react';

export default function DemoTourBar({ 
  activeTab, 
  setActiveTab, 
  onClose,
  onTriggerSampleUpload,
  onStartSimulation,
  onTriggerRetest,
  onOpenCopilot
}) {
  const steps = [
    { 
      time: '0:00', 
      title: 'Problem & Loop', 
      tab: 'landing', 
      talkingPoint: 'Numbers without decisions; missing closed loop' 
    },
    { 
      time: '0:30', 
      title: 'Upload Lab Report', 
      tab: 'upload', 
      talkingPoint: 'Instant OCR biomarker extraction for Arjun Mehta',
      action: onTriggerSampleUpload
    },
    { 
      time: '0:45', 
      title: 'Personal Health Profile', 
      tab: 'dashboard', 
      talkingPoint: 'Baseline 64/100, Vit D deficiency, Pre-diabetes alert' 
    },
    { 
      time: '1:00', 
      title: 'AI Health Copilot', 
      tab: 'dashboard', 
      talkingPoint: 'Grounding: "What should I focus on today?"',
      action: onOpenCopilot
    },
    { 
      time: '1:50', 
      title: 'Health Simulator', 
      tab: 'simulator', 
      talkingPoint: 'Signature: "What if I walk 8,000 steps and cut sugar?"',
      action: onStartSimulation
    },
    { 
      time: '2:15', 
      title: '30-Day Mission', 
      tab: 'mission', 
      talkingPoint: 'Turn scenario into concrete daily execution (83% adherence)' 
    },
    { 
      time: '2:30', 
      title: '12-Wk Retest & Loop', 
      tab: 'timeline', 
      talkingPoint: 'Retest data closes the loop: 64 ➔ 82 score, plan auto-adapts',
      action: onTriggerRetest
    },
    { 
      time: '3:00', 
      title: 'YC26 Pitch Deck', 
      tab: 'pitch', 
      talkingPoint: 'Subscription model, Medtech vision & competitive moat' 
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#070C1E] via-brand-navy to-[#070C1E] border-b border-brand-cyan/30 py-2 px-3 sm:px-6 shadow-xl text-xs relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        
        {/* Left Badge */}
        <div className="flex items-center space-x-2 text-slate-200 shrink-0">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40">
            <Zap className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">
                3-Minute Hackathon Demo Tour
              </span>
              <span className="text-[10px] bg-slate-800 text-slate-300 px-1 rounded">Interactive</span>
            </div>
            <p className="text-[10px] text-slate-400 hidden sm:block">Click any timestamp to navigate live</p>
          </div>
        </div>

        {/* Steps Scrollable Rail */}
        <div className="flex items-center space-x-1.5 overflow-x-auto max-w-full pb-1 md:pb-0 scrollbar-none">
          {steps.map((s, idx) => {
            const isCurrent = activeTab === s.tab;
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveTab(s.tab);
                  if (s.action) s.action();
                }}
                className={`group flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg border transition-all text-left whitespace-nowrap ${
                  isCurrent 
                    ? 'bg-brand-cyan/25 border-brand-cyan text-white shadow-md shadow-brand-cyan/20 ring-1 ring-brand-cyan/60' 
                    : 'bg-slate-900/70 border-slate-700/70 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-600'
                }`}
                title={s.talkingPoint}
              >
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                  isCurrent ? 'bg-brand-cyan text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  {s.time}
                </span>
                <span className="font-medium text-[11px]">{s.title}</span>
                <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
              </button>
            );
          })}
        </div>

        {/* Dismiss Button */}
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors shrink-0"
          title="Close demo bar"
        >
          <X className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
}
