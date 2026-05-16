/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'pink-soft':  'var(--pink-soft)',
        'pink-deep':  'var(--pink-deep)',
        'pink-ink':   'var(--pink-ink)',
        'green-soft': 'var(--green-soft)',
        'green-deep': 'var(--green-deep)',
        cream: 'var(--cream)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        // Legacy gymdata colours for compat
        darkTeal: '#2D5F5F',
      },
      fontFamily: {
        display: ["'Fredoka'", "'Quicksand'", 'system-ui', 'sans-serif'],
        sans:    ["'Quicksand'",  'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        pill: 'var(--shadow-pill)',
        card: 'var(--shadow-card)',
      },
    },
  },
  plugins: [],
}
