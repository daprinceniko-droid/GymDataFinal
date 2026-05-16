---
name: Body Like Tea - Project Overview
description: Fitness & nutrition calculator web app with data visualization focus for university case study
type: project
---

# Body Like Tea - Project Structure & Progress

## Project Goal
Build a fully responsive fitness and nutrition calculator web app with focus on **data visualization and visual storytelling with health data**. Active university project.

## Design System
- **Colors**: Soft pink (#F8D7DA, #FADBD8), mint green (#A8E6CF, #88D8B0), white
- **Fonts**: Nunito (primary), Quicksand (secondary)
- **Borders**: Soft rounded corners (16-24px)
- **Tone**: Warm, encouraging, conversational

## Core Pages
1. **Landing** (/) - Hero with character, features, CTA
2. **Calculator** (/calculate) - Form inputs (age, height, weight, sex, activity, goal)
3. **Results** (/results) - THE KEY PAGE with data visualizations
4. **Breakdown** (/breakdown) - Detailed calculation explanations
5. **Profile, Journal, Progress** - Future features (placeholders ready)

## Key Formulas Implemented
- **BMR**: Mifflin-St Jeor formula
- **TDEE**: BMR × activity multiplier
- **Calorie Target**: TDEE ± deficit/surplus
- **Protein/Macro Targets**: Based on weight × multiplier for goal

## Data Visualizations (Ready to Build)
1. **Macro Donut Chart** - Animated protein/carbs/fats breakdown with center calorie display
2. **Comparison Bars** - User vs RDA, average, athletic standards
3. **Macro Breakdown Waterfall** - BMR → TDEE → Target flow
4. **Food Equivalents** - Visual representations and quantity counters
5. **Protein Spectrum Bar** - Shows where user falls on 0.8→2.2g/kg spectrum

## Tech Stack
- React 18 + Vite
- React Router for navigation
- Tailwind CSS (with custom brand palette)
- Recharts for data visualizations
- Framer Motion for animations
- Custom hooks for scroll/animation/state management

## Folder Structure
```
src/
├── components/
│   ├── ui/ (Button, Card, Input, Toggle, ProgressBar)
│   ├── charts/ (MacroDonut, ComparisonBar, MacroBreakdown, FoodVisualization)
│   ├── layout/ (Navigation, PageWrapper, ScrollSection)
│   └── illustrations/ (Character, BotanicalElements, FoodItems)
├── pages/ (Landing, Calculator, Results, Breakdown, Profile, Journal, Progress)
├── hooks/ (useAnimation, useUserData, useScrollProgress, useAnimatedNumber, useInView)
├── utils/ (calculations.js, formatters.js)
├── data/ (activityLevels.js, foodEquivalents.js)
├── context/ (UserDataContext - global state)
├── styles/ (theme.js - color palette)
├── App.jsx (Router setup)
└── main.jsx
```

## Status: PHASE 1 COMPLETE ✅
All file structure and utilities ready. Next: Start building Calculator form.
