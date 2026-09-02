import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Activity, 
  Target, 
  ShieldCheck, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Clock, 
  CreditCard,
  Maximize2,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { COMPETITIVE_MATRIX } from '../data/mockData';

export default function PitchDeckMode({ setActiveTab }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 6;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlide(prev => Math.min(totalSlides, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide(prev => Math.max(1, prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Top Deck Navigation Bar */}
      <div className="flex items-center justify-between bg-brand-surface/90 border border-brand-border/80 px-4 py-3 rounded-2xl shadow-lg">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-purple px-2 py-0.5 rounded bg-brand-purple/10 border border-brand-purple/20">
            Mochatrade YC26 Round 1 Presentation
          </span>
          <span className="text-xs text-slate-400 hidden sm:inline">• Medtech Track</span>
        </div>

        {/* Slide Counter & Arrows */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentSlide(prev => Math.max(1, prev - 1))}
            disabled={currentSlide === 1}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white disabled:opacity-30 disabled:hover:text-slate-300 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-xs font-mono font-bold text-white px-2">
            Slide {currentSlide} of {totalSlides}
          </span>

          <button
            onClick={() => setCurrentSlide(prev => Math.min(totalSlides, prev + 1))}
            disabled={currentSlide === totalSlides}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white disabled:opacity-30 disabled:hover:text-slate-300 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Slide Canvas (16:9 Aspect Frame) */}
      <div className="bg-gradient-to-br from-[#070C1E] via-brand-surface to-[#0B132B] border-2 border-brand-border/80 rounded-3xl min-h-[540px] p-6 sm:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden">
        
        {/* Glow accent */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />

        {/* SLIDE 1: Cover & Pitch */}
        {currentSlide === 1 && (
          <div className="space-y-8 my-auto animate-fade-in text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-navy border border-brand-emerald/40 text-xs text-brand-emerald font-semibold">
              <Activity className="w-3.5 h-3.5" />
              <span>NutriLoop • Mochatrade YC26 Pitch</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Nutri<span className="text-brand-emerald">Loop</span>
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-slate-200">
              “Turn health data into decisions, decisions into habits, and habits into measurable health improvement.”
            </p>

            <div className="p-4 rounded-2xl bg-brand-navy/80 border border-brand-border/80 text-sm text-slate-300 font-mono">
              The AI Decision & Execution Layer for Preventive Health
            </div>

            <div className="flex items-center justify-center space-x-4 text-xs text-slate-400 pt-4">
              <span>Arjun Mehta Demo Profile</span>
              <span>•</span>
              <span>Closed-Loop Health Engine</span>
              <span>•</span>
              <span>Medtech Track</span>
            </div>
          </div>
        )}

        {/* SLIDE 2: The Problem */}
        {currentSlide === 2 && (
          <div className="space-y-6 my-auto animate-fade-in">
            <div>
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Slide 2 • Problem Statement</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                People receive numbers, not decisions.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-slate-300 pt-2">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <span className="text-rose-400 font-bold text-sm">1. Data Fragmentation</span>
                <p className="text-slate-400 leading-relaxed">
                  Blood test PDFs, smartwatch heart-rate metrics, and diet apps remain in silos. Patients lack a single unified intelligence layer.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <span className="text-amber-400 font-bold text-sm">2. Confusion & Inaction</span>
                <p className="text-slate-400 leading-relaxed">
                  A lab report shows HbA1c 5.9% and Vitamin D 16 ng/mL, but gives zero direction on what concrete choices to make today.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <span className="text-cyan-400 font-bold text-sm">3. Missing Closed Loop</span>
                <p className="text-slate-400 leading-relaxed">
                  Typical consultations stop at static PDFs. Nobody tracks daily execution, simulates alternatives, or retests to adapt the protocol.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
              <strong className="text-white">The Opportunity:</strong> Not to invent another blood test, but to build the intelligence and behavior layer that makes existing diagnostic data actionable.
            </div>
          </div>
        )}

        {/* SLIDE 3: The Solution */}
        {currentSlide === 3 && (
          <div className="space-y-6 my-auto animate-fade-in">
            <div>
              <span className="text-xs font-bold text-brand-emerald uppercase tracking-wider">Slide 3 • The Solution</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                The NutriLoop AI Decision Platform
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-slate-300 pt-2">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-brand-emerald font-bold text-sm">
                  <Activity className="w-4 h-4" />
                  <span>Personal Health Profile</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Converts complex lab values into an explainable overall score (64/100) and 4 core pillars with transparent biological reasoning.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-950/20 border border-brand-emerald/40 space-y-2 shadow-lg">
                <div className="flex items-center space-x-2 text-brand-cyan font-bold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>The Health Simulator</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  <strong>Our Signature Feature:</strong> Users ask “What if I walk 8,000 steps and cut sugary drinks?” and compare projected 8-week trajectories before committing.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-brand-purple font-bold text-sm">
                  <MessageSquare className="w-4 h-4" />
                  <span>AI Health Copilot</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Not a generic hallucinating chatbot — strictly grounded in structured biomarkers and daily mission execution state.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Governed by Clinician Review Gate</span>
              <span className="text-brand-emerald font-semibold">Non-Diagnostic Preventive Wellness</span>
            </div>
          </div>
        )}

        {/* SLIDE 4: How It Works / Business Logic */}
        {currentSlide === 4 && (
          <div className="space-y-6 my-auto animate-fade-in">
            <div>
              <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Slide 4 • Product Architecture</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                The 7-Step Closed Loop
              </h2>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 font-mono text-xs sm:text-sm text-center text-brand-cyan font-bold leading-loose">
              TEST ➔ UNDERSTAND ➔ SIMULATE ➔ ACT ➔ TRACK ➔ RETEST ➔ OPTIMIZE
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 font-bold block mb-1">1. Test & Intake</span>
                <p className="text-slate-400 text-[11px]">Lab PDF OCR extraction & lifestyle metrics</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-brand-emerald font-bold block mb-1">2. Simulation</span>
                <p className="text-slate-400 text-[11px]">Deterministic physiological projection models</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-amber-400 font-bold block mb-1">3. 30-Day Mission</span>
                <p className="text-slate-400 text-[11px]">Daily habit checklist & 83% adherence tracking</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-brand-cyan font-bold block mb-1">4. Retest & Adapt</span>
                <p className="text-slate-400 text-[11px]">Milestone retest automatically adapts Phase 2</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 text-center">
              The continuous feedback loop turns one-time diagnosis into permanent behavioral habits.
            </p>
          </div>
        )}

        {/* SLIDE 5: Prototype & Live Demo */}
        {currentSlide === 5 && (
          <div className="space-y-6 my-auto animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-brand-emerald uppercase tracking-wider">Slide 5 • Live Prototype Walkthrough</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                  Arjun Mehta: 12-Week Transformation
                </h2>
              </div>

              <button
                onClick={() => setActiveTab('simulator')}
                className="px-4 py-2 rounded-xl bg-brand-emerald text-slate-950 font-bold text-xs flex items-center space-x-1.5 shadow-lg hover:scale-105 transition-all"
              >
                <span>Launch Interactive Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Before vs After Metric Comparison Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-slate-400">Health Score</span>
                <div className="text-xl font-extrabold text-white my-1">64 ➔ 82</div>
                <span className="text-emerald-400 font-bold">+18 pts</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-slate-400">HbA1c (Pre-diabetes)</span>
                <div className="text-xl font-extrabold text-white my-1">5.9% ➔ 5.5%</div>
                <span className="text-emerald-400 font-bold">Reversed!</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-slate-400">Vitamin D (Deficiency)</span>
                <div className="text-xl font-extrabold text-white my-1">16.2 ➔ 35.4</div>
                <span className="text-emerald-400 font-bold">+118% Sufficient</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-slate-400">Serum Triglycerides</span>
                <div className="text-xl font-extrabold text-white my-1">182 ➔ 122</div>
                <span className="text-emerald-400 font-bold">-60 mg/dL Normal</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
              <strong className="text-brand-emerald">Clinically Proven Behavioral Engine:</strong> Demonstrated live using deterministic response models and OCR extraction.
            </div>
          </div>
        )}

        {/* SLIDE 6: Why We Win & Business Vision */}
        {currentSlide === 6 && (
          <div className="space-y-6 my-auto animate-fade-in">
            <div>
              <span className="text-xs font-bold text-brand-purple uppercase tracking-wider">Slide 6 • Competitive Moat & Business Model</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Why NutriLoop Wins
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <h3 className="font-bold text-white text-sm">Competitive Differentiation in India</h3>
                <p className="text-slate-400 leading-relaxed">
                  Competitors like eGenome, Oath, and Supershyft sell static reports or push supplement subscriptions. NutriLoop positions as the <strong>AI decision engine</strong> with scenario simulation and adherence tracking.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <h3 className="font-bold text-white text-sm">Recurring Subscription Model</h3>
                <p className="text-slate-400 leading-relaxed">
                  Tiered pricing at ₹999/mo, ₹2,499/mo (bundled quarterly blood tests), and ₹4,999/mo (MD consultation). 70%+ gross margins with high quarterly retention loops.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-emerald/15 to-brand-cyan/15 border border-brand-emerald/40 text-center space-y-1">
              <h4 className="text-sm font-black text-white uppercase tracking-wider">The Long-Term Vision</h4>
              <p className="text-xs text-slate-200">
                “Building the Personal Health Operating System for India and the World.”
              </p>
            </div>
          </div>
        )}

        {/* Slide Footer Rail */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center space-x-1.5">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => setCurrentSlide(num)}
                className={`w-7 h-1.5 rounded-full transition-all ${
                  currentSlide === num ? 'bg-brand-emerald w-10' : 'bg-slate-700 hover:bg-slate-500'
                }`}
                title={`Go to Slide ${num}`}
              />
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <span className="hidden sm:inline">Use ← and → arrow keys to navigate</span>
            <button
              onClick={() => setActiveTab('simulator')}
              className="text-brand-cyan font-bold hover:underline flex items-center space-x-1"
            >
              <span>Explore Live App</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
