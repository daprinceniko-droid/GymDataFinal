/**
 * Character Component - Main illustrated character
 * Shows woman with long black hair, pink tank top, botanical leaf elements
 */
export const Character = ({ expression = 'happy', pose = 'thumbsup' }) => {
  return (
    <div
      className="character inline-block"
      aria-label="Friendly fitness advisor character"
    >
      <svg
        width="200"
        height="280"
        viewBox="0 0 200 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Hair */}
        <ellipse cx="100" cy="60" rx="45" ry="50" fill="#1a1a1a" />

        {/* Head */}
        <circle cx="100" cy="80" r="35" fill="#F4A460" />

        {/* Eyes based on expression */}
        {expression === 'happy' && (
          <>
            <circle cx="90" cy="75" r="3" fill="#1a1a1a" />
            <circle cx="110" cy="75" r="3" fill="#1a1a1a" />
            {/* Smile curves */}
            <path d="M 90 85 Q 100 90 110 85" stroke="#1a1a1a" strokeWidth="2" />
          </>
        )}

        {/* Torso - Pink Tank Top */}
        <rect x="75" y="115" width="50" height="70" rx="8" fill="#EC7063" />

        {/* Arm with thumbs up */}
        {pose === 'thumbsup' && (
          <>
            {/* Left arm */}
            <rect x="50" y="125" width="25" height="15" rx="7" fill="#F4A460" />
            {/* Right arm - thumbs up */}
            <rect x="125" y="130" width="20" height="50" rx="10" fill="#F4A460" />
            <circle cx="140" cy="125" r="12" fill="#F4A460" />
          </>
        )}

        {/* Botanical elements around the character */}
        <g opacity="0.9">
          {/* Leaf 1 - top left */}
          <ellipse cx="30" cy="50" rx="15" ry="8" fill="#88D8B0" transform="rotate(-30 30 50)" />
          {/* Leaf 2 - top right */}
          <ellipse cx="170" cy="60" rx="15" ry="8" fill="#88D8B0" transform="rotate(30 170 60)" />
          {/* Leaf 3 - bottom left */}
          <ellipse cx="40" cy="200" rx="12" ry="6" fill="#A8E6CF" transform="rotate(-20 40 200)" />
        </g>
      </svg>
    </div>
  );
};

