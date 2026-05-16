interface WaveProps {
  /** Color of the section ABOVE the wave */
  from: "pink" | "green";
  /** Color of the section BELOW the wave */
  to: "pink" | "green";
  className?: string;
}

const COLORS = {
  pink: "var(--pink-soft)",
  green: "var(--green-soft)",
};

/**
 * Soft organic wave divider between two sections.
 * Top half is the `from` color, bottom curve is the `to` color — so it
 * looks like the next section is gently rising into the previous one.
 */
export function Wave({ from, to, className = "" }: WaveProps) {
  return (
    <div
      className={`relative block w-full overflow-hidden leading-[0] ${className}`}
      style={{ background: COLORS[from] }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[80px] md:h-[120px] w-[110%] -ml-[5%] animate-wave"
      >
        <path
          d="M0,64 C240,120 480,0 720,40 C960,80 1200,120 1440,56 L1440,120 L0,120 Z"
          fill={COLORS[to]}
        />
      </svg>
    </div>
  );
}
