// NutriLoop Core Datasets & State

export const DEMO_USER = {
  id: 'usr_arjun_99',
  name: 'Arjun Mehta',
  age: 34,
  gender: 'Male',
  location: 'Bengaluru, India',
  occupation: 'Staff Software Engineer',
  height: 175,
  weight: 78.5,
  bmi: 25.6,
  dietaryPreference: 'Flexitarian (Predominantly Veg, occasional eggs)',
  dailyStepsAvg: 3400,
  averageSleep: 6.1,
  stressLevel: 'High (Desk-bound, erratic screen hours)',
  primaryGoal: 'Reverse pre-diabetic marker & fix afternoon energy crashes',
  enrolledDate: '2026-06-01',
};

export const BASELINE_BIOMARKERS = [
  {
    id: 'hba1c',
    name: 'HbA1c (Glycated Hemoglobin)',
    category: 'metabolic',
    value: 5.9,
    unit: '%',
    referenceRange: '< 5.7%',
    status: 'elevated',
    statusLabel: 'Borderline Pre-diabetic',
    clinicalSignificance: 'Average blood glucose over the past 90 days. Levels between 5.7% and 6.4% represent impaired glucose tolerance.',
    whyItMatters: 'Chronically elevated circulating glucose causes advanced glycation end-products (AGEs), vascular inflammation, and beta-cell strain.',
    lifestyleDriver: 'Frequent refined carb spikes during sedentary desk shifts with minimal post-meal movement.',
    actionPlan: '15-minute brisk walk immediately following lunch; switch to a 25g+ protein breakfast to blunt morning glucose peaks.'
  },
  {
    id: 'fpg',
    name: 'Fasting Plasma Glucose',
    category: 'metabolic',
    value: 106,
    unit: 'mg/dL',
    referenceRange: '70 - 99 mg/dL',
    status: 'elevated',
    statusLabel: 'Impaired Fasting Glucose',
    clinicalSignificance: 'Morning glucose level after an 8-hour overnight fast, reflecting basal hepatic gluconeogenesis regulation.',
    whyItMatters: 'Liver insulin resistance fails to downregulate overnight glucose synthesis.',
    lifestyleDriver: 'Late-night eating (past 10 PM) and elevated evening cortisol.',
    actionPlan: '12-hour overnight fasting window (finish dinner by 8:30 PM); eliminate late-night sweetened chai or snacks.'
  },
  {
    id: 'vit_d',
    name: '25-Hydroxy Vitamin D',
    category: 'nutrition',
    value: 16.2,
    unit: 'ng/mL',
    referenceRange: '30 - 100 ng/mL',
    status: 'deficient',
    statusLabel: 'Clinically Deficient',
    clinicalSignificance: 'Steroid pro-hormone modulating calcium absorption, immune function, insulin sensitivity, and neuromuscular recovery.',
    whyItMatters: 'Deficiency impairs pancreatic insulin secretion and exacerbates systemic muscle fatigue and sleep disruption.',
    lifestyleDriver: 'Indoor corporate work environment with near-zero midday solar UV-B exposure.',
    actionPlan: 'Weekly physician-guided Vitamin D3 replenishment for 8 weeks + 15 min morning solar exposure.'
  },
  {
    id: 'ldl',
    name: 'LDL-C (Low-Density Lipoprotein)',
    category: 'metabolic',
    value: 138,
    unit: 'mg/dL',
    referenceRange: '< 100 mg/dL',
    status: 'borderline',
    statusLabel: 'Borderline High',
    clinicalSignificance: 'Atherogenic lipoprotein particle count carrying cholesterol to peripheral tissues.',
    whyItMatters: 'ApoB-containing particles are prone to arterial deposition and oxidative modification over time.',
    lifestyleDriver: 'Frequent restaurant food with refined seed oils and low soluble fiber.',
    actionPlan: 'Replace processed takeout with fiber-dense legumes and raw salads; increase daily soluble fiber to 35g.'
  },
  {
    id: 'hdl',
    name: 'HDL-C (High-Density Lipoprotein)',
    category: 'metabolic',
    value: 43,
    unit: 'mg/dL',
    referenceRange: '> 50 mg/dL',
    status: 'borderline',
    statusLabel: 'Sub-optimal',
    clinicalSignificance: 'Mediates reverse cholesterol transport from vascular endothelium to the liver.',
    whyItMatters: 'Low protective HDL compounds cardiovascular vulnerability when paired with elevated triglycerides.',
    lifestyleDriver: 'Low aerobic physical activity (<4,000 steps/day).',
    actionPlan: 'Accumulate >8,000 steps daily and introduce 2 weekly zone-2 brisk walking/jogging intervals.'
  },
  {
    id: 'triglycerides',
    name: 'Serum Triglycerides',
    category: 'metabolic',
    value: 182,
    unit: 'mg/dL',
    referenceRange: '< 150 mg/dL',
    status: 'elevated',
    statusLabel: 'Elevated',
    clinicalSignificance: 'Circulating fats directly synthesized from unburned dietary carbohydrates and excess fructose.',
    whyItMatters: 'Elevated triglycerides + low HDL is the hallmark fingerprint of insulin resistance and metabolic syndrome.',
    lifestyleDriver: 'High consumption of sugary iced beverages, sweet chai, and refined evening snacks.',
    actionPlan: 'Zero liquid sugar rule: replace sugary chai/sodas with water, green tea, or lemon water.'
  },
  {
    id: 'alt',
    name: 'ALT / SGPT (Alanine Aminotransferase)',
    category: 'lifestyle',
    value: 44,
    unit: 'U/L',
    referenceRange: '< 35 U/L',
    status: 'borderline',
    statusLabel: 'Mild Hepatic Stress',
    clinicalSignificance: 'Intracellular liver enzyme released during hepatocellular lipid accumulation.',
    whyItMatters: 'Early indicator of non-alcoholic fatty liver accumulation often preceding type-2 diabetes diagnosis.',
    lifestyleDriver: 'Sedentary energy surplus and frequent sugary liquid calories.',
    actionPlan: 'Daily brisk walking and reduction in late-night refined carb intake.'
  },
  {
    id: 'hscrp',
    name: 'High-Sensitivity CRP',
    category: 'recovery',
    value: 2.3,
    unit: 'mg/L',
    referenceRange: '< 1.0 mg/L',
    status: 'borderline',
    statusLabel: 'Moderate Systemic Inflammation',
    clinicalSignificance: 'Acute-phase hepatic protein reflecting low-grade chronic vascular inflammation.',
    whyItMatters: 'Drives vascular endothelium stiffness and impedes cellular repair.',
    lifestyleDriver: 'Restricted sleep (<6.5 hrs) and prolonged uninterrupted sitting.',
    actionPlan: 'Strict 10:00 PM digital curfew; prioritize 7.5 hours consistent sleep window.'
  }
];

