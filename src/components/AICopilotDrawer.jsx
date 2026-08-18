import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  ShieldCheck, 
  Activity, 
  HelpCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { DEMO_USER } from '../data/mockData';

export default function AICopilotDrawer({ 
  isOpen, 
  onClose, 
  isRetestMode,
  setActiveTab 
}) {
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: isRetestMode
        ? `Hello Arjun! Your Week 12 retest confirms outstanding metabolic progress: your HbA1c is down to 5.5% (Non-diabetic) and Vitamin D is optimal at 35.4 ng/mL. How can I assist your Phase 2 athletic conditioning today?`
        : `Hello Arjun! I have analyzed your recent blood panel. Your Overall Health Score is 64/100, driven by borderline pre-diabetes (HbA1c 5.9%) and Vitamin D deficiency (16.2 ng/mL). What would you like to focus on today?`
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');

  const quickQuestions = isRetestMode ? [
    'What is my new Phase 2 workout plan?',
    'Should I still take 60k IU Vitamin D?',
    'Can I increase carb intake around workouts?',
    'When is my next quarterly retest?'
  ] : [
    'What should I focus on today?',
    'What should I eat tonight given my recovery score?',
    'Why is my nutrition score only 58?',
    'How will 8,000 steps impact my HbA1c?'
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInputQuery('');

    // Generate intelligent grounded reply
    setTimeout(() => {
      let botReply = '';
      const q = query.toLowerCase();

      if (q.includes('focus on today')) {
        botReply = isRetestMode
          ? `**Today's Phase 2 Focus**: 1) Complete 45 mins progressive resistance training (hypertrophy focus), 2) Maintain 90g daily protein with dinner, and 3) Take your 1,000 IU Vitamin D maintenance dose.`
          : `**Top 3 Priorities for Today (Arjun)**:
1. **Post-Lunch 15-Min Walk**: Blunts your postprandial glucose spike (crucial for your 5.9% HbA1c).
2. **Zero Liquid Sugars**: Skip sweetened chai or soda to stop liver triglyceride accumulation (currently 182 mg/dL).
3. **Vitamin D3 + Fat**: Take 2,000 IU with a meal containing healthy fats for optimal absorption.`;
      } else if (q.includes('eat tonight') || q.includes('dinner')) {
        botReply = `Based on your recovery score of ${isRetestMode ? '75' : '61'}/100 and elevated evening cortisol:
• **Recommended Dinner**: Grilled paneer/tofu or poached eggs with a large bowl of stir-fried spinach and bell peppers.
• **Carb Timing**: Keep refined starches low; finish dinner before 8:30 PM to maintain a 12-hour overnight fasting window for fasting glucose control.`;
      } else if (q.includes('nutrition score') || q.includes('58')) {
        botReply = `Your baseline Nutrition score is **58/100** due to two primary laboratory biomarkers:
1. **Severe Vitamin D Deficiency (16.2 ng/mL)**: Standard clinical sufficiency is >30 ng/mL.
2. **Sub-optimal Protein Density**: Estimated at <45g/day, which accelerates glycemic swings.
3. **High Liquid Fructose**: Drives serum triglycerides up to 182 mg/dL.`;
      } else if (q.includes('8,000 steps') || q.includes('hba1c')) {
        botReply = `Walking 8,000 steps daily activates the **GLUT-4 non-insulin dependent pathway** in skeletal muscle. Muscles absorb glucose directly from the bloodstream without requiring extra pancreatic insulin, lowering your estimated HbA1c from **5.9% to ~5.5%** over 8 to 12 weeks.`;
      } else if (q.includes('phase 2') || q.includes('retest')) {
        botReply = `Your Week 12 retest showed a massive turnaround:
• HbA1c: 5.9% ➔ 5.5% (Pre-diabetes reversed!)
• Vitamin D: 16.2 ➔ 35.4 ng/mL (Optimal!)
• Triglycerides: 182 ➔ 122 mg/dL (-33%)
Your plan has automatically shifted to muscle building and long-term metabolic flexibility!`;
      } else {
        botReply = `Grounded in your active profile: Your metabolic priority is glycemic stability and consistent physical activity. Following your 30-Day Mission habits (>80% adherence) is the single most effective way to sustain optimal biomarkers.`;
      }

      setMessages([...newMessages, { sender: 'assistant', text: botReply }]);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-brand-navy border-l border-brand-border/80 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-4 border-b border-brand-border/60 flex items-center justify-between bg-brand-surface/90">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-emerald to-brand-cyan flex items-center justify-center text-slate-950 font-bold shadow-md shadow-brand-emerald/20">
                <Bot className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <h3 className="text-sm font-bold text-white">NutriLoop AI Copilot</h3>
                  <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-brand-emerald/20 text-brand-emerald font-bold border border-brand-emerald/30">
                    Grounded
                  </span>
                </div>
                <p className="text-[10px] text-slate-400">Context: {DEMO_USER.name} (Score {isRetestMode ? '82' : '64'}/100)</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Log */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
            
            {/* Grounding Notice */}
            <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 flex items-start space-x-2">
              <ShieldCheck className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
              <span>Answers are strictly grounded in your active blood test biomarkers, sleep metrics, and daily mission progress.</span>
            </div>

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start space-x-2.5 ${
                  msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                  msg.sender === 'user' ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40' : 'bg-brand-emerald/20 text-brand-emerald border border-brand-emerald/40'
                }`}>
                  {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed whitespace-pre-line ${
                  msg.sender === 'user' 
                    ? 'bg-brand-cyan/15 border border-brand-cyan/30 text-white rounded-tr-none' 
                    : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

          </div>

          {/* Quick Prompt Suggestions & Input Box */}
          <div className="p-4 border-t border-brand-border/60 bg-brand-surface/90 space-y-3">
            
            {/* Prompt Pills */}
            <div className="flex flex-wrap gap-1.5">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-[11px] text-slate-300 hover:text-white transition-all text-left"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputQuery);
              }}
              className="flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask about your diet, biomarkers, or trajectory..."
                className="flex-1 bg-slate-900 border border-slate-700 focus:border-brand-emerald rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-brand-emerald"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-brand-emerald text-slate-950 hover:bg-brand-emerald/90 transition-colors shrink-0"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
              </button>
            </form>

            <div className="text-[10px] text-slate-500 text-center">
              Educational preventive health copilot • Not medical diagnosis
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
