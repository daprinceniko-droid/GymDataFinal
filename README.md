# Body Like Tea ☕ - Nutrition Calculator

A professional, modern fitness and nutrition calculator web application built with React, Vite, and Tailwind CSS. Calculate personalized nutrition targets using the Mifflin-St Jeor formula with beautiful data visualization.

![React](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-4.3.0-purple) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-teal)

## 🎯 Features

- **Personalized Calculations**: Uses the scientifically-backed Mifflin-St Jeor formula
- **Comprehensive Nutrition Data**: BMR, TDEE, macro recommendations (protein, carbs, fats)
- **Goal-Based Targeting**: Supports weight loss, maintenance, and weight gain goals
- **Multiple Activity Levels**: Light, moderate, and high activity multipliers
- **Metric & Imperial Units**: Support for both cm/kg and inches/lbs
- **Data Persistence**: Automatic localStorage saving of user data and results
- **Route Protection**: Prevents unauthorized access to results without calculations
- **Professional Design**: Beautiful pink/mint color scheme with frosted glass effects
- **Accessibility**: Full ARIA labels, keyboard navigation, focus indicators
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/daprinceniko-droid/gymdatafinal.git
cd body-like-tea

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── charts/              # Data visualization (Recharts)
│   ├── illustrations/       # SVG illustrations
│   ├── layout/              # Navigation, Footer, Wrappers
│   ├── ui/                  # Reusable UI components
│   └── LoadingScreen.jsx    # Initial app loading animation
├── pages/
│   ├── Landing.jsx          # Hero landing page
│   ├── Calculator.jsx       # User input form with validation
│   ├── ResultsTransition.jsx # Loading animation
│   ├── Results.jsx          # Results display
│   ├── Breakdown.jsx        # Calculation methodology
│   ├── Profile.jsx          # Profile (coming soon)
│   ├── Journal.jsx          # Food journal (coming soon)
│   └── Progress.jsx         # Progress tracking (coming soon)
├── context/
│   └── UserDataContext.jsx  # Global state with localStorage
├── hooks/
│   ├── useUserData.js       # State management
│   └── useAnimation.js      # Animation utilities
├── utils/
│   ├── calculations.js      # Nutrition calculation logic
│   └── formatters.js        # Number formatting
├── data/
│   ├── activityLevels.js    # Activity definitions
│   └── foodEquivalents.js   # Food reference data
└── App.jsx                  # Main app component
```

## 🧮 Calculation Methodology

### BMR (Basal Metabolic Rate)
Uses the Mifflin-St Jeor formula:
- **Men**: (10 × weight) + (6.25 × height) - (5 × age) + 5
- **Women**: (10 × weight) + (6.25 × height) - (5 × age) - 161

### TDEE (Total Daily Energy Expenditure)
`BMR × Activity Multiplier`

| Activity Level | Multiplier |
|----------------|-----------|
| Light (sedentary) | 1.375 |
| Moderate (3-4x/week) | 1.55 |
| High (daily/intense) | 1.725 |

### Calorie Target
- **Weight Loss**: TDEE - 400 kcal
- **Maintenance**: TDEE
- **Weight Gain**: TDEE + 300 kcal

### Macro Distribution
| Goal | Protein | Carbs | Fats |
|------|---------|-------|------|
| Lose | 35% | 35% | 30% |
| Maintain | 30% | 45% | 25% |
| Gain | 30% | 50% | 20% |

## 🏗️ Technology Stack

- **React 18.2.0** - UI framework
- **Vite 4.3.0** - Build tool
- **Tailwind CSS 3.3.0** - Styling
- **React Router v6** - Routing
- **Recharts 2.8.0** - Data visualization
- **Framer Motion 10.16.0** - Animations

## 🎨 Design System

### Colors
- **Primary Pink**: `#F8D7DA`, `#FADBD8`
- **Secondary Mint**: `#A8E6CF`, `#88D8B0`
- **Accent Teal**: `#1a4d5e`

### Fonts
- **Headings**: Quicksand
- **Body**: Nunito

### Key Components
- **FrostedCard**: Glass effect component
- **WaveDivider**: Smooth color transitions
- **Input**: Custom validation states

## 🔐 Architecture Features

### State Management
- React Context API
- Automatic localStorage persistence
- Survives page refreshes

### Route Protection
- Results page requires calculation
- Automatic redirect on unauthorized access

### Validation
- Comprehensive input validation
- Real-time error clearing
- Edge case handling

### Accessibility
- Full ARIA labels
- Keyboard navigation
- Focus indicators
- Screen reader optimized

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📊 User Flow

```
Landing Page
    ↓
Calculator (Form)
    ↓
Results Transition (Loading)
    ↓
Results (Display)
    ↓
Breakdown (Education)
```

## 🔄 Data Flow

```
User Input (Calculator)
    ↓
Validation
    ↓
Calculation (Mifflin-St Jeor)
    ↓
localStorage Persist
    ↓
Context Update
    ↓
Display Results
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Netlify
```bash
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

## 🧪 Testing Setup

```bash
npm install --save-dev jest @testing-library/react
npm test
npm test -- --coverage
```

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Submit pull request

## 📝 License

MIT License - See LICENSE file

## 👤 Author

**Nikolai Spek** - University Project 2026
**Stefan Iliev** - University Project 2026

## 🙏 Acknowledgments

- Mifflin-St Jeor Formula
- International Society of Sports Nutrition
- Academy of Nutrition and Dietetics

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