export const RETEST_BIOMARKERS = [
  {
    id: 'hba1c',
    name: 'HbA1c (Glycated Hemoglobin)',
    category: 'metabolic',
    value: 5.5,
    unit: '%',
    referenceRange: '< 5.7%',
    status: 'optimal',
    statusLabel: 'Optimal / Non-diabetic',
    changeDelta: -0.4,
    changePercent: -6.8,
    changeNote: 'Normalized from 5.9% to 5.5% — Pre-diabetic marker successfully reversed!'
  },
  {
    id: 'fpg',
    name: 'Fasting Plasma Glucose',
    category: 'metabolic',
    value: 91,
    unit: 'mg/dL',
    referenceRange: '70 - 99 mg/dL',
    status: 'optimal',
    statusLabel: 'Optimal',
    changeDelta: -15,
    changePercent: -14.1,
    changeNote: 'Dropped from 106 to 91 mg/dL, restoring morning baseline metabolic control'
  },
  {
    id: 'vit_d',
    name: '25-Hydroxy Vitamin D',
    category: 'nutrition',
    value: 35.4,
    unit: 'ng/mL',
    referenceRange: '30 - 100 ng/mL',
    status: 'optimal',
    statusLabel: 'Robust & Sufficient',
    changeDelta: +19.2,
    changePercent: +118.5,
    changeNote: 'Deficiency eliminated, climbing from 16.2 to 35.4 ng/mL'
  },
  {
    id: 'ldl',
    name: 'LDL-C',
    category: 'metabolic',
    value: 112,
    unit: 'mg/dL',
    referenceRange: '< 100 mg/dL',
    status: 'normal',
    statusLabel: 'Significantly Reduced',
    changeDelta: -26,
    changePercent: -18.8,
    changeNote: 'Dropped from 138 to 112 mg/dL through dietary fiber improvements'
  },
  {
    id: 'hdl',
    name: 'HDL-C',
    category: 'metabolic',
    value: 52,
    unit: 'mg/dL',
    referenceRange: '> 50 mg/dL',
    status: 'optimal',
    statusLabel: 'Protective Range',
    changeDelta: +9,
    changePercent: +20.9,
    changeNote: 'Crossed protective threshold (>50 mg/dL) fueled by 8,000+ daily steps'
  },
  {
    id: 'triglycerides',
    name: 'Serum Triglycerides',
    category: 'metabolic',
    value: 122,
    unit: 'mg/dL',
    referenceRange: '< 150 mg/dL',
    status: 'optimal',
    statusLabel: 'Healthy Normal',
    changeDelta: -60,
    changePercent: -33.0,
    changeNote: 'Decreased by 60 mg/dL following elimination of liquid sugars'
  },
  {
    id: 'alt',
    name: 'ALT / SGPT (Liver)',
    category: 'lifestyle',
    value: 26,
    unit: 'U/L',
    referenceRange: '< 35 U/L',
    status: 'optimal',
    statusLabel: 'Normal Hepatic Health',
    changeDelta: -18,
    changePercent: -40.9,
    changeNote: 'Liver enzymes completely stabilized in optimal range'
  },
  {
    id: 'hscrp',
    name: 'High-Sensitivity CRP',
    category: 'recovery',
    value: 0.85,
    unit: 'mg/L',
    referenceRange: '< 1.0 mg/L',
    status: 'optimal',
    statusLabel: 'Low Inflammatory Risk',
    changeDelta: -1.45,
    changePercent: -63.0,
    changeNote: 'Systemic vascular inflammation cut by more than half'
  }
];

