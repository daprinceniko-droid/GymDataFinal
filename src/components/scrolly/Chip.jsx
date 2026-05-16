export function Chip({ active, onClick, children, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`font-display text-lg px-6 py-2.5 rounded-2xl transition-all duration-200 ${
        active
          ? 'bg-gradient-pill shadow-pill text-foreground scale-105'
          : 'bg-white/40 text-pink-ink hover:bg-white/60'
      } ${className}`}
    >
      {children}
    </button>
  );
}
