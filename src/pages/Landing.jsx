import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wave } from '../components/scrolly/Wave';
import heroImg from '../assets/hero-tea.png';

function FeatureCard({ emoji, title }) {
  return (
    <div className="rounded-2xl p-4 shadow-card flex flex-col items-center text-center bg-pink-soft">
      <div className="text-4xl mb-2">{emoji}</div>
      <p className="text-pink-ink text-xs sm:text-sm font-display leading-tight">{title}</p>
    </div>
  );
}

function MethodCard({ emoji, step, description, formula }) {
  return (
    <div
      className="rounded-3xl p-6 md:p-8 shadow-card"
      style={{ background: 'oklch(0.99 0 0 / 15%)', backdropFilter: 'blur(8px)', border: '1px solid oklch(0.99 0 0 / 20%)' }}
    >
      <h3 className="text-2xl md:text-3xl text-foreground text-shadow-soft mb-3 flex items-center gap-3">
        <span aria-hidden>{emoji}</span> {step}
      </h3>
      <p className="text-foreground/90 mb-4">{description}</p>
      <code
        className="block rounded-xl px-4 py-3 text-foreground/95 text-sm font-mono"
        style={{ background: 'oklch(0.99 0 0 / 10%)' }}
      >
        {formula}
      </code>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="w-full overflow-hidden">
      {/* ── Hero (pink) ── */}
      <section className="relative flex flex-col items-center justify-start bg-pink-soft overflow-hidden">
        <div className="relative w-full max-w-2xl mx-auto pt-8 px-6 text-center">
          <motion.img
            src={heroImg}
            alt="Smiling woman sipping tea"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-auto drop-shadow-xl"
          />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-10 md:bottom-16 text-5xl md:text-7xl text-pink-ink text-shadow-soft whitespace-nowrap"
          >
            Body Like Tea
          </motion.h1>
        </div>

        <div className="relative w-full -mt-16 md:-mt-24 z-10">
          <Wave from="pink" to="green" />
        </div>

        <div className="bg-green-soft w-full flex flex-col items-center pt-4 pb-16 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              to="/calculate"
              className="inline-block bg-gradient-pill shadow-pill font-display text-3xl px-14 py-4 rounded-3xl text-foreground hover:scale-105 transition-transform"
            >
              Calculate
            </Link>
          </motion.div>
          <p className="mt-4 font-display text-shadow-soft text-foreground">Free, Personal &amp; Informative</p>

          <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-12 max-w-2xl w-full">
            <FeatureCard emoji="🥗" title="Personalized Nutrition Targets" />
            <FeatureCard emoji="📊" title="Visual & Easy to understand" />
            <FeatureCard emoji="🧸" title="No fluff, only the info you really need" />
          </div>
        </div>
      </section>

      {/* ── How we calculate it (green) ── */}
      <Wave from="green" to="pink" />
      <section className="bg-pink-soft py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center text-foreground text-shadow-soft mb-12">
            How we calculate it
          </h2>
          <div className="space-y-5">
            <MethodCard
              emoji="📊"
              step="Step 1: Your BMR"
              description="We use the Mifflin-St Jeor formula to calculate your Basal Metabolic Rate (BMR) — the calories you burn at rest."
              formula="10 × weight(kg) + 6.25 × height(cm) − 5 × age + (5 males, −161 females)"
            />
            <MethodCard
              emoji="🏃‍♀️"
              step="Step 2: Your TDEE"
              description="We multiply your BMR by your activity level multiplier to get your Total Daily Energy Expenditure."
              formula="BMR × Activity Multiplier (Light: 1.375 | Moderate: 1.55 | High: 1.725)"
            />
            <MethodCard
              emoji="🎯"
              step="Step 3: Your Calorie Target"
              description="Based on your goal, we adjust your TDEE to create a deficit (lose), surplus (gain), or maintenance."
              formula="Lose: TDEE − 400 | Maintain: TDEE | Gain: TDEE + 300"
            />
          </div>
        </div>
      </section>

      <Wave from="pink" to="green" />

      {/* ── Footer ── */}
      <footer className="bg-green-soft pt-10 pb-12 px-6 text-center">
        <div className="text-4xl mb-3" aria-hidden>🍵</div>
        <p className="font-display text-foreground text-lg">Body Like Tea</p>
        <p className="text-foreground/80 text-sm mt-2 max-w-md mx-auto">
          Made with love for gym girlies. Numbers are estimates — listen to your body, eat the snacks, lift the weights.
        </p>
        <p className="text-foreground/60 text-xs mt-5">© {new Date().getFullYear()} Body Like Tea</p>
      </footer>
    </div>
  );
}