export const PILLARS_CONFIG = [
  {
    id: 'nutrition',
    title: 'Nutrition & Micronutrients',
    iconName: 'Apple',
    baselineScore: 58,
    retestScore: 79,
    baselineBadge: 'Deficiencies Detected',
    retestBadge: 'Optimal Micronutrient Balance',
    color: 'amber',
    accentColor: '#F59E0B',
    keyIssues: ['Severe Vitamin D deficiency (16.2 ng/mL)', 'Low protein density (<45g/day)', 'Excess sugary tea/beverage calories'],
    keyAchievements: ['Vitamin D normalized to 35.4 ng/mL', 'Daily protein hit 85g target consistently', 'Zero liquid sugar sustained for 60+ days']
  },
  {
    id: 'metabolic',
    title: 'Metabolic Health',
    iconName: 'Activity',
    baselineScore: 62,
    retestScore: 83,
    baselineBadge: 'Borderline Pre-diabetes',
    retestBadge: 'Metabolically Resilient',
    color: 'rose',
    accentColor: '#F43F5E',
    keyIssues: ['Pre-diabetic HbA1c at 5.9%', 'Fasting blood sugar 106 mg/dL', 'Triglycerides elevated at 182 mg/dL'],
    keyAchievements: ['HbA1c reversed to 5.5% (Non-diabetic range)', 'Triglycerides dropped 33% to 122 mg/dL', 'Insulin sensitivity restored']
  },
  {
    id: 'recovery',
    title: 'Sleep & Recovery',
    iconName: 'Moon',
    baselineScore: 61,
    retestScore: 75,
    baselineBadge: 'Elevated Strain',
    retestBadge: 'Restorative Architecture',
    color: 'purple',
    accentColor: '#8B5CF6',
    keyIssues: ['Average sleep 6.1 hours', 'Bedtime screen exposure until midnight', 'Vascular inflammation hs-CRP 2.3 mg/L'],
    keyAchievements: ['Average sleep duration elevated to 7.4 hours', '10 PM digital curfew adherence at 88%', 'hs-CRP dropped into low-risk zone (0.85)']
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle & Physical Activity',
    iconName: 'Flame',
    baselineScore: 55,
    retestScore: 83,
    baselineBadge: 'Highly Sedentary',
    retestBadge: 'Active Habit Loop',
    color: 'emerald',
    accentColor: '#10B981',
    keyIssues: ['Daily steps averaging 3,400', 'Continuous desk sitting > 10 hours', 'Liver stress enzymes ALT 44 U/L'],
    keyAchievements: ['Average steps sustained at 8,650/day', '15-min post-meal walks ingrained as habit', 'ALT normalized to 26 U/L']
  }
];

