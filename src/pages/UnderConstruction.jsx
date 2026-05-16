import { Link } from 'react-router-dom';

export default function UnderConstruction({ pageName }) {
  return (
    <main className="min-h-screen bg-pink-soft text-center px-6 py-24 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full rounded-[2rem] border border-pink-ink/15 bg-white/85 p-10 shadow-card backdrop-blur-xl">
        <h1 className="text-5xl md:text-6xl text-pink-ink font-display mb-4">{pageName} is under construction</h1>
        <p className="text-foreground/80 text-lg md:text-xl mb-8">
          We are working on this section — check back soon for more features.
        </p>
        <Link
          to="/calculate"
          className="inline-flex items-center justify-center rounded-full bg-gradient-pill px-8 py-4 text-lg font-display text-foreground shadow-pill hover:scale-105 transition-transform"
        >
          Back to Calculator
        </Link>
      </div>
    </main>
  );
}
