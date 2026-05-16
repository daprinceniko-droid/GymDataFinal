---
name: Body Like Tea - Architecture Decision Log
description: Key decisions and setup choices for the fitness calculator project
type: feedback
---

# Architecture Decisions

## Project Setup
- **State Management**: Context API with UserDataContext (lightweight for this project scope)
- **Routing**: React Router v6 with nested routes planned for future expansion
- **Styling**: Tailwind CSS with extended custom theme — brand colors defined in tailwind.config.js
- **Charts**: Recharts chosen for animated visualizations (production-quality React charts, good for case study)
- **Animations**: Framer Motion for scroll effects and component animations

## Code Organization
- Separated concerns: Components organized by category (ui, charts, layout, illustrations)
- Custom hooks for reusable logic (scroll detection, animations, storage)
- Dedicated utilities files for calculations (keeps logic separate from components)
- Index files in each directory for cleaner imports

## Calculation Approach
- All formulas implemented in `utils/calculations.js` (Mifflin-St Jeor for BMR)
- Metric inputs (cm, kg) as default; conversion utilities ready for imperial
- Functions return rounded integers for display
- Kept macro splits and multipliers as constants for easy adjustment

## Why This Approach
- **Context + hooks over Redux**: Project scope doesn't require Redux; Context is simpler
- **Tailwind extended config over CSS modules**: Faster styling, matches design system perfectly
- **Custom hooks not libraries**: useAnimatedNumber, useScrollProgress are lightweight and project-specific
- **Recharts over custom SVG**: Production-grade charts; easier to implement advanced features like animations
