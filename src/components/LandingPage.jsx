import React from 'react';
import {
  Activity,
  ArrowRight,
  Check,
  ChevronRight,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UploadCloud,
} from 'lucide-react';

export default function LandingPage({ setActiveTab, onTriggerSampleUpload }) {
  const steps = [
    ['01', 'Connect your data', 'Bring your labs, habits, sleep, and movement together in one private space.'],
    ['02', 'See what matters', 'Understand the few signals that have the biggest impact on how you feel.'],
    ['03', 'Build better days', 'Turn small, realistic choices into a plan you can actually keep.'],
  ];

  return (
    <div className="overflow-hidden pb-20">
      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:px-8">
        <div className="absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full bg-emerald-100/70 blur-3xl" />
        <div className="absolute -left-40 top-48 -z-10 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Personalised preventive care, made simple
            </div>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.06] tracking-tight text-slate-900 sm:text-7xl">
              Feel better in your
              <span className="block text-emerald-600">everyday life.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              NutriLoop turns your health data into clear next steps, so you can understand your body and make progress with confidence.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setActiveTab('simulator')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                <Sparkles className="h-4 w-4" />
                Explore your health plan
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={onTriggerSampleUpload}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                <UploadCloud className="h-4 w-4 text-emerald-600" />
                Upload a lab report
              </button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-emerald-600" /> Private by design</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-emerald-600" /> Clinician-informed</span>
              <span className="flex items-center gap-1.5"><HeartPulse className="h-4 w-4 text-emerald-600" /> Non-diagnostic support</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-[2rem] border border-emerald-100 bg-white p-5 shadow-2xl shadow-emerald-900/10">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Your wellbeing</p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900">A clearer picture</h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700"><Activity className="h-5 w-5" /></div>
              </div>
              <div className="my-6 flex items-center gap-5">
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-[12px] border-emerald-100">
                  <div className="absolute inset-[-12px] rounded-full border-[12px] border-emerald-500 border-b-transparent border-l-transparent rotate-[-38deg]" />
                  <div className="text-center"><strong className="block text-3xl text-slate-900">82</strong><span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">health score</span></div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-slate-800">You’re building momentum</p>
                  <p className="text-xs leading-relaxed text-slate-500">3 focus areas are improving this month.</p>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700"><TrendingUp className="h-3 w-3" /> +18% this quarter</span>
                </div>
              </div>
              <div className="space-y-2">
                {['Energy & sleep', 'Metabolic balance', 'Nutrition foundations'].map((label, i) => (
                  <div key={label} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5 text-xs">
                    <span className="font-medium text-slate-600">{label}</span>
                    <span className="font-bold text-emerald-700">{['On track', 'Improving', 'On track'][i]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-5 -left-8 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-600"><Target className="h-4 w-4" /></div>
              <div><p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Today's focus</p><p className="text-xs font-bold text-slate-800">Walk after lunch</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-emerald-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[['12k+', 'health signals understood'], ['83%', 'average plan adherence'], ['1 simple', 'daily focus at a time']].map(([value, label]) => (
            <div key={label} className="border-b border-emerald-50 px-6 py-7 last:border-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <p className="text-2xl font-bold text-slate-900">{value}</p><p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">A better way forward</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Your health is a journey, not a report.</h2><p className="mt-4 text-sm leading-relaxed text-slate-600">We make the path from information to action feel human, focused, and achievable.</p></div>
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map(([number, title, description]) => (
            <button key={number} onClick={() => setActiveTab(number === '01' ? 'upload' : number === '02' ? 'dashboard' : 'mission')} className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100">
              <div className="mb-12 flex items-center justify-between"><span className="text-sm font-bold text-emerald-600">{number}</span><ChevronRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-600" /></div>
              <h3 className="text-lg font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">{description}</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
