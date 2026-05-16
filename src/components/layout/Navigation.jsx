import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/calculate', label: 'Calculate' },
    { path: '/breakdown', label: 'How It Works' },
  ];

  const accountItems = [
    { path: '/journal', label: '📔 Journal' },
    { path: '/progress', label: '📈 Progress' },
    { path: '/profile', label: '🧸 Me' },
  ];

  const linkClass = (path) =>
    `font-display text-sm transition-all duration-200 rounded-2xl px-3 py-1.5 ${
      isActive(path)
        ? 'bg-gradient-pill shadow-pill text-foreground'
        : 'text-pink-ink hover:bg-white/40'
    }`;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        background: 'oklch(0.89 0.05 15 / 85%)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid oklch(0.99 0 0 / 20%)',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display text-xl text-pink-ink text-shadow-soft hover:scale-105 transition-transform">
          Body Like Tea 🍵
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-2 items-center flex-1 ml-8">
          {navItems.map(({ path, label }) => (
            <Link key={path} to={path} className={linkClass(path)} aria-current={isActive(path) ? 'page' : undefined}>
              {label}
            </Link>
          ))}
        </div>

        {/* Account links (desktop) */}
        <div className="hidden md:flex gap-2 items-center">
          {accountItems.map(({ path, label }) => (
            <Link key={path} to={path} className={linkClass(path)} aria-current={isActive(path) ? 'page' : undefined}>
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-pink-ink text-2xl p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-4 flex flex-col gap-2" style={{ background: 'oklch(0.89 0.05 15 / 95%)' }}>
          {[...navItems, ...accountItems].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`${linkClass(path)} text-base py-2`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
