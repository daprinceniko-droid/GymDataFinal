import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wave } from '../components/scrolly/Wave';
import { ScrollPicker } from '../components/scrolly/ScrollPicker';
import { Chip } from '../components/scrolly/Chip';
import { TeaLoader } from '../components/scrolly/TeaLoader';
import { ResultsScrolly } from '../components/scrolly/ResultsScrolly';
import { calculate } from '../utils/calorie';
import { Link } from 'react-router-dom';

export default function Calculator() {
  const [gender, setGender]     = useState('female');
  const [age, setAge]           = useState(22);
  const [heightCm, setHeightCm] = useState(160);
  const [weightKg, setWeightKg] = useState(58);
  const [activity, setActivity] = useState('moderate');
  const [goal, setGoal]         = useState('lose');
  const [targets, setTargets]   = useState(null);
  const [meta, setMeta]         = useState(null);
  const [loading, setLoading]   = useState(false);

  const handleCalculate = () => {
    setLoading(true);
    setTimeout(() => {
      const t = calculate({ gender, age, heightCm, weightKg, activity, goal });
      const goalLabel     = goal === 'lose' ? 'Lose Weight' : goal === 'gain' ? 'Gain Weight' : 'Maintain';
      const activityLabel = activity === 'light' ? 'Lightly' : activity === 'high' ? 'Highly' : 'Moderately';
      setTargets(t);
      setMeta({ goalLabel, activityLabel });
      setLoading(false);
    }, 1200);
  };

  const handleRecalculate = () => {
    setTargets(null);
    setMeta(null);
    window.scrollTo({ top: 0 });
  };

  return (
    <main className="min-h-screen">
      <AnimatePresence>{loading && <TeaLoader />}</AnimatePresence>

      {!targets && (
        <>
          {/* Pink header */}
          <section className="bg-pink-soft pt-24 pb-8 px-6 text-center">
            <Link to="/" className="text-pink-ink font-display underline-offset-4 hover:underline">
              ← Back home
            </Link>
            <h1 className="mt-4 text-4xl md:text-5xl text-pink-ink text-shadow-soft">
              Tell us about you
            </h1>
          </section>

          <Wave from="pink" to="green" />

          {/* Form (green) */}
          <section className="bg-green-soft">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-2xl mx-auto px-6 py-12 text-center"
            >
              {/* Stats */}
              <h2 className="text-3xl mb-2 text-shadow-soft text-foreground">Your Stats</h2>
              <p className="text-foreground/90 mb-6">Scroll the wheels (or tap a number) to set your stats</p>
              <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-10 place-items-center">
                <ScrollPicker label="Age"    value={age}      onChange={setAge}      min={14} max={90} />
                <ScrollPicker label="Height" value={heightCm} onChange={setHeightCm} min={120} max={220} suffix="cm" />
                <ScrollPicker label="Weight" value={weightKg} onChange={setWeightKg} min={35}  max={200} suffix="kg" />
              </div>

              {/* Gender */}
              <h2 className="text-3xl mb-2 text-shadow-soft text-foreground">Gender</h2>
              <p className="text-foreground/90 mb-5">For the most accurate BMR calculation</p>
              <div className="flex justify-center gap-3 mb-10">
                <Chip active={gender === 'female'} onClick={() => setGender('female')}>Female</Chip>
                <Chip active={gender === 'male'}   onClick={() => setGender('male')}>Male</Chip>
              </div>

              {/* Activity */}
              <h2 className="text-3xl mb-2 text-shadow-soft text-foreground">Activity Level</h2>
              <p className="text-foreground/90 mb-5">Estimate your typical daily activity — this defines your calories</p>
              <div className="flex justify-center gap-3 mb-10 flex-wrap">
                <Chip active={activity === 'light'}    onClick={() => setActivity('light')}>Light</Chip>
                <Chip active={activity === 'moderate'} onClick={() => setActivity('moderate')}>Moderate</Chip>
                <Chip active={activity === 'high'}     onClick={() => setActivity('high')}>High</Chip>
              </div>

              {/* Goal */}
              <h2 className="text-3xl mb-2 text-shadow-soft text-foreground">Weight Goal</h2>
              <p className="text-foreground/90 mb-5">Define your objective for the coming period</p>
              <div className="flex justify-center gap-3 mb-12 flex-wrap">
                <Chip active={goal === 'lose'}     onClick={() => setGoal('lose')}>Lose</Chip>
                <Chip active={goal === 'maintain'} onClick={() => setGoal('maintain')}>Maintain</Chip>
                <Chip active={goal === 'gain'}     onClick={() => setGoal('gain')}>Gain</Chip>
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCalculate}
                className="bg-gradient-pill shadow-pill font-display text-3xl px-12 py-4 rounded-3xl text-foreground"
              >
                Calculate ✨
              </motion.button>
            </motion.div>
          </section>

          <Wave from="green" to="pink" />
          <footer className="bg-pink-soft pt-10 pb-12 px-6 text-center">
            <p className="font-display text-pink-ink text-lg">🍵 Body Like Tea</p>
            <p className="text-pink-ink/60 text-xs mt-3">© {new Date().getFullYear()} Body Like Tea</p>
          </footer>
        </>
      )}

      <AnimatePresence>
        {targets && meta && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ResultsScrolly
              targets={targets}
              goalLabel={meta.goalLabel}
              activityLabel={meta.activityLabel}
              onRecalculate={handleRecalculate}
            />
            <footer className="bg-green-soft pt-6 pb-12 px-6 text-center">
              <p className="text-foreground/60 text-xs">© {new Date().getFullYear()} Body Like Tea 🍵</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
