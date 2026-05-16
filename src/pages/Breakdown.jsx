import { FrostedCard } from '../components/layout';

export default function Breakdown() {
  return (
    <div className="w-full overflow-hidden">
      {/* PINK HERO SECTION */}
      <div className="bg-pink-200 pt-24 pb-8 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 font-secondary drop-shadow-lg">
            How We Calculated Your Numbers
          </h1>
          <p className="text-white text-opacity-90">
            Understanding the science behind your personalized nutrition targets
          </p>
        </div>
      </div>

      {/* MINT CONTENT SECTION */}
      <div className="bg-gradient-to-b from-mint-200 to-mint-300 px-4 py-12 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <FrostedCard variant="light">
              <h2 className="text-2xl font-bold text-white mb-4 font-secondary">📊 Step 1: Your BMR</h2>
              <p className="text-white text-opacity-90 mb-4">
                We use the Mifflin-St Jeor formula to calculate your Basal Metabolic Rate (BMR) —
                the calories you burn at rest.
              </p>
              <p className="text-xs text-white text-opacity-80 font-mono bg-black/20 p-3 rounded-lg">
                10 × weight(kg) + 6.25 × height(cm) - 5 × age + (5 males, -161 females)
              </p>
            </FrostedCard>

            <FrostedCard variant="light">
              <h2 className="text-2xl font-bold text-white mb-4 font-secondary">🏃 Step 2: Your TDEE</h2>
              <p className="text-white text-opacity-90 mb-4">
                We multiply your BMR by your activity level multiplier to get your Total Daily Energy Expenditure (TDEE).
              </p>
              <p className="text-xs text-white text-opacity-80 font-mono bg-black/20 p-3 rounded-lg">
                BMR × Activity Multiplier (Light: 1.375 | Moderate: 1.55 | High: 1.725)
              </p>
            </FrostedCard>

            <FrostedCard variant="light">
              <h2 className="text-2xl font-bold text-white mb-4 font-secondary">🎯 Step 3: Your Calorie Target</h2>
              <p className="text-white text-opacity-90 mb-4">
                Based on your goal, we adjust your TDEE to create a deficit (lose), surplus (gain), or maintenance.
              </p>
              <p className="text-xs text-white text-opacity-80 font-mono bg-black/20 p-3 rounded-lg">
                Lose: TDEE - 400 | Maintain: TDEE | Gain: TDEE + 300
              </p>
            </FrostedCard>

            <FrostedCard variant="light">
              <h2 className="text-2xl font-bold text-white mb-4 font-secondary">🥗 Step 4: Your Macros</h2>
              <p className="text-white text-opacity-90 mb-4">
                We split your calorie target into protein, carbs, and fat based on sports nutrition science.
              </p>
              <p className="text-xs text-white text-opacity-80 font-mono bg-black/20 p-3 rounded-lg">
                Science-backed percentages differ by goal to optimize your results
              </p>
            </FrostedCard>

            <FrostedCard variant="dark" className="mt-8">
              <h3 className="font-bold text-white mb-4 font-secondary text-lg">📚 Scientific Sources</h3>
              <ul className="text-sm text-white text-opacity-90 space-y-2">
                <li>• Mifflin, M. D., et al. (1990). A new predictive equation for resting energy expenditure in healthy individuals.</li>
                <li>• International Society of Sports Nutrition (ISSN) protein recommendations</li>
                <li>• Academy of Nutrition and Dietetics nutrition guidelines</li>
              </ul>
            </FrostedCard>
          </div>
        </div>
      </div>
    </div>
  );
}
