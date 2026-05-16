/**
 * Formatting utilities for displaying data
 */

export const formatNumber = (num) => {
  return Number(num).toLocaleString('en-US', { maximumFractionDigits: 0 });
};

export const formatCalories = (cal) => {
  return `${formatNumber(cal)} kcal`;
};

export const formatGrams = (g) => {
  return `${formatNumber(g)}g`;
};

export const formatPercentage = (decimal) => {
  return `${Math.round(decimal * 100)}%`;
};

export const formatMacroBreakdown = (macros) => {
  return {
    protein: `${formatNumber(macros.protein)}g`,
    carbs: `${formatNumber(macros.carbs)}g`,
    fats: `${formatNumber(macros.fats)}g`,
  };
};

// Convert food equivalent
export const calculateFoodEquivalent = (grams, foodItemGrams) => {
  return Math.round(grams / foodItemGrams);
};
