import { Wave } from '../components/scrolly/Wave';

export default function Progress() {
  return (
    <div className="w-full overflow-hidden">
      <section className="bg-pink-soft pt-28 pb-8 px-6 text-center">
        <h1 className="text-5xl md:text-6xl text-pink-ink text-shadow-soft mb-3">My Progress</h1>
        <p className="text-pink-ink/80 text-lg">Visualise your journey and track your achievements</p>
      </section>
      <Wave from="pink" to="green" />
      <section className="bg-green-soft py-16 px-6 min-h-[50vh] flex items-center justify-center">
        <div className="rounded-3xl p-10 shadow-card text-center max-w-md"
          style={{ background: 'oklch(0.99 0 0 / 15%)', border: '1px solid oklch(0.99 0 0 / 20%)' }}>
          <div className="text-6xl mb-4">📈</div>
          <h2 className="text-3xl font-display text-foreground text-shadow-soft mb-3">Coming Soon</h2>
          <p className="text-foreground/90">Visualise your progress over time with beautiful charts and insights!</p>
        </div>
      </section>
      <Wave from="green" to="pink" />
      <footer className="bg-pink-soft pt-10 pb-12 px-6 text-center">
        <p className="text-pink-ink/60 text-xs">© {new Date().getFullYear()} Body Like Tea 🍵</p>
      </footer>
    </div>
  );
}
