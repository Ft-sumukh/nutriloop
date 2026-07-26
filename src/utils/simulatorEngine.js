// NutriLoop Deterministic Simulation Engine

/**
 * Calculates dynamic health score and biomarker trajectories
 * based on user inputs and validated preventive physiological models.
 */
export function simulateTrajectory(inputs = {}) {
  const {
    steps = 8000,
    sugarCutPercent = 90,
    sleepHours = 7.2,
    proteinGrams = 75,
    strengthDays = 2,
    durationWeeks = 8,
    adherenceRate = 85 // %
  } = inputs;

  // Baseline values (Arjun Mehta)
  const baseHealthScore = 64;
  const baseHbA1c = 5.9;
  const baseFastingGlucose = 106;
  const baseTriglycerides = 182;
  const baseEnergy = 45;
  const baseRecovery = 61;

  // Multiplier from adherence (e.g. 85% adherence = 0.85 effectiveness)
  const adherenceFactor = Math.max(0.2, Math.min(1.0, adherenceRate / 100));

  // Compute physiological intervention points (0 to 1 scale)
  const stepScore = Math.min(1.2, Math.max(0, (steps - 3400) / 6000));
  const sugarScore = sugarCutPercent / 100;
  const sleepScore = Math.min(1.2, Math.max(0, (sleepHours - 6.0) / 2.0));
  const proteinScore = Math.min(1.2, Math.max(0, (proteinGrams - 40) / 45));
  const strengthScore = Math.min(1.2, strengthDays / 3.0);

  // Maximum potential gains across 12 weeks
  const maxScoreGain = (stepScore * 6.5 + sugarScore * 6.0 + sleepScore * 4.0 + proteinScore * 3.5 + strengthScore * 3.5) * adherenceFactor;
  const maxHbA1cReduction = (stepScore * 0.18 + sugarScore * 0.18 + strengthScore * 0.12) * adherenceFactor;
  const maxGlucoseReduction = (stepScore * 6.5 + sugarScore * 7.5 + sleepScore * 3.0) * adherenceFactor;
  const maxTriglycerideDrop = (sugarScore * 42 + stepScore * 18) * adherenceFactor;

  // Generate trajectory points
  const weeks = durationWeeks >= 12 ? [0, 2, 4, 6, 8, 12] : [0, 2, 4, 6, 8];
  
  const trajectory = weeks.map((w) => {
    if (w === 0) {
      return {
        week: 'Week 0',
        weekNum: 0,
        healthScore: baseHealthScore,
        baselineScore: baseHealthScore,
        hba1c: baseHbA1c,
        fastingGlucose: baseFastingGlucose,
        energy: baseEnergy,
        recovery: baseRecovery,
        triglycerides: baseTriglycerides
      };
    }

    // Physiological response curve: sigmoid-like saturation over time
    const progressFactor = 1 - Math.exp(-0.28 * w);

    const healthScore = Math.round(baseHealthScore + maxScoreGain * progressFactor);
    const hba1c = Number((baseHbA1c - maxHbA1cReduction * progressFactor).toFixed(2));
    const fastingGlucose = Math.round(baseFastingGlucose - maxGlucoseReduction * progressFactor);
    const energy = Math.round(baseEnergy + (40 * progressFactor * ((sleepScore + stepScore) / 2)));
    const recovery = Math.round(baseRecovery + (16 * progressFactor * sleepScore));
    const triglycerides = Math.round(baseTriglycerides - maxTriglycerideDrop * progressFactor);

    return {
      week: 'Week ' + w,
      weekNum: w,
      healthScore,
      baselineScore: baseHealthScore,
      hba1c,
      fastingGlucose,
      energy: Math.min(95, energy),
      recovery: Math.min(92, recovery),
      triglycerides
    };
  });

  const finalPoint = trajectory[trajectory.length - 1];
  const totalScoreDelta = finalPoint.healthScore - baseHealthScore;
  const totalHbA1cDelta = Number((finalPoint.hba1c - baseHbA1c).toFixed(2));
  const totalGlucoseDelta = finalPoint.fastingGlucose - baseFastingGlucose;
  const totalTriglycerideDelta = finalPoint.triglycerides - baseTriglycerides;

  // Detailed physiological explanation generator
  let explanation = '';
  if (sugarCutPercent >= 70 && steps >= 7000) {
    explanation = 'Dual-Action Glycemic Clearance: Slashing ' + sugarCutPercent + '% of refined sugars directly downregulates hepatic de novo lipogenesis, halting excess triglyceride production. Concurrently, accumulating ' + steps.toLocaleString() + ' daily steps engages the non-insulin dependent GLUT-4 translocation pathway in skeletal muscle, clearing systemic glucose independently of beta-cell insulin secretion.';
  } else if (steps >= 7000) {
    explanation = 'Musculoskeletal Glucose Uptake: Sustained daily volume of ' + steps.toLocaleString() + ' steps enhances peripheral capillary density and skeletal muscle insulin sensitivity, leading to an estimated ' + Math.abs(totalHbA1cDelta) + '% drop in 90-day glycated hemoglobin.';
  } else if (sugarCutPercent >= 70) {
    explanation = 'Hepatic Steatosis Reduction: Slashing refined sugary liquids halts the rapid fructose flux through the portal vein, allowing liver glycogen stores to normalize and lowering fasting triglycerides by an estimated ' + Math.abs(totalTriglycerideDelta) + ' mg/dL.';
  } else {
    explanation = 'Baseline Incremental Adaptation: Modest lifestyle adjustments provide a steady preventive foundation, gradually improving resting metabolic rate and day-to-day energy stability.';
  }

  return {
    trajectory,
    totalScoreDelta,
    totalHbA1cDelta,
    totalGlucoseDelta,
    totalTriglycerideDelta,
    projectedHealthScore: finalPoint.healthScore,
    projectedHbA1c: finalPoint.hba1c,
    projectedGlucose: finalPoint.fastingGlucose,
    projectedTriglycerides: finalPoint.triglycerides,
    explanation,
    assumptions: [
      'Assumes sustained adherence rate of ~' + adherenceRate + '% across the ' + durationWeeks + '-week window',
      'Baseline calculated from fasting laboratory chemistry dated within last 30 days',
      'Does not account for concurrent unlogged acute pharmacological interventions',
      'Individual genetic polymorphisms (e.g. TCF7L2, MTHFR) may modulate trajectory slope'
    ],
    safetyNotice: 'Estimated scenario based on metabolic physiology models. This is an educational preventive decision-support projection and not a guaranteed diagnostic prediction.'
  };
}