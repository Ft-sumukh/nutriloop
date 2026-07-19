import React from 'react';
import { 
  X, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  TrendingUp, 
  Activity, 
  FileText,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

export default function ExplainabilityModal({ item, onClose, onLaunchSimulator }) {
  if (!item) return null;

  const isPillar = !!item.title; // Pill vs Biomarker

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-brand-surface border border-brand-border rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-brand-emerald/15 text-brand-emerald flex items-center justify-center border border-brand-emerald/30">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-bold text-white">
                {isPillar ? item.title : item.name}
              </h3>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
                Explainable AI
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {isPillar ? `Category Score: ${item.baselineScore}/100` : `Measured Value: ${item.value} ${item.unit} (Ref: ${item.referenceRange})`}
            </p>
          </div>
        </div>

        {/* Explainability Breakdown */}
        <div className="space-y-4 text-xs text-slate-300">
          
          {/* Why did it receive this score? */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan mb-2 flex items-center space-x-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Why did this receive this score?</span>
            </h4>
            <p className="leading-relaxed text-slate-300">
              {isPillar 
                ? `This pillar is calculated deterministically from fasting laboratory biomarkers weighted by daily lifestyle telemetry (steps, sleep architecture, and meal timing). The current score reflects active metabolic strain and micronutrient gaps.`
                : item.clinicalSignificance}
            </p>
          </div>

          {/* Biological Mechanism */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-brand-amber mb-2 flex items-center space-x-1.5">
              <Activity className="w-3.5 h-3.5" />
              <span>Biological Rationale & Mechanism</span>
            </h4>
            <p className="leading-relaxed text-slate-300">
              {isPillar 
                ? `Key drivers include: ${item.keyIssues ? item.keyIssues.join(', ') : 'Biomarker flags requiring preventive behavioral adjustment.'}`
                : item.whyItMatters}
            </p>
          </div>

          {/* Contributing Lifestyle Factors */}
          {!isPillar && item.lifestyleDriver && (
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider text-brand-rose mb-2 flex items-center space-x-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Primary Lifestyle Contributors</span>
              </h4>
              <p className="leading-relaxed text-slate-300">
                {item.lifestyleDriver}
              </p>
            </div>
          )}

          {/* Evidence-Based Recommendation */}
          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300">
            <h4 className="font-bold text-emerald-400 text-xs uppercase tracking-wider mb-2 flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Recommended Action Plan</span>
            </h4>
            <p className="leading-relaxed text-emerald-200">
              {isPillar
                ? 'Engage in postprandial physical activity, optimize morning protein intake to 25g+, and correct serum Vitamin D with targeted clinical supplementation.'
                : item.actionPlan}
            </p>
          </div>

        </div>

        {/* Clinician Review Badge */}
        <div className="mt-5 p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-brand-emerald" />
            <span>Preventive Clinical Governance • Board Verified Protocols</span>
          </div>
          <span className="text-slate-500 font-mono">ICMR / ADA Aligned</span>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              if (onLaunchSimulator) onLaunchSimulator();
            }}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-brand-emerald to-brand-cyan text-slate-950 text-xs font-bold flex items-center space-x-1.5 shadow-md shadow-brand-emerald/20 hover:scale-[1.02] transition-all"
          >
            <span>Simulate Behavior Change</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
