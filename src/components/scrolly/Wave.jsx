const COLORS = {
  pink:  'var(--pink-soft)',
  green: 'var(--green-soft)',
};

export function Wave({ from, to, className = '' }) {
  return (
    <div
      className={`relative block w-full overflow-hidden leading-[0] ${className}`}
      style={{ background: COLORS[from] }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[80px] md:h-[120px] w-[110%] -ml-[5%]"
      >
        <path
          d="M0,64 C240,120 480,0 720,40 C960,80 1200,120 1440,56 L1440,120 L0,120 Z"
          fill={COLORS[to]}
        />
      </svg>
    </div>
  );
}