export const SIMULATION_PRESETS = [
  {
    id: 'preset_steps_sugar',
    title: '8,000 Daily Steps + Cut Sugary Drinks',
    subtitle: 'The signature hackathon intervention for metabolic reversal',
    badge: 'Recommended Protocol',
    steps: 8000,
    sugarCutPercent: 90,
    sleepHours: 7.2,
    proteinGrams: 75,
    strengthDays: 2,
    durationWeeks: 8,
    estimatedScoreDelta: 12,
    estimatedHbA1cDelta: -0.35,
    estimatedTriglycerideDelta: -45,
    keyMechanism: 'Post-meal muscle contraction drives non-insulin dependent GLUT-4 glucose clearance, while removing liquid fructose relieves hepatic fat synthesis.'
  },
  {
    id: 'preset_deep_reset',
    title: 'Metabolic Deep Reset (10k Steps + 90g Protein + Lifting)',
    subtitle: 'Maximum vitality transformation across 12 weeks',
    badge: 'Intensive Protocol',
    steps: 10000,
    sugarCutPercent: 100,
    sleepHours: 7.6,
    proteinGrams: 90,
    strengthDays: 3,
    durationWeeks: 12,
    estimatedScoreDelta: 18,
    estimatedHbA1cDelta: -0.45,
    estimatedTriglycerideDelta: -60,
    keyMechanism: 'Comprehensive insulin resensitization, mitochondrial biogenesis from resistance training, and complete resolution of hepatic liver enzyme elevations.'
  },
  {
    id: 'preset_circadian_sleep',
    title: 'Circadian Repair & High Protein Mornings',
    subtitle: 'Restores restorative sleep depth and ends 3 PM energy crashes',
    badge: 'Recovery Focus',
    steps: 6500,
    sugarCutPercent: 70,
    sleepHours: 7.8,
    proteinGrams: 85,
    strengthDays: 1,
    durationWeeks: 8,
    estimatedScoreDelta: 10,
    estimatedHbA1cDelta: -0.25,
    estimatedTriglycerideDelta: -30,
    keyMechanism: 'Cortisol regulation via 10 PM screen curfew combined with amino-acid satiety signaling to eliminate afternoon dopamine crashes.'
  }
];

export const INITIAL_MISSION_TASKS = [
  {
    id: 'task_morning_sun',
    title: '15-Min Morning Sunlight + 2,000 IU Vit D3 with breakfast',
    time: 'Morning • 08:00 AM',
    category: 'nutrition',
    completed: true,
    impact: 'Cortisol rhythm trigger + accelerates systemic Vitamin D restoration'
  },
  {
    id: 'task_protein_breakfast',
    title: '25g+ Protein Breakfast (Sprouted Moong / Eggs / Greek Bowl)',
    time: 'Morning • 09:00 AM',
    category: 'nutrition',
    completed: true,
    impact: 'Flattens morning glucose spike and prevents 11:30 AM craving crash'
  },
  {
    id: 'task_post_lunch_walk',
    title: '15-Minute Brisk Walk Immediately Following Lunch',
    time: 'Midday • 02:00 PM',
    category: 'lifestyle',
    completed: true,
    impact: 'Clears postprandial glucose spike by up to 34% via muscular contraction'
  },
  {
    id: 'task_steps_target',
    title: 'Hit 8,000 Daily Accumulated Steps',
    time: 'Afternoon • 06:30 PM',
    category: 'lifestyle',
    completed: false,
    impact: 'Sustains basal metabolic rate and stimulates mitochondrial insulin sensitivity'
  },
  {
    id: 'task_zero_soda',
    title: 'Zero Liquid Sugar (Replaced with Sparkling Water or Cinnamon Tea)',
    time: 'Evening • 08:00 PM',
    category: 'metabolic',
    completed: true,
    impact: 'Protects liver from de novo lipogenesis and halts triglyceride surges'
  },
  {
    id: 'task_screen_curfew',
    title: '10:00 PM Screen Curfew & 7.5h Rest Sanctuary',
    time: 'Night • 10:00 PM',
    category: 'recovery',
    completed: false,
    impact: 'Promotes deep restorative slow-wave sleep and lowers vascular inflammation'
  }
];

export const TIMELINE_STAGES = [
  {
    week: 0,
    title: 'Baseline Test & Discovery',
    status: 'completed',
    dateLabel: 'Week 0 (Baseline)',
    healthScore: 64,
    hba1c: 5.9,
    highlights: 'Initial comprehensive blood panel extracted. Pre-diabetes flag & severe Vitamin D deficiency detected.',
    action: 'Simulated 30-Day Mission created.'
  },
  {
    week: 4,
    title: 'Early Metabolic Adaptation',
    status: 'completed',
    dateLabel: 'Week 4 (Phase 1 Review)',
    healthScore: 69,
    hba1c: 5.8,
    highlights: '83% adherence achieved on 8,000 daily steps. Afternoon energy crashes eliminated. Fasting glucose down to 99 mg/dL.',
    action: 'Plan updated with increased resistance volume.'
  },
  {
    week: 8,
    title: 'Mid-Cycle Consolidation',
    status: 'completed',
    dateLabel: 'Week 8 (Phase 2 Review)',
    healthScore: 76,
    hba1c: 5.6,
    highlights: 'Continuous streak reached 42 days. Sleep duration up to 7.2 hours. Resting heart rate dropped by 4 bpm.',
    action: 'Home lab retest kit scheduled for delivery.'
  },
  {
    week: 12,
    title: 'Follow-up Retest & Optimization',
    status: 'retest_ready',
    dateLabel: 'Week 12 (Retest Milestone)',
    healthScore: 82,
    hba1c: 5.5,
    highlights: 'Full clinical retest confirms total pre-diabetes reversal, Vitamin D normalized to 35.4 ng/mL, triglycerides down 33%.',
    action: 'NutriLoop generates next-quarter athletic longevity protocol.'
  }
];

