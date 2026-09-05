import React from 'react';
import { 
  Activity, 
  Compass, 
  UploadCloud, 
  LayoutDashboard, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  Presentation, 
  MessageSquare,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  showDemoTour, 
  setShowDemoTour, 
  onOpenCopilot,
  isRetestMode
}) {
  const navItems = [
    { id: 'landing', label: 'Story & Loop', icon: Compass },
    { id: 'upload', label: 'Lab Upload', icon: UploadCloud },
    { id: 'dashboard', label: 'Health Profile', icon: LayoutDashboard },
    { id: 'simulator', label: 'Health Simulator', icon: Sparkles, highlight: true },
    { id: 'mission', label: '30-Day Mission', icon: CheckCircle2 },
    { id: 'timeline', label: '12-Wk Timeline', icon: Clock },
    { id: 'subscription', label: 'Pricing', icon: CreditCard },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand / Logo */}
          <div 
            onClick={() => setActiveTab('landing')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-emerald to-brand-cyan flex items-center justify-center shadow-lg shadow-brand-emerald/20 group-hover:scale-105 transition-transform">
              <Activity className="w-6 h-6 text-[#070C1E] stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900">Nutri<span className="text-brand-emerald">Loop</span></span>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-50 text-brand-emerald border border-emerald-100">
                  YC26
                </span>
              </div>
              <p className="text-[10px] text-slate-500 -mt-0.5 hidden sm:block">Your everyday health companion</p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
                    isActive 
                      ? 'bg-brand-emerald/15 text-brand-emerald font-semibold shadow-sm border border-brand-emerald/30' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-emerald-50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-brand-emerald' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.highlight && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-2 sm:space-x-2.5">
            
            {/* Mochatrade Pitch Deck Switcher */}
            <button
              onClick={() => setActiveTab('pitch')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all border ${
                activeTab === 'pitch'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              <Presentation className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">YC26 Pitch Deck</span>
              <span className="sm:hidden">Pitch</span>
            </button>

            {/* 3-Min Demo Tour Toggle */}
            <button
              onClick={() => setShowDemoTour(!showDemoTour)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1 border transition-all ${
                showDemoTour
                  ? 'bg-cyan-50 text-cyan-700 border-cyan-200'
                  : 'bg-white text-slate-500 border-slate-200 hover:text-slate-800'
              }`}
              title="Toggle Guided 3-Minute Demo Tour Bar"
            >
              <Zap className="w-3.5 h-3.5 text-brand-cyan" />
              <span className="hidden xl:inline">3-Min Demo</span>
            </button>

            {/* AI Copilot Trigger */}
            <button
              onClick={onOpenCopilot}
              className="px-3 py-1.5 rounded-lg bg-brand-emerald text-white font-semibold text-xs flex items-center space-x-1.5 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-100 transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Ask Copilot</span>
            </button>

          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="flex lg:hidden overflow-x-auto py-2 border-t border-emerald-50 space-x-1 scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-2.5 py-1 rounded-md text-[11px] whitespace-nowrap flex items-center space-x-1 ${
                  isActive ? 'bg-emerald-50 text-brand-emerald font-semibold border border-emerald-100' : 'text-slate-500'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Retest Mode Notification Pill */}
        {isRetestMode && (
          <div className="bg-emerald-500/15 border-t border-emerald-500/30 px-3 py-1 text-center text-xs text-emerald-300 flex items-center justify-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span><strong>Active State:</strong> Week 12 Retest Applied (Health Score: 64 ➔ 82/100, HbA1c: 5.9% ➔ 5.5%)</span>
          </div>
        )}

      </div>
    </header>
  );
}
