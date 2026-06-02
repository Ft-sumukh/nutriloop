# NutriLoop — AI-Powered Preventive Health Platform
> **Mochatrade YC26 Hackathon • Medtech Track Submission**  
> *"Turn health data into decisions, decisions into habits, and habits into measurable health improvement."*

[![Mochatrade YC26](https://img.shields.io/badge/Mochatrade%20YC26-Medtech%20Track-10B981?style=for-the-badge)](https://github.com/Ft-sumukh/nutriloop)
[![License: MIT](https://img.shields.io/badge/License-MIT-06B6D4?style=for-the-badge)](LICENSE)
[![Vite 8](https://img.shields.io/badge/Vite-8.2.2-8B5CF6?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)

---

## 🌟 Executive Summary

The central problem in preventive healthcare is **not a lack of data**. People receive large amounts of data from blood tests, smartwatches, and wellness apps, but that information is fragmented and difficult to turn into daily action. Generic nutrition advice fails to adapt to an individual's changing metabolic profile.

**NutriLoop** is an AI-powered preventive health decision and execution layer that converts diagnostic blood tests, lifestyle, sleep, and physical activity into a personalized and continuously evolving health plan.

Our signature feature, the **Health Simulator**, allows users to ask *"What if I walk 8,000 steps every day and reduce sugary drinks for 8 weeks?"* and compare estimated physiological trajectories across an 8–12 week horizon before committing.

```
   ┌──────────────────────────────────────────────────────────────┐
   │                       NutriLoop Loop                         │
   │  [Test / Lab PDF] ──> [Understand: Health Profile]           │
   │         ▲                               │                     │
   │         │                               ▼                     │
   │  [Retest & Optimize] <── [Track: Mission] <── [Simulate: AI] │
   └──────────────────────────────────────────────────────────────┘
```

---

## 🚀 Key Features

### 1. 🔮 The Health Simulator (Signature Feature)
- **Natural Language Scenario Modeling**: Enter questions like *"What if I walk 8,000 steps and cut sugary drinks for 8 weeks?"*
- **1-Click Clinical Presets**: Metabolic Reversal, Deep Reset (Lifting + High Protein), Circadian Sleep Repair.
- **Interactive Multi-Variable Sliders**: Steps/day (2k–15k), Sugar cut % (0–100%), Sleep hours, Protein grams, Strength days, Adherence rate.
- **Dynamic Recharts Projections**: Trajectory curves for Health Score (64 ➔ 76+), estimated HbA1c (5.9% ➔ 5.55%), Fasting Glucose, and Vitality index.
- **AI Biological Mechanism Analysis**: Explains non-insulin dependent skeletal muscle GLUT-4 glucose clearance and hepatic de novo lipogenesis suppression.
- **One-Click Commitment**: Directly converts the simulated scenario into an active 30-Day Mission.

### 2. 📊 Personal Health Profile & Explainability Engine
- **Overall Health Score Ring**: Baseline `64/100` (Moderate Strain) vs. Week 12 Retest `82/100` (Optimal).
- **4 Health Pillars**: Nutrition (58), Metabolic Health (62), Sleep & Recovery (61), Lifestyle & Activity (55).
- **Explainable AI Modal**: Click any category or biomarker to view deterministic calculation logic, biological rationale, lifestyle contributors, and clinician review governance flags.

### 3. 📋 Lab Report Parser & OCR Extraction
- Drag-and-drop diagnostic blood report upload with animated OCR progress.
- 1-Click preloaded reports: **Arjun Mehta's Baseline Panel** (Pre-diabetic 5.9%, Vitamin D deficient 16.2 ng/mL) and **Week 12 Retest Report**.

### 4. 🎯 30-Day Health Mission & Adherence Tracking
- Active Protocol: *"Metabolic Reset & Vitality 30"* (Day 18 of 30).
- Adherence metrics: 83% adherence rate, 6-day unbroken streak.
- Interactive daily checklist (morning sunlight + Vit D3, 25g+ protein breakfast, 15-min post-lunch walk, 8,000 steps target, zero liquid sugar, 10 PM screen curfew).

### 5. 📈 12-Week Longitudinal Timeline & Closed-Loop Engine
- Closed-loop milestones: Week 0 (Test) ➔ Week 4 (Adapt) ➔ Week 8 (Consolidate) ➔ Week 12 (Retest & Optimize).
- **Interactive Retest Simulation**: Confetti celebration, before/after comparison table (64 ➔ 82 score, HbA1c 5.9% ➔ 5.5%), and automatic adaptation into **Phase 2: Athletic Longevity Protocol**.

### 6. 🤖 Context-Grounded AI Health Copilot
- Slide-over chat drawer grounded strictly in active lab values and mission progress.
- Pre-built quick queries (*"What should I focus on today?"*, *"Why is my nutrition score only 58?"*).

### 7. 💎 Subscription & Medtech Business Model
- **Core** (₹999/mo | $12/mo): Digital Health OS, Report Parsing, Copilot, Habit Missions.
- **Health Simulator Pro** (₹2,499/mo | $29/mo): Complete Simulator, bundled quarterly at-home blood test, 12-week retest loop.
- **Clinical Concierge** (₹4,999/mo | $59/mo): Full concierge, 1-on-1 MD tele-consult, continuous CGM sync.

### 8. 🎙️ Mochatrade YC26 6-Slide Pitch Mode & 3-Min Demo Tour
- Interactive 6-slide presentation deck matching Mochatrade Round 1 requirements (keyboard navigable with `←` and `→`).
- Sticky 3-minute guided demo tour bar mapping the 0:00 to 3:00 pitch sequence with 1-click jumps.

---

## 🇮🇳 Competitive Advantage in India

| Provider | Traditional Model | Critical Limitation | NutriLoop Advantage |
|---|---|---|---|
| **eGenome.ai** | Genetic / biomarker testing + static PDF | One-off report delivery; no dynamic simulation | Continuous Health Simulator + daily mission execution + retest adaptation |
| **Oath Life Sciences** | Blood test to direct supplement bottle upsell | Pill subscription focus; lacks habit tracking | Clinician-gated preventive intelligence, not a supplement store |
| **Supershyft** | Biomarkers + coach chat + periodic retests | Manual coach bottleneck; static templates | Instant mathematical trajectory simulations with live adherence sensitivity |
| **Generic Chatbots** | General text queries without data grounding | Hallucinates advice; no biomarker memory | Strictly grounded in patient biomarkers with explainability & clinical safety |

---

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite 8
- **Styling**: Tailwind CSS (Custom medtech dark palette: `#070C1E`, `#0B132B`, emerald `#10B981`, cyan `#06B6D4`)
- **Visualizations**: Recharts (multi-metric SVG trajectory curves, radar pillars)
- **Icons**: Lucide React
- **Celebration FX**: Canvas Confetti
- **Physiological Engine**: Deterministic metabolic response models (GLUT-4 translocation, hepatic de novo lipogenesis suppression)

---

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/Ft-sumukh/nutriloop.git
cd nutriloop

# Install dependencies
npm install

# Run the local development server
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser.

To test the production build:
```bash
npm run build
npm run preview
```

---

## ⏱️ 3-Minute Hackathon Demo Script (For Judges)

1. **0:00 Problem**: Highlight that people collect lab numbers without decisions, and traditional healthcare lacks a closed loop.
2. **0:30 Upload**: Click *0:30 Upload Report* ➔ Click *Load Baseline Report (W0)* to extract Arjun's 8 biomarkers.
3. **0:45 Profile**: Click *0:45 Health Profile* ➔ Observe baseline *64/100* score and click any pillar to open the *Explainable AI Modal*.
4. **1:00 Copilot**: Click *Ask Copilot* ➔ Select *"What should I focus on today?"* to demonstrate profile-grounded reasoning.
5. **1:50 Simulator (Signature)**: Click *1:50 Simulator* ➔ Adjust steps and sugar sliders to observe the trajectory curve climbing to *76* and read the GLUT-4 mechanism.
6. **2:15 Mission**: Click *START 30-DAY MISSION* ➔ Check off habits and observe the *83% adherence rate*.
7. **2:30 Retest**: Click *2:30 12-Wk Retest* ➔ Trigger *Simulate Week 12 Retest* with confetti to see the score rise to *82/100* and plan adapt to Phase 2.
8. **3:00 Pitch**: Click *3:00 YC26 Pitch Deck* ➔ Conclude with NutriLoop's medtech business vision.

---

## 🛡️ Medical Disclaimer & Safety Boundaries

NutriLoop provides educational preventive wellness decision support and simulated physiological trajectory estimates. It is not an autonomous medical diagnostic system. All supplement dosages and medical interventions operate behind a certified physician review gate.