export const SUBSCRIPTION_TIERS = [
  {
    id: 'tier_basic',
    name: 'NutriLoop Core',
    badge: 'Starter',
    priceINR: '₹999',
    period: '/ month',
    priceUSD: '/mo',
    description: 'Essential preventive health intelligence for proactive individuals.',
    features: [
      'Unlimited Lab PDF & Image report parsing',
      'Personal Health Profile & Biomarker Dashboard',
      'AI Health Copilot (Context-grounded assistant)',
      '30-Day Health Mission & daily habit tracking',
      'Basic health trajectory estimations',
      'Medical disclaimer & explainability summaries'
    ],
    popular: false,
    ctaText: 'Start 14-Day Free Trial'
  },
  {
    id: 'tier_pro',
    name: 'NutriLoop Health Simulator Pro',
    badge: 'Most Popular',
    priceINR: '₹2,499',
    period: '/ month',
    priceUSD: '/mo',
    description: 'The complete closed-loop decision engine with quarterly biomarker testing.',
    features: [
      'Everything in NutriLoop Core',
      'Full Interactive Health Simulator Engine',
      'Custom scenario modeling (Steps, Diet, Sleep, Training)',
      '1x At-Home Certified Blood Panel per quarter included',
      'Closed-loop 12-week retest & automated plan adaptation',
      'Priority biomarker trend analytics & exportable summaries',
      'WhatsApp daily mission sync & reminders'
    ],
    popular: true,
    ctaText: 'Claim Hackathon Special'
  },
  {
    id: 'tier_concierge',
    name: 'NutriLoop Clinical Concierge',
    badge: 'Clinician Reviewed',
    priceINR: '₹4,999',
    period: '/ month',
    priceUSD: '/mo',
    description: 'Physician-supervised preventive protocol with precision diagnostics.',
    features: [
      'Everything in Simulator Pro',
      'Dedicated Clinician Review Gate on all interventions',
      '1-on-1 Monthly Tele-consult with Functional Medicine MD',
      'Comprehensive 75+ Biomarker Diagnostic Panel every 90 days',
      'Personalized physician-approved supplement formulation gate',
      'Continuous Glucose Monitor (CGM) sensor integration sync',
      'Family health sharing (up to 2 adult members)'
    ],
    popular: false,
    ctaText: 'Apply for Concierge'
  }
];

export const COMPETITIVE_MATRIX = [
  {
    competitor: 'eGenome.ai',
    model: 'Genetic / biomarker testing + static diet PDF',
    limitation: 'One-off report delivery; no dynamic simulation or closed-loop adherence.',
    nutriloopAdvantage: 'Continuous Health Simulator + daily mission execution + retest adaptation.'
  },
  {
    competitor: 'Oath Life Sciences',
    model: 'Blood test to direct supplement bottle upsell',
    limitation: 'Focuses on selling pill subscriptions; lacks habit tracking or lifestyle modeling.',
    nutriloopAdvantage: 'Clinician-gated preventive intelligence, not a supplement retail storefront.'
  },
  {
    competitor: 'Supershyft',
    model: 'Biomarkers + coach chat + periodic retests',
    limitation: 'Manual coach bottleneck; static meal templates without scenario forecasting.',
    nutriloopAdvantage: 'Interactive scenario simulator ("What if I walk 8k steps?") with instant mathematical projections.'
  },
  {
    competitor: 'Generic Chatbots (ChatGPT / Gemini)',
    model: 'General text queries without data grounding',
    limitation: 'Hallucinates medical advice; no longitudinal memory or structured lab parsing.',
    nutriloopAdvantage: 'Strictly grounded in patient biomarkers with explainability and clinical safety guardrails.'
  }
];