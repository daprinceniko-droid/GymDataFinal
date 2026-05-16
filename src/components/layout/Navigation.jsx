import { Link, useLocation } from 'react-router-dom';

/**
 * Navigation Component - Top website navigation bar with accessibility support
 * Features: Keyboard navigation, ARIA labels, focus indicators
 */
export const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/calculate', label: 'Calculator' },
    { path: '/breakdown', label: 'How It Works' },
  ];

  const accountItems = [
    { path: '/profile', label: 'Me' },
    { path: '/journal', label: 'Journal' },
    { path: '/progress', label: 'Progress' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md-soft"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-darkTeal font-secondary hover:text-pink-300 transition focus:outline-none focus:ring-2 focus:ring-pink-300 rounded px-2"
          aria-label="Body Like Tea - Home"
        >
          Body Like Tea ☕
        </Link>

        {/* Main Navigation Links */}
        <div className="hidden md:flex gap-8 items-center flex-1 ml-8">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`font-semibold transition focus:outline-none focus:ring-2 focus:ring-pink-300 rounded px-2 py-1 ${
                isActive(path)
                  ? 'text-pink-300'
                  : 'text-darkTeal hover:text-pink-300'
              }`}
              aria-current={isActive(path) ? 'page' : undefined}
              aria-label={label}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right side: Account links */}
        <div className="flex gap-4 md:gap-6 items-center">
          {accountItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`font-semibold text-sm transition focus:outline-none focus:ring-2 focus:ring-pink-300 rounded px-2 py-1 ${
                isActive(path)
                  ? 'text-pink-300'
                  : 'text-darkTeal hover:text-pink-300 opacity-60'
              }`}
              aria-current={isActive(path) ? 'page' : undefined}
              aria-label={label}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};




