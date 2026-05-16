import { motion } from 'framer-motion';
import { useUserData } from '../hooks/useUserData';
import { PageWrapper, WavySection, WaveDivider, FrostedCard } from '../components/layout';
import { ScrollSection } from '../components/layout';
import { Link } from 'react-router-dom';
import { MacroDonut } from '../components/charts/MacroDonut';
import { AnimatedValue } from '../components/AnimatedValue';
import { Wave } from '../components/Wave';
import { SiteFooter } from '../components/SiteFooter';

export default function Results() {
  const { results, userData } = useUserData();

  // Animation variants for entrance effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  if (!results || !userData) {
    return (
      <PageWrapper className="bg-gradient-to-b from-pink-100 to-mint-100">
        <ScrollSection>
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-darkTeal mb-8 text-center font-secondary">
              No Results Yet
            </h1>

            <FrostedCard variant="light" className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-darkTeal mb-4 font-secondary">
                Calculate First
              </h2>
              <p className="text-darkTeal text-opacity-90 mb-6">
                Please fill out the calculator form to see your personalized nutrition targets
              </p>
              <Link
                to="/calculate"
                className="inline-block bg-pink-300 hover:bg-pink-400 text-white font-bold py-2 px-6 rounded-full transition"
              >
                Go to Calculator
              </Link>
            </FrostedCard>
          </div>
        </ScrollSection>
      </PageWrapper>
    );
  }

  return (
    <div className="w-full overflow-hidden">
      {/* PINK HERO SECTION */}
      <div className="bg-pink-soft pt-24 pb-8 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-pink-ink mb-3 font-display drop-shadow-lg">
            Your Results
          </h1>
          <p className="text-pink-ink/90">
            Your personalized nutrition targets calculated just for you
          </p>
        </div>
      </div>

      {/* Wave transition */}
      <Wave from="pink" to="green" />

      {/* GREEN CONTENT SECTION */}
      <div className="bg-gradient-to-b from-green-soft to-green-deep px-4 py-12 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Main Stats Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Daily Calories - Large Card */}
            <motion.div variants={itemVariants} whileHover="hover">
              <FrostedCard variant="light" className="md:col-span-2" animate={{ scale: 1 }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-pink-ink/70 mb-2 font-semibold">Daily Calorie Target</p>
                    <div className="text-6xl font-bold text-pink-ink drop-shadow-lg">
                      <AnimatedValue value={results.calorieTarget} duration={1200} suffix=" " />
                    </div>
                    <p className="text-pink-ink/80 mt-2">kcal per day</p>
                  </div>
                  <div className="text-8xl opacity-30">🔥</div>
                </div>
              </FrostedCard>
            </motion.div>

            {/* Protein */}
            <motion.div variants={itemVariants} whileHover="hover">
              <FrostedCard variant="light">
                <div className="text-center">
                  <p className="text-pink-ink/70 mb-3 font-semibold">Protein Target</p>
                  <div className="text-5xl font-bold text-pink-ink drop-shadow-lg">
                    <AnimatedValue value={results.proteinTarget} duration={1200} suffix="g" />
                  </div>
                  <p className="text-pink-ink/80 mt-2 text-sm">grams per day</p>
                </div>
              </FrostedCard>
            </motion.div>

            {/* Carbs */}
            <motion.div variants={itemVariants} whileHover="hover">
              <FrostedCard variant="light">
                <div className="text-center">
                  <p className="text-pink-ink/70 mb-3 font-semibold">Carbohydrates</p>
                  <div className="text-5xl font-bold text-pink-ink drop-shadow-lg">
                    <AnimatedValue value={results.macros.carbs} duration={1200} suffix="g" />
                  </div>
                  <p className="text-pink-ink/80 mt-2 text-sm">grams per day</p>
                </div>
              </FrostedCard>
            </motion.div>

            {/* Fats */}
            <motion.div variants={itemVariants} whileHover="hover">
              <FrostedCard variant="light">
                <div className="text-center">
                  <p className="text-pink-ink/70 mb-3 font-semibold">Healthy Fats</p>
                  <div className="text-5xl font-bold text-pink-ink drop-shadow-lg">
                    <AnimatedValue value={results.macros.fats} duration={1200} suffix="g" />
                  </div>
                  <p className="text-pink-ink/80 mt-2 text-sm">grams per day</p>
                </div>
              </FrostedCard>
            </motion.div>
          </motion.div>

          {/* Detailed Breakdown */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
            <FrostedCard variant="light" className="mb-8">
              <h3 className="text-3xl font-bold text-pink-ink mb-6 font-display drop-shadow-lg">
                Calorie Breakdown
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-pink-ink border-opacity-20">
                  <span className="font-semibold text-pink-ink">Basal Metabolic Rate (BMR)</span>
                  <span className="text-2xl font-bold text-pink-ink drop-shadow-lg">
                    <AnimatedValue value={results.bmr} duration={1200} suffix=" kcal" />
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-pink-ink border-opacity-20">
                  <span className="font-semibold text-pink-ink">Total Daily Energy (TDEE)</span>
                  <span className="text-2xl font-bold text-pink-ink drop-shadow-lg">
                    <AnimatedValue value={results.tdee} duration={1200} suffix=" kcal" />
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-pink-ink">Your Daily Target</span>
                  <span className="text-3xl font-bold text-pink-ink drop-shadow-lg">
                    <AnimatedValue value={results.calorieTarget} duration={1200} suffix=" kcal" />
                  </span>
                </div>
              </div>
            </FrostedCard>
          </motion.div>

          {/* Macro Donut Chart */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }}>
            <FrostedCard variant="light" className="mb-8">
              <h3 className="text-3xl font-bold text-pink-ink mb-6 font-display drop-shadow-lg">
                Macro Distribution
              </h3>
              <MacroDonut
                macroData={results.macros.breakdown}
                totalCalories={results.calorieTarget}
              />
            </FrostedCard>
          </motion.div>

          {/* Macro Details */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6, staggerChildren: 0.1 }}
          >
            {/* Protein Details */}
            <motion.div variants={itemVariants} whileHover="hover">
              <FrostedCard variant="light">
                <h4 className="text-2xl font-bold text-pink-ink mb-4 font-display">🥩 Protein</h4>
                <div className="space-y-2">
                  <p className="text-pink-ink/90">
                    <span className="font-semibold">
                      <AnimatedValue value={results.macros.protein} duration={1200} suffix="g" />
                    </span> per day
                  </p>
                  <p className="text-pink-ink/70 text-sm">
                    <AnimatedValue value={results.macros.breakdown.proteinCals} duration={1200} suffix=" calories" />
                  </p>
                </div>
              </FrostedCard>
            </motion.div>

            {/* Carbs Details */}
            <motion.div variants={itemVariants} whileHover="hover">
              <FrostedCard variant="light">
                <h4 className="text-2xl font-bold text-pink-ink mb-4 font-display">🍝 Carbs</h4>
                <div className="space-y-2">
                  <p className="text-pink-ink/90">
                    <span className="font-semibold">
                      <AnimatedValue value={results.macros.carbs} duration={1200} suffix="g" />
                    </span> per day
                  </p>
                  <p className="text-pink-ink/70 text-sm">
                    <AnimatedValue value={results.macros.breakdown.carbsCals} duration={1200} suffix=" calories" />
                  </p>
                </div>
              </FrostedCard>
            </motion.div>

            {/* Fats Details */}
            <motion.div variants={itemVariants} whileHover="hover">
              <FrostedCard variant="light">
                <h4 className="text-2xl font-bold text-pink-ink mb-4 font-display">🧈 Fats</h4>
                <div className="space-y-2">
                  <p className="text-pink-ink/90">
                    <span className="font-semibold">
                      <AnimatedValue value={results.macros.fats} duration={1200} suffix="g" />
                    </span> per day
                  </p>
                  <p className="text-pink-ink/70 text-sm">
                    <AnimatedValue value={results.macros.breakdown.fatsCals} duration={1200} suffix=" calories" />
                  </p>
                </div>
              </FrostedCard>
            </motion.div>
          </motion.div>

          {/* Info Box */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.8 }}>
            <FrostedCard variant="dark" className="mb-8">
              <p className="text-pink-ink">
                💡 <strong className="text-pink-deep">Pro Tip:</strong> These are your targets for optimal nutrition.
                Try to hit these macros consistently for the best results. Stay hydrated and get enough sleep too!
              </p>
            </FrostedCard>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
          >
            <Link
              to="/breakdown"
              className="inline-block bg-pink-soft hover:bg-pink-100 text-pink-ink font-bold py-3 px-8 rounded-full transition transform hover:scale-105 shadow-card text-center"
            >
              Learn How We Calculated 📚
            </Link>
            <Link
              to="/calculate"
              className="inline-block bg-pink-200 hover:bg-pink-300 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 shadow-card text-center"
            >
              Calculate Again
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Wave at bottom */}
      <Wave from="green" to="pink" />

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
