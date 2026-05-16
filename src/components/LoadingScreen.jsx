import { useEffect, useState } from 'react';

/**
 * Professional Loading Screen Component
 * Features a rotating leaf animation with modern design
 */
export const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-pink-200 via-pink-100 to-mint-200 flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Rotating Leaf Icon */}
        <div className="relative w-32 h-32 mb-12">
          {/* Outer rotating circle */}
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-white border-r-white"
            style={{ animation: 'spin 3s linear infinite' }}
          ></div>

          {/* Middle rotating circle (counter-clockwise) */}
          <div
            className="absolute inset-4 rounded-full border-2 border-transparent border-b-mint-300 border-l-pink-300"
            style={{ animation: 'spin 4s linear infinite reverse' }}
          ></div>

          {/* Leaf Icon Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce"
              style={{ animationDuration: '2s' }}
            >
              {/* Leaf shape */}
              <path
                d="M32 8C32 8 20 24 20 36C20 44.8366 25.3726 52 32 52C38.6274 52 44 44.8366 44 36C44 24 32 8 32 8Z"
                fill="#88D8B0"
                fillOpacity="0.9"
              />
              {/* Leaf vein */}
              <path
                d="M32 12V50"
                stroke="#A8E6CF"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Additional veins */}
              <path
                d="M24 28L40 40"
                stroke="#A8E6CF"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.6"
              />
              <path
                d="M40 28L24 40"
                stroke="#A8E6CF"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6 font-secondary drop-shadow-lg">
          Body Like Tea
        </h1>

        {/* Loading Text with animated dots */}
        <div className="flex items-center gap-2 mb-8">
          <p className="text-white text-opacity-90 font-medium text-lg">
            Preparing your calculation
          </p>
          <div className="flex gap-1">
            <span
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{ animationDelay: '0s' }}
            ></span>
            <span
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{ animationDelay: '0.1s' }}
            ></span>
            <span
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{ animationDelay: '0.2s' }}
            ></span>
          </div>
        </div>

        {/* Status message */}
        <p className="text-white text-opacity-75 text-sm">
          ✨ Your personalized nutrition plan awaits
        </p>
      </div>

      {/* Custom keyframes */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
};
