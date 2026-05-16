/**
 * Body Like Tea - Calculation Utilities
 * Professional fitness and nutrition calculations with validation
 */

// Validation constants
const VALIDATION_RULES = {
  age: { min: 15, max: 120, message: 'Age must be between 15 and 120 years' },
  height: { min: 50, max: 300, message: 'Height must be between 50cm and 300cm' },
  weight: { min: 30, max: 500, message: 'Weight must be between 30kg and 500kg' },
};

// Comprehensive input validation
export const validateUserInput = (userData) => {
  const errors = {};

  if (!userData.age || userData.age < VALIDATION_RULES.age.min || userData.age > VALIDATION_RULES.age.max) {
    errors.age = VALIDATION_RULES.age.message;
  }

  if (!userData.height || userData.height < VALIDATION_RULES.height.min || userData.height > VALIDATION_RULES.height.max) {
    errors.height = VALIDATION_RULES.height.message;
  }

  if (!userData.weight || userData.weight < VALIDATION_RULES.weight.min || userData.weight > VALIDATION_RULES.weight.max) {
    errors.weight = VALIDATION_RULES.weight.message;
  }

  if (!['male', 'female'].includes(userData.sex)) {
    errors.sex = 'Invalid sex selection';
  }

  if (!['light', 'moderate', 'high'].includes(userData.activityLevel)) {
    errors.activityLevel = 'Invalid activity level';
  }

  if (!['lose', 'maintain', 'gain'].includes(userData.weightGoal)) {
    errors.weightGoal = 'Invalid weight goal';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Mifflin-St Jeor Formula for BMR (Basal Metabolic Rate)
export const calculateBMR = (weight, height, age, sex) => {
  const base = (10 * weight) + (6.25 * height) - (5 * age);
  const bmr = sex === 'male' ? base + 5 : base - 161;

  // Edge case handling - ensure reasonable BMR
  if (bmr < 800 || bmr > 5000) {
    console.warn(`Calculated BMR ${bmr} is outside expected range (800-5000)`);
  }

  return Math.max(800, Math.min(5000, bmr));
};

// Activity multipliers for TDEE calculation
export const activityMultipliers = {
  light: 1.375,    // Desk job, little exercise
  moderate: 1.55,  // Exercise 3-4x per week
  high: 1.725,     // Daily intense exercise or physical job
};

// Activity level descriptions for tooltips
export const activityLevelTooltips = {
  light: 'Sedentary: little or no exercise',
  moderate: 'Lightly active: exercise 3-4 days/week',
  high: 'Very active: intense exercise daily or physical job',
};

// Calculate Total Daily Energy Expenditure
export const calculateTDEE = (bmr, activityLevel) => {
  const multiplier = activityMultipliers[activityLevel] || 1.55;
  return Math.round(bmr * multiplier);
};

// Protein multipliers (grams per kg of bodyweight)
export const proteinMultipliers = {
  lose: 2.0,      // Higher protein preserves muscle during deficit
  maintain: 1.6,
  gain: 1.8,
};

// Macro split (percentage of calories)
export const macroSplits = {
  lose: { protein: 0.35, carbs: 0.35, fats: 0.30 },
  maintain: { protein: 0.30, carbs: 0.45, fats: 0.25 },
  gain: { protein: 0.30, carbs: 0.50, fats: 0.20 },
};

// Calculate calorie target based on goal
export const calculateCalorieTarget = (tdee, goal) => {
  const adjustments = {
    lose: -400,
    maintain: 0,
    gain: 300,
  };

  const adjustment = adjustments[goal] || 0;
  return Math.round(tdee + adjustment);
};

// Calculate protein target in grams
export const calculateProteinTarget = (weight, goal) => {
  const multiplier = proteinMultipliers[goal] || 1.6;
  return Math.round(weight * multiplier);
};

// Calculate macro targets based on calorie target and goal
export const calculateMacros = (calorieTarget, goal) => {
  const splits = macroSplits[goal] || macroSplits.maintain;

  const proteinCals = Math.round(calorieTarget * splits.protein);
  const carbsCals = Math.round(calorieTarget * splits.carbs);
  const fatsCals = Math.round(calorieTarget * splits.fats);

  return {
    protein: Math.round(proteinCals / 4),        // 4 cal per gram
    carbs: Math.round(carbsCals / 4),            // 4 cal per gram
    fats: Math.round(fatsCals / 9),              // 9 cal per gram
    breakdown: {
      proteinCals,
      carbsCals,
      fatsCals,
    },
  };
};

// Comprehensive calculation function with error handling
export const calculateUserMetrics = (userData) => {
  try {
    // Validate input first
    const validation = validateUserInput(userData);
    if (!validation.isValid) {
      throw new Error(JSON.stringify(validation.errors));
    }

    const { age, height, weight, sex, activityLevel, weightGoal } = userData;

    const bmr = calculateBMR(weight, height, age, sex);
    const tdee = calculateTDEE(bmr, activityLevel);
    const calorieTarget = calculateCalorieTarget(tdee, weightGoal);
    const macros = calculateMacros(calorieTarget, weightGoal);
    const proteinTarget = calculateProteinTarget(weight, weightGoal);

    return {
      success: true,
      bmr: Math.round(bmr),
      tdee,
      calorieTarget,
      proteinTarget,
      macros,
      deficit: weightGoal === 'lose' ? 400 : 0,
      surplus: weightGoal === 'gain' ? 300 : 0,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      bmr: null,
      tdee: null,
      calorieTarget: null,
      proteinTarget: null,
      macros: null,
    };
  }
};

// Convert units
export const convertUnits = (value, from, to) => {
  const conversions = {
    'cm-to-inch': (v) => (v / 2.54).toFixed(1),
    'inch-to-cm': (v) => (v * 2.54).toFixed(1),
    'kg-to-lbs': (v) => (v * 2.20462).toFixed(1),
    'lbs-to-kg': (v) => (v / 2.20462).toFixed(1),
  };

  const key = `${from}-to-${to}`;
  return conversions[key] ? conversions[key](value) : value;
};
