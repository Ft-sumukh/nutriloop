import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DemoTourBar from './components/DemoTourBar';
import LandingPage from './components/LandingPage';
import LabReportUpload from './components/LabReportUpload';
import HealthProfileDashboard from './components/HealthProfileDashboard';
import HealthSimulator from './components/HealthSimulator';
import HealthMission from './components/HealthMission';
import HealthTimeline from './components/HealthTimeline';
import SubscriptionPage from './components/SubscriptionPage';
import PitchDeckMode from './components/PitchDeckMode';
import AICopilotDrawer from './components/AICopilotDrawer';
import { MessageSquare, ShieldCheck, Activity } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('landing');
  const [showDemoTour, setShowDemoTour] = useState(false);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const [isRetestMode, setIsRetestMode] = useState(false);
  const [activeReportType, setActiveReportType] = useState('baseline');

  const handleTriggerSampleUpload = () => {
    setActiveTab('upload');
    setActiveReportType('baseline');
  };

  const handleStartSimulation = () => {
    setActiveTab('simulator');
  };

  const handleTriggerRetest = () => {
    setIsRetestMode(true);
    setActiveTab('timeline');
  };

  const handleReportLoaded = (type) => {
    if (type === 'retest') {
      setIsRetestMode(true);
    } else {
      setIsRetestMode(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5FAF7] text-slate-900 flex flex-col font-sans selection:bg-brand-emerald/25 selection:text-brand-emerald">
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showDemoTour={showDemoTour}
        setShowDemoTour={setShowDemoTour}
        onOpenCopilot={() => setIsCopilotOpen(true)}
        isRetestMode={isRetestMode}
      />

      {/* 3-Minute Hackathon Winning Demo Guide Banner */}
      {showDemoTour && (
        <DemoTourBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onClose={() => setShowDemoTour(false)}
          onTriggerSampleUpload={handleTriggerSampleUpload}
          onStartSimulation={handleStartSimulation}
          onTriggerRetest={handleTriggerRetest}
          onOpenCopilot={() => setIsCopilotOpen(true)}
        />
      )}

      {/* Main View Area */}
      <main className="flex-1">
        {activeTab === 'landing' && (
          <LandingPage
            setActiveTab={setActiveTab}
            onTriggerSampleUpload={handleTriggerSampleUpload}
            onStartSimulation={handleStartSimulation}
          />
        )}

        {activeTab === 'upload' && (
          <LabReportUpload
            setActiveTab={setActiveTab}
            activeReportType={activeReportType}
            setActiveReportType={setActiveReportType}
            onReportLoaded={handleReportLoaded}
          />
        )}

        {activeTab === 'dashboard' && (
          <HealthProfileDashboard
            setActiveTab={setActiveTab}
            isRetestMode={isRetestMode}
            onStartSimulation={handleStartSimulation}
            onOpenCopilot={() => setIsCopilotOpen(true)}
          />
        )}

        {activeTab === 'simulator' && (
          <HealthSimulator
            setActiveTab={setActiveTab}
            onCommitMission={() => setActiveTab('mission')}
          />
        )}

        {activeTab === 'mission' && (
          <HealthMission
            setActiveTab={setActiveTab}
            onNavigateTimeline={() => setActiveTab('timeline')}
          />
        )}

        {activeTab === 'timeline' && (
          <HealthTimeline
            setActiveTab={setActiveTab}
            isRetestMode={isRetestMode}
            setIsRetestMode={setIsRetestMode}
          />
        )}

        {activeTab === 'subscription' && (
          <SubscriptionPage
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'pitch' && (
          <PitchDeckMode
            setActiveTab={setActiveTab}
          />
        )}
      </main>

      {/* Floating Ask Copilot Trigger Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsCopilotOpen(true)}
          className="group relative flex items-center space-x-2 px-4 py-3 rounded-full bg-gradient-to-r from-brand-emerald to-brand-cyan text-slate-950 font-bold text-xs shadow-2xl shadow-brand-emerald/30 hover:shadow-brand-emerald/50 hover:scale-105 transition-all"
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-950"></span>
          </span>
          <MessageSquare className="w-4 h-4 stroke-[2.5]" />
          <span>Ask AI Copilot</span>
        </button>
      </div>

      {/* AI Copilot Slide-over Drawer */}
      <AICopilotDrawer
        isOpen={isCopilotOpen}
        onClose={() => setIsCopilotOpen(false)}
        isRetestMode={isRetestMode}
        setActiveTab={setActiveTab}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-emerald-100 py-8 px-4 sm:px-6 lg:px-8 text-xs text-slate-500 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 rounded-lg bg-brand-emerald/20 text-brand-emerald flex items-center justify-center font-bold">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <span className="text-slate-900 font-bold">NutriLoop</span>
              <span className="text-slate-500 ml-2">AI Preventive Health Operating System</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-[11px]">
            <span className="flex items-center space-x-1.5 text-slate-600">
              <ShieldCheck className="w-4 h-4 text-brand-emerald" />
              <span>Clinician Review Guardrail Active</span>
            </span>
            <span>•</span>
            <span>Mochatrade YC26 Hackathon (Medtech Track)</span>
          </div>

          <div className="text-[10px] text-slate-500 text-center md:text-right">
            Personal wellness insights • Not a substitute for medical advice
          </div>
        </div>
      </footer>

    </div>
  );
}
