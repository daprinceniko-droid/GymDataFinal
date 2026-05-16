import { motion } from 'framer-motion';
import { Wave } from '../components/scrolly/Wave';

function Card({ emoji, title, content, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="rounded-3xl p-6 md:p-8 shadow-card"
      style={{ background: 'oklch(0.99 0 0 / 15%)', backdropFilter: 'blur(8px)', border: '1px solid oklch(0.99 0 0 / 20%)' }}
    >
      <div className="text-5xl mb-4">{emoji}</div>
      <h3 className="text-2xl font-display text-foreground text-shadow-soft mb-3">{title}</h3>
      <p className="text-foreground/90 leading-relaxed">{content}</p>
    </motion.div>
  );
}

export default function Breakdown() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero */}
      <section className="bg-pink-soft pt-28 pb-8 px-6 text-center">
        <h1 className="text-5xl md:text-6xl text-pink-ink text-shadow-soft mb-3">How It Works</h1>
        <p className="text-pink-ink/80 text-lg">The science behind your calorie & macro targets</p>
      </section>

      <Wave from="pink" to="green" />

      <section className="bg-green-soft py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <Card emoji="📊" delay={0} title="Step 1 — Your BMR"
            content="We use the Mifflin-St Jeor equation — one of the most accurate formulas available — to estimate your Basal Metabolic Rate (BMR): the calories your body needs just to stay alive at rest. Formula: 10 × weight(kg) + 6.25 × height(cm) − 5 × age + (5 for males, −161 for females)." />
          <Card emoji="🏃‍♀️" delay={0.1} title="Step 2 — Your TDEE"
            content="Your Total Daily Energy Expenditure (TDEE) is your BMR multiplied by an activity factor. Light activity (walks, standing): ×1.375. Moderate (gym 3-5x/week): ×1.55. High (intense daily training): ×1.725." />
          <Card emoji="🎯" delay={0.2} title="Step 3 — Goal Adjustment"
            content="We tweak your TDEE based on your goal. Want to lose weight? We subtract 400 kcal (a moderate, sustainable deficit). Maintaining? We keep your TDEE. Gaining muscle? We add 300 kcal to fuel growth." />
          <Card emoji="🥩" delay={0.3} title="Macros — How We Split"
            content="We split your target calories across three macronutrients: 30% protein (for muscle repair and satiety), 35% carbohydrates (your main energy source), and 35% healthy fats (hormones, brain function, and absorption of fat-soluble vitamins)." />
          <Card emoji="💡" delay={0.4} title="Important Disclaimer"
            content="These are estimates based on population-average formulas. Your actual metabolism may vary. Always listen to your body, and consider working with a registered dietitian for personalised advice. This tool is for informational purposes only." />
        </div>
      </section>

      <Wave from="green" to="pink" />
      <footer className="bg-pink-soft pt-10 pb-12 px-6 text-center">
        <p className="font-display text-pink-ink text-lg">🍵 Body Like Tea</p>
        <p className="text-pink-ink/60 text-xs mt-3">© {new Date().getFullYear()} Body Like Tea</p>
      </footer>
    </div>
  );
}
