import { motion } from "framer-motion";

export function MethodSection() {
  return (
    <section className="bg-green-soft py-16 md:py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-center text-pink-ink font-display font-bold text-shadow-soft mb-12"
        >
          How we calculate it
        </motion.h2>
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
            description="We multiply your BMR by your activity level multiplier to get your Total Daily Energy Expenditure (TDEE)."
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
  );
}

/**
 * MethodCard component - Individual method step card
 * @param {Object} props
 * @param {string} props.emoji - Emoji for the step
 * @param {string} props.step - Step title
 * @param {string} props.description - Step description
 * @param {string} props.formula - Formula or calculation
 */
function MethodCard({ emoji, step, description, formula }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-3xl bg-pink-ink/10 backdrop-blur-sm border border-pink-ink/20 p-6 md:p-8 shadow-card hover:shadow-md-soft transition"
    >
      <h3 className="text-2xl md:text-3xl text-pink-ink font-display font-bold text-shadow-soft mb-3 flex items-center gap-3">
        <span aria-hidden>{emoji}</span> {step}
      </h3>
      <p className="text-pink-ink/90 mb-4">{description}</p>
      <code className="block bg-pink-ink/10 rounded-xl px-4 py-3 text-pink-ink/95 text-sm font-mono">
        {formula}
      </code>
    </motion.div>
  );
}
