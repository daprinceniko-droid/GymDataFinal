import { useEffect, useRef, useState } from 'react';

const ITEM_HEIGHT = 48;
const VISIBLE = 5;

export function ScrollPicker({ label, value, onChange, min, max, suffix }) {
  const ref = useRef(null);
  const items = Array.from({ length: max - min + 1 }, (_, i) => min + i);
  const [scrolling, setScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    if (!ref.current || scrolling) return;
    const idx = value - min;
    ref.current.scrollTo({ top: idx * ITEM_HEIGHT, behavior: 'smooth' });
  }, [value, min, scrolling]);

  const handleScroll = () => {
    if (!ref.current) return;
    setScrolling(true);
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      if (!ref.current) return;
      const idx = Math.round(ref.current.scrollTop / ITEM_HEIGHT);
      const next = Math.max(min, Math.min(max, min + idx));
      ref.current.scrollTo({ top: (next - min) * ITEM_HEIGHT, behavior: 'smooth' });
      onChange(next);
      setScrolling(false);
    }, 120);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-pink-ink font-display text-sm mb-2 tracking-wide uppercase">
        {label}
      </div>
      <div
        className="relative w-full max-w-[140px] rounded-[28px] overflow-hidden"
        style={{
          height: ITEM_HEIGHT * VISIBLE,
          background: 'var(--cream)',
          boxShadow:
            'inset 0 2px 6px oklch(0 0 0 / 10%), inset 0 -2px 6px oklch(1 0 0 / 60%), 0 8px 18px -8px oklch(0.4 0.1 12 / 25%)',
        }}
      >
        {/* center highlight bar */}
        <div
          className="pointer-events-none absolute left-2 right-2 top-1/2 -translate-y-1/2 rounded-2xl bg-gradient-pill shadow-pill z-10"
          style={{ height: ITEM_HEIGHT }}
        />
        {/* gradient fades */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 z-20"
          style={{ background: 'linear-gradient(to bottom, var(--cream), transparent)' }} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 z-20"
          style={{ background: 'linear-gradient(to top, var(--cream), transparent)' }} />

        <div
          ref={ref}
          onScroll={handleScroll}
          className="h-full overflow-y-auto relative z-30 scrollbar-hide"
          style={{
            scrollSnapType: 'y mandatory',
            paddingTop: ITEM_HEIGHT * Math.floor(VISIBLE / 2),
            paddingBottom: ITEM_HEIGHT * Math.floor(VISIBLE / 2),
          }}
          tabIndex={0}
          role="spinbutton"
          aria-label={label}
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp') { e.preventDefault(); onChange(Math.max(min, value - 1)); }
            else if (e.key === 'ArrowDown') { e.preventDefault(); onChange(Math.min(max, value + 1)); }
          }}
        >
          {items.map((n) => {
            const distance = Math.abs(n - value);
            const isActive = n === value;
            return (
              <button
                type="button"
                key={n}
                onClick={() => onChange(n)}
                className={`flex items-center justify-center w-full font-display transition-all duration-200 ${
                  isActive
                    ? 'text-foreground text-3xl font-bold drop-shadow'
                    : distance === 1
                    ? 'text-pink-ink/70 text-xl'
                    : 'text-pink-ink/35 text-lg'
                }`}
                style={{ height: ITEM_HEIGHT, scrollSnapAlign: 'center' }}
              >
                {n}
              </button>
            );
          })}
        </div>
      </div>
      {suffix && (
        <div className="mt-2 font-display text-sm" style={{ color: 'var(--pink-ink)', opacity: 0.8 }}>{suffix}</div>
      )}
    </div>
  );
}
