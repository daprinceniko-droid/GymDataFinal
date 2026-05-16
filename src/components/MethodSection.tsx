export function MethodSection() {
  return (
    <section className="bg-green-soft py-20 px-6">
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

function MethodCard({
  emoji,
  step,
  description,
  formula,
}: {
  emoji: string;
  step: string;
  description: string;
  formula: string;
}) {
  return (
    <div className="rounded-3xl bg-foreground/15 backdrop-blur-sm border border-foreground/20 p-6 md:p-8 shadow-card">
      <h3 className="text-2xl md:text-3xl text-foreground text-shadow-soft mb-3 flex items-center gap-3">
        <span aria-hidden>{emoji}</span> {step}
      </h3>
      <p className="text-foreground/90 mb-4">{description}</p>
      <code className="block bg-foreground/10 rounded-xl px-4 py-3 text-foreground/95 text-sm font-mono">
        {formula}
      </code>
    </div>
  );
}
