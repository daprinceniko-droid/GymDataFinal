import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ResultPanel } from './ResultPanel';
import { Wave } from './Wave';

function chickenBreasts(p) { return +(p / 54).toFixed(1); }
function pastaBowls(c) { return +(c / 75).toFixed(1); }
function avocados(f) { return +(f / 22).toFixed(1); }
function peanutButterSpoons(f) { return Math.round(f / 8); }
function starbucksLattes(cal) { return +(cal / 250).toFixed(1); }
function burritos(cal) { return +(cal / 700).toFixed(1); }

function StatCard({ label, value, unit, emoji }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl p-7 shadow-card overflow-hidden"
      style={{ background: 'oklch(0.99 0 0 / 20%)', backdropFilter: 'blur(8px)', border: '1px solid oklch(0.99 0 0 / 30%)' }}
    >
      <p className="font-display mb-2 text-foreground">{label}</p>
      <p className="text-5xl md:text-6xl font-display text-foreground text-shadow-soft">{value}</p>
      <p className="text-foreground/90 text-sm mt-2">{unit}</p>
      {emoji && (
        <div className="absolute top-5 right-6 text-5xl opacity-90" aria-hidden>{emoji}</div>
      )}
    </motion.div>
  );
}

export function ResultsScrolly({ targets, goalLabel, activityLabel, onRecalculate }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="w-full">
      {/* Intro */}
      <ResultPanel
        bg="pink"
        title={<span className="text-pink-ink">Awesome! 🎉</span>}
        description={
          <span className="text-pink-ink">
            If you want to <span className="font-display">"{goalLabel}"</span> while being{' '}
            <span className="font-display">"{activityLabel}"</span> active,
            <br /> your diet should look like this.
          </span>
        }
        emoji="🍵"
      />

      <Wave from="pink" to="green" />

      {/* Stat cards */}
      <section className="bg-green-soft py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          <StatCard label="Daily Calorie Target" value={targets.calories.toLocaleString()} unit="kcal per day" emoji="🔥" />
          <StatCard label="Protein Target" value={`${targets.protein}g`} unit="grams per day" emoji="💪" />
          <StatCard label="Carbohydrates" value={`${targets.carbs}g`} unit="grams per day" emoji="🍝" />
          <StatCard label="Healthy Fats" value={`${targets.fats}g`} unit="grams per day" emoji="🥑" />
        </div>
      </section>

      <Wave from="green" to="pink" />

      {/* Protein */}
      <ResultPanel
        bg="pink"
        title={
          <span className="text-pink-ink">
            You should eat at least<br />
            <span className="text-pink-deep">{targets.protein}g of protein</span> every day!
          </span>
        }
        emoji="🍗"
        footer={<span className="text-pink-ink">That's roughly {chickenBreasts(targets.protein)} chicken breasts!</span>}
      />

      <Wave from="pink" to="green" />

      {/* Carbs */}
      <ResultPanel
        bg="green"
        title={
          <>
            No more than{' '}
            <span className="text-pink-deep" style={{ background: 'oklch(0.99 0 0 / 30%)', padding: '0 12px', borderRadius: '1rem' }}>
              {targets.carbs}g of carbs
            </span>
          </>
        }
        emoji="🍝☕"
        footer={`That's like ${pastaBowls(targets.carbs)} bowls of pasta + a caramel latte`}
      />

      <Wave from="green" to="pink" />

      {/* Fats */}
      <ResultPanel
        bg="pink"
        title={
          <span className="text-pink-ink">
            Don't forget healthy fats!<br />
            You need around <span className="text-pink-deep">{targets.fats}g of fats</span>
          </span>
        }
        emoji="🥑🥜"
        footer={
          <span className="text-pink-ink">
            About {avocados(targets.fats)} avocados — or {peanutButterSpoons(targets.fats)} tbsp of peanut butter 🥜
          </span>
        }
      />

      <Wave from="pink" to="green" />

      {/* Final */}
      <section className="bg-green-soft flex flex-col items-center justify-center px-6 py-20 text-center" style={{ minHeight: '100vh' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl text-foreground text-shadow-soft leading-tight"
        >
          As long as you eat around<br />
          <span className="text-pink-deep" style={{ background: 'oklch(0.99 0 0 / 25%)', padding: '0 16px', borderRadius: '1rem' }}>
            {targets.calories.toLocaleString()} kcal
          </span>{' '}per day,
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl mt-8 font-display text-foreground text-shadow-soft"
        >
          your body will be tea! 🍵
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-foreground mt-10 max-w-md"
        >
          That's about <strong>{starbucksLattes(targets.calories)}</strong> caramel macchiatos 🥤,{' '}
          <strong>{burritos(targets.calories)}</strong> Chipotle bowls 🌯, or honestly — a really balanced day of real food.
        </motion.p>

        {onRecalculate && (
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRecalculate}
            className="mt-12 bg-gradient-pill shadow-pill font-display text-xl px-10 py-4 rounded-3xl text-foreground"
          >
            Recalculate ✨
          </motion.button>
        )}
      </section>
    </div>
  );
}
