/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy palette (keeping for backwards compatibility)
        pink: {
          50: '#FFF5F7',
          100: '#FFE4E8',
          200: '#F8D7DA',
          300: '#FADBD8',
          400: '#F5A8B3',
          500: '#F08FA0',
        },
        mint: {
          50: '#F0FAF6',
          100: '#D9F0E6',
          200: '#A8E6CF',
          300: '#88D8B0',
          400: '#5AC89C',
          500: '#4CAD85',
        },
        cream: '#FFE4B5',
        darkTeal: '#2D5F5F',

        // New OKLCH color palette
        'pink-soft': 'var(--pink-soft)',
        'pink-deep': 'var(--pink-deep)',
        'pink-ink': 'var(--pink-ink)',
        'green-soft': 'var(--green-soft)',
        'green-deep': 'var(--green-deep)',
        'cream-light': 'var(--cream)',
        'foreground': 'var(--foreground)',
      },
      fontFamily: {
        primary: ["'Nunito'", 'sans-serif'],
        secondary: ["'Quicksand'", 'sans-serif'],
        display: ["'Fredoka'", 'sans-serif'],
      },
      borderRadius: {
        'xl': '24px',
        '2xl': '32px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0,0,0,0.08)',
        'md-soft': '0 4px 12px rgba(0,0,0,0.1)',
        'lg-soft': '0 8px 24px rgba(0,0,0,0.12)',
        'pill': '0 4px 16px rgba(248, 215, 218, 0.3)',
        'card': '0 2px 12px rgba(0,0,0,0.08)',
      },
      backgroundImage: {
        'gradient-tea': 'linear-gradient(135deg, #F8D7DA 0%, #A8E6CF 100%)',
        'gradient-wave': 'linear-gradient(to right, #F8D7DA 0%, #A8E6CF 100%)',
        'gradient-pill': 'linear-gradient(135deg, #FFB6C1 0%, #FFD700 100%)',
      },
      animation: {
        'wave': 'wave 3s ease-in-out infinite',
      },
      keyframes: {
        'wave': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}


