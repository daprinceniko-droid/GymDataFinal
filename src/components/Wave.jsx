/**
 * Wave component - Soft organic wave divider between two sections
 * @param {Object} props
 * @param {'pink' | 'green'} props.from - Color of the section ABOVE the wave
 * @param {'pink' | 'green'} props.to - Color of the section BELOW the wave
 * @param {string} [props.className] - Additional CSS classes
 */
export function Wave({ from, to, className = "" }) {
  const COLORS = {
    pink: "oklch(0.89 0.05 15)",
    green: "oklch(0.84 0.09 155)",
  };

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
