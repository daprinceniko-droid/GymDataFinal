/**
 * BotanicalElements Component - Decorative leaf and plant elements
 */
export const BotanicalElements = ({ position = 'top', count = 3 }) => {
  const leafElements = Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 80 + 10,
    y: Math.random() * 30 + (position === 'top' ? 5 : 50),
    size: Math.random() * 20 + 15,
    rotation: Math.random() * 360,
  }));

  return (
    <div
      className={`botanical-elements absolute inset-0 pointer-events-none ${
        position === 'top' ? 'top-0' : 'bottom-0'
      }`}
      aria-hidden="true"
    >
      <svg className="w-full h-full opacity-60" viewBox="0 0 400 200">
        {leafElements.map((leaf) => (
          <g key={leaf.id} transform={`translate(${leaf.x}%, ${leaf.y}%)`}>
            {/* Simple leaf shape */}
            <ellipse
              cx="0"
              cy="0"
              rx={leaf.size / 2}
              ry={leaf.size}
              fill="#88D8B0"
              transform={`rotate(${leaf.rotation})`}
            />
            <line
              x1="0"
              y1={-leaf.size}
              x2="0"
              y2={leaf.size}
              stroke="#5AC89C"
              strokeWidth="0.5"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

