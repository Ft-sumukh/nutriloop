import React, { useState } from 'react';
import { 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  ArrowRight, 
  RefreshCw, 
  Eye, 
  Layers,
  ShieldAlert,
  Calendar,
  UserCheck
} from 'lucide-react';
import { BASELINE_BIOMARKERS, RETEST_BIOMARKERS, DEMO_USER } from '../data/mockData';

export default function LabReportUpload({ 
  onReportLoaded, 
  setActiveTab, 
  activeReportType, 
  setActiveReportType 
}) {
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState('');
  const [extractedData, setExtractedData] = useState(BASELINE_BIOMARKERS);
  const [currentFileMeta, setCurrentFileMeta] = useState({
    name: 'Diagnostic_Panel_Arjun_Baseline.pdf',
    date: 'June 01, 2026',
    lab: 'Thyrocare Certified Diagnostics, Bangalore',
    status: 'Baseline Scan Analyzed'
  });

  const handleSimulateLoad = (type) => {
    setIsScanning(true);
    setActiveReportType(type);

    setScanStep('1. Reading document OCR layers & optical text...');
    setTimeout(() => {
      setScanStep('2. Extracting biochemical reference ranges & units...');
    }, 500);

    setTimeout(() => {
      setScanStep('3. Categorizing metabolic, nutritional, & inflammatory flags...');
    }, 1000);

    setTimeout(() => {
      setIsScanning(false);
      if (type === 'baseline') {
        setExtractedData(BASELINE_BIOMARKERS);
        setCurrentFileMeta({
          name: 'Comprehensive_Metabolic_Arjun_Baseline.pdf',
          date: 'June 01, 2026',
          lab: 'Metropolis Diagnostics Lab, Bangalore',
          status: 'Baseline Extracted (8 Markers)'
        });
        if (onReportLoaded) onReportLoaded('baseline');
      } else {
        setExtractedData(RETEST_BIOMARKERS);
        setCurrentFileMeta({
          name: 'FollowUp_Retest_Panel_Arjun_W12.pdf',
          date: 'August 24, 2026',
          lab: 'Metropolis Diagnostics Lab, Bangalore',
          status: 'Week 12 Follow-up Extracted (8 Markers)'
        });
        if (onReportLoaded) onReportLoaded('retest');
      }
    }, 1400);
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-border/60 pb-6">
        <div>
          <div className="flex items-center space-x-2 text-brand-emerald text-xs font-semibold uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4" />
            <span>Step 1: Test & Biomarker Ingestion</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Lab Report Parser & Information Extractor
          </h1>
          <p className="text-sm text-slate-300 mt-1">
            Upload any standard diagnostic PDF or blood report image to automatically parse biomarkers and construct the Personal Health Profile.
          </p>
        </div>

        {/* Quick Demo Preload Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleSimulateLoad('baseline')}
            className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all flex items-center space-x-1.5 ${
              activeReportType === 'baseline'
                ? 'bg-brand-emerald/20 text-brand-emerald border-brand-emerald/50 ring-1 ring-brand-emerald/50'
                : 'bg-brand-surface text-slate-300 border-brand-border hover:bg-brand-card hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Load Baseline Report (W0)</span>
          </button>

          <button
            onClick={() => handleSimulateLoad('retest')}
            className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all flex items-center space-x-1.5 ${
              activeReportType === 'retest'
                ? 'bg-brand-cyan/20 text-brand-cyan border-brand-cyan/50 ring-1 ring-brand-cyan/50'
                : 'bg-brand-surface text-slate-300 border-brand-border hover:bg-brand-card hover:text-white'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Load Retest Report (W12)</span>
          </button>
        </div>
      </div>

      {/* Upload Zone & Scanning State */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Upload Card */}
        <div className="lg:col-span-1 bg-brand-surface/70 border border-brand-border/80 rounded-2xl p-6 flex flex-col justify-between shadow-lg">
          <div>
            <h3 className="text-base font-bold text-white mb-2">Upload Diagnostic PDF</h3>
            <p className="text-xs text-slate-400 mb-5">
              Supports Metropolis, Thyrocare, Lal Pathlabs, Quest, Labcorp, and standard clinical formats.
            </p>

            <div 
              onClick={() => handleSimulateLoad('baseline')}
              className="border-2 border-dashed border-brand-border hover:border-brand-emerald/60 rounded-xl p-6 text-center cursor-pointer transition-colors bg-brand-navy/60 hover:bg-brand-navy/90 group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-emerald/10 text-brand-emerald flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <UploadCloud className="w-6 h-6" />
              </div>
              <p className="text-xs font-semibold text-white mb-1">
                Drop report here or click to browse
              </p>
              <p className="text-[11px] text-slate-400">PDF, JPG, or PNG up to 25MB</p>
            </div>

            {/* Fictional User Context Pill */}
            <div className="mt-5 p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <div className="flex items-center space-x-2 text-white font-medium mb-1">
                <UserCheck className="w-3.5 h-3.5 text-brand-emerald" />
                <span>Active Profile: {DEMO_USER.name}, {DEMO_USER.age}y</span>
              </div>
              <p className="text-[11px] text-slate-400">
                {DEMO_USER.occupation} • {DEMO_USER.location}
              </p>
              <p className="text-[11px] text-amber-400 mt-1">
                Goal: {DEMO_USER.primaryGoal}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span>Encrypted HIPAA/GDPR</span>
            <span className="text-brand-emerald font-semibold">100% Client-Side OCR</span>
          </div>
        </div>

        {/* Extracted Biomarkers Display */}
        <div className="lg:col-span-2 bg-brand-surface/70 border border-brand-border/80 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
          <div>
            
            {/* Meta bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-brand-border/60">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-brand-emerald" />
                <span className="font-semibold text-white text-xs sm:text-sm">{currentFileMeta.name}</span>
                <span className="text-[11px] text-slate-400 hidden sm:inline">• {currentFileMeta.date}</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20">
                {currentFileMeta.status}
              </span>
            </div>

            {/* Scanning Progress Banner */}
            {isScanning ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full border-4 border-brand-emerald border-t-transparent animate-spin mx-auto" />
                <p className="text-sm font-semibold text-white">{scanStep}</p>
                <p className="text-xs text-slate-400">Deterministic extraction engine mapping values...</p>
              </div>
            ) : (
              <div className="space-y-4">
                
                {/* Biomarkers Table Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-1">
                  {extractedData.map((bio) => (
                    <div 
                      key={bio.id}
                      className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-xs font-bold text-white">{bio.name}</h4>
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider">{bio.category}</span>
                        </div>
                        {getStatusBadge(bio.status)}
                      </div>

                      <div className="mt-3 flex items-baseline justify-between">
                        <div>
                          <span className="text-lg font-extrabold text-white">{bio.value}</span>
                          <span className="text-[11px] text-slate-400 ml-1">{bio.unit}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">Ref: {bio.referenceRange}</span>
                      </div>

                      {bio.changeNote && (
                        <div className="mt-2 text-[10px] text-brand-cyan font-medium pt-1.5 border-t border-slate-800/80">
                          {bio.changeNote}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            )}

          </div>

          {/* Bottom Action Footer */}
          {!isScanning && (
            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-400 flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                <span>All {extractedData.length} key biomarkers verified & classified</span>
              </div>

              <button
                onClick={() => setActiveTab('dashboard')}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-emerald to-brand-cyan text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-brand-emerald/20 hover:scale-[1.02] transition-all"
              >
                <span>View Personal Health Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
