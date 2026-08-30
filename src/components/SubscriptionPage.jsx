import React from 'react';
import { 
  CreditCard, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  TrendingUp, 
  Building2, 
  Zap,
  Users
} from 'lucide-react';
import { SUBSCRIPTION_TIERS } from '../data/mockData';

export default function SubscriptionPage({ setActiveTab }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs text-brand-emerald mb-3">
          <CreditCard className="w-3.5 h-3.5" />
          <span className="font-semibold">Continuous Health Intelligence Model</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Invest in Your Health Trajectory, <br className="hidden sm:inline" />
          Not Just Another Bottle of Supplements.
        </h1>
        <p className="text-sm text-slate-300 mt-3 leading-relaxed">
          NutriLoop charges for the continuous intelligence, simulation, and closed-loop optimization layer. Our business model is aligned with your measurable health improvement.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SUBSCRIPTION_TIERS.map((tier) => (
          <div
            key={tier.id}
            className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
              tier.popular
                ? 'bg-gradient-to-b from-brand-surface to-brand-navy border-2 border-brand-emerald shadow-2xl shadow-brand-emerald/15 -translate-y-1'
                : 'bg-brand-surface/70 border border-brand-border/80 hover:border-slate-700'
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-emerald text-slate-950 font-extrabold text-[10px] uppercase tracking-wider shadow-md">
                {tier.badge}
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                {!tier.popular && (
                  <span className="text-[10px] uppercase font-bold text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                    {tier.badge}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-400 mb-6 min-h-[32px]">
                {tier.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline mb-6">
                <span className="text-3xl sm:text-4xl font-black text-white">{tier.priceINR}</span>
                <span className="text-xs text-slate-400 ml-1.5">{tier.period}</span>
                <span className="text-xs text-slate-500 ml-2 font-mono">({tier.priceUSD})</span>
              </div>

              {/* Features List */}
              <div className="space-y-3 pt-6 border-t border-slate-800 text-xs">
                {tier.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-slate-300">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.popular ? 'text-brand-emerald' : 'text-slate-400'}`} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-4">
              <button
                onClick={() => setActiveTab('simulator')}
                className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-md ${
                  tier.popular
                    ? 'bg-gradient-to-r from-brand-emerald to-brand-cyan text-slate-950 hover:scale-[1.02] shadow-brand-emerald/20'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Business Model Insight Box */}
      <div className="p-6 sm:p-8 rounded-2xl bg-brand-surface/60 border border-brand-border/80 shadow-xl space-y-6">
        <div className="flex items-center space-x-2 text-brand-cyan text-xs font-bold uppercase tracking-wider">
          <TrendingUp className="w-4 h-4" />
          <span>YC26 Hackathon Business Logic & Economics</span>
        </div>

        <h3 className="text-xl font-bold text-white">
          Why Continuous Intelligence Beats One-Off Diagnostic Tests
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <h4 className="font-bold text-white text-sm">1. High Retention Loop</h4>
            <p className="text-slate-400 leading-relaxed">
              Diagnostic labs suffer from 1-time episodic churn. NutriLoop's 30-Day Mission & 12-Week Retest loop drives daily active engagement and quarterly re-billing.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <h4 className="font-bold text-white text-sm">2. Diagnostic Margin Expansion</h4>
            <p className="text-slate-400 leading-relaxed">
              Wholesale blood testing in India costs ₹400-₹600 per panel (via NABL labs). At ₹2,499/mo (₹7,500/quarter), gross margins exceed 70% even with bundled quarterly tests.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <h4 className="font-bold text-white text-sm">3. B2B Corporate Wellness</h4>
            <p className="text-slate-400 leading-relaxed">
              High-stress tech firms spend ₹8,000–₹15,000/employee/yr on wellness. NutriLoop provides verifiable metabolic risk reduction (reversing pre-diabetes, reducing sick days).
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-brand-emerald/10 border border-brand-emerald/30 flex items-center justify-between flex-col sm:flex-row gap-3 text-xs">
          <div className="flex items-center space-x-2 text-slate-200">
            <ShieldCheck className="w-5 h-5 text-brand-emerald shrink-0" />
            <span>
              <strong>Key Business Takeaway:</strong> We do not sell vitamins. We sell the verified outcome of continuous personalization and behavioral execution.
            </span>
          </div>
          <button
            onClick={() => setActiveTab('pitch')}
            className="px-4 py-2 rounded-lg bg-brand-emerald text-slate-950 font-bold shrink-0 hover:bg-brand-emerald/90 transition-colors"
          >
            Review Pitch Deck ➔
          </button>
        </div>
      </div>

    </div>
  );
}
