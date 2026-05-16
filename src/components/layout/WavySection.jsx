/**
 * WavySection Component - Creates smooth wavy transitions between pink and mint backgrounds
 * Includes frosted glass support for content
 */
export const WavySection = ({
  children,
  background = 'pink-to-mint', // 'pink-to-mint' or 'mint-to-pink'
  className = '',
  showWave = true,
}) => {
  const bgClasses = {
    'pink-to-mint': 'from-pink-200 via-pink-100 to-mint-200',
    'mint-to-pink': 'from-mint-200 via-mint-100 to-pink-200',
  };

  return (
    <div className={`bg-gradient-to-b ${bgClasses[background]} px-4 py-16 ${className}`}>
      {children}
    </div>
  );
};

/**
 * Wavy Divider Component - SVG wave transition with smooth curves
 */
export const WaveDivider = ({ fromColor, toColor, direction = 'down' }) => {
  const isDown = direction === 'down';

  return (
    <svg
      viewBox={isDown ? '0 0 1200 200' : '0 0 1200 200'}
      preserveAspectRatio="none"
      className="w-full h-auto block"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: fromColor, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: toColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d={isDown
          ? "M0,40 C300,80 900,0 1200,40 L1200,200 L0,200 Z"
          : "M0,160 C300,120 900,200 1200,160 L1200,0 L0,0 Z"
        }
        fill="url(#waveGradient)"
      />
    </svg>
  );
};

/**
 * Frosted Glass Card Component - Uses backdrop blur for modern glass effect
 */
export const FrostedCard = ({
  children,
  className = '',
  variant = 'light', // 'light' or 'dark'
}) => {
  const variants = {
    light: 'bg-white/20 backdrop-blur-md border border-white/30',
    dark: 'bg-black/10 backdrop-blur-md border border-white/20',
  };

  return (
    <div
      className={`${variants[variant]} rounded-3xl p-6 shadow-lg-soft transition hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
};
