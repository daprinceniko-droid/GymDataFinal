const ACTIVITY_MULT = { light: 1.375, moderate: 1.55, high: 1.725 };
const GOAL_DELTA    = { lose: -400,  maintain: 0,    gain: 300 };

export function calculate({ gender, age, heightCm, weightKg, activity, goal }) {
  const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + (gender === 'male' ? 5 : -161);
  const tdee = bmr * ACTIVITY_MULT[activity];
  const calories = Math.max(1200, Math.round(tdee + GOAL_DELTA[goal]));
  const protein = Math.round((calories * 0.30) / 4);
  const carbs   = Math.round((calories * 0.35) / 4);
  const fats    = Math.round((calories * 0.35) / 9);
  return { bmr: Math.round(bmr), tdee: Math.round(tdee), calories, protein, carbs, fats };
}
