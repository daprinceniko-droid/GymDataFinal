export type Gender = "female" | "male";
export type Activity = "light" | "moderate" | "high";
export type Goal = "lose" | "maintain" | "gain";

export interface Inputs {
  gender: Gender;
  age: number;
  heightCm: number;
  weightKg: number;
  activity: Activity;
  goal: Goal;
}

export interface Targets {
  bmr: number;
  tdee: number;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

const ACTIVITY_MULT: Record<Activity, number> = {
  light: 1.375,
  moderate: 1.55,
  high: 1.725,
};

const GOAL_DELTA: Record<Goal, number> = {
  lose: -400,
  maintain: 0,
  gain: 300,
};

export function calculate(i: Inputs): Targets {
  const bmr =
    10 * i.weightKg + 6.25 * i.heightCm - 5 * i.age + (i.gender === "male" ? 5 : -161);
  const tdee = bmr * ACTIVITY_MULT[i.activity];
  const calories = Math.max(1200, Math.round(tdee + GOAL_DELTA[i.goal]));

  // Macro split: 30% protein, 35% carbs, 35% fats by calories
  const protein = Math.round((calories * 0.3) / 4);
  const carbs = Math.round((calories * 0.35) / 4);
  const fats = Math.round((calories * 0.35) / 9);

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    calories,
    protein,
    carbs,
    fats,
  };
}

// Fun food equivalents — gymgirly favorites
export function chickenBreasts(proteinG: number) {
  // ~54g protein per large chicken breast (200g cooked)
  return +(proteinG / 54).toFixed(1);
}
export function pastaBowls(carbsG: number) {
  // ~75g carbs per bowl of cooked pasta
  return +(carbsG / 75).toFixed(1);
}
export function avocados(fatsG: number) {
  // ~22g fat per medium avocado
  return +(fatsG / 22).toFixed(1);
}
export function peanutButterSpoons(fatsG: number) {
  // ~8g fat per tablespoon of peanut butter
  return Math.round(fatsG / 8);
}
export function starbucksLattes(calories: number) {
  // grande caramel macchiato ~ 250 kcal
  return +(calories / 250).toFixed(1);
}
export function broccoliCups(carbsG: number) {
  // ~6g carbs per cup
  return Math.round(carbsG / 6);
}
export function burritos(calories: number) {
  // chipotle bowl ~ 700 kcal
  return +(calories / 700).toFixed(1);
}
