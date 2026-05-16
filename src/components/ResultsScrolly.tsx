import { motion } from "framer-motion";
import { useEffect } from "react";
import type { Targets } from "@/lib/calorie";
import {
  avocados,
  burritos,
  chickenBreasts,
  pastaBowls,
  peanutButterSpoons,
  starbucksLattes,
} from "@/lib/calorie";
import { ResultPanel } from "./ResultPanel";
import { Wave } from "./Wave";
import heroImg from "@/assets/hero-tea.png";

interface ResultsScrollyProps {
  targets: Targets;
  goalLabel: string;
  activityLabel: string;
}

export function ResultsScrolly({ targets, goalLabel, activityLabel }: ResultsScrollyProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="w-full">
      {/* Intro — pink */}
      <ResultPanel
        bg="pink"
        title={<span className="text-pink-ink">Awesome!</span>}
        description={
          <span className="text-pink-ink">
            If you want to <span className="font-display">"{goalLabel}"</span> while being{" "}
            <span className="font-display">"{activityLabel}"</span> active,
            <br /> your diet should look like this.
          </span>
        }
        image={{ src: heroImg, alt: "Illustrated tea character celebrating" }}
      />

      <Wave from="pink" to="green" />

      {/* Stat overview cards — green */}
      <section className="bg-green-soft py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          <StatCard
            label="Daily Calorie Target"
            value={targets.calories.toLocaleString()}
            unit="kcal per day"
            emoji="🔥"
          />
          <StatCard label="Protein Target" value={`${targets.protein}g`} unit="grams per day" emoji="💪" />
          <StatCard label="Carbohydrates" value={`${targets.carbs}g`} unit="grams per day" emoji="🍝" />
          <StatCard label="Healthy Fats" value={`${targets.fats}g`} unit="grams per day" emoji="🥑" />
        </div>
      </section>

      <Wave from="green" to="pink" />

      {/* Protein — pink */}
      <ResultPanel
        bg="pink"
        title={
          <span className="text-pink-ink">
            You should at least eat
            <br />
            <span className="text-pink-deep">{targets.protein}g of protein</span> every day!
          </span>
        }
        emoji="🍗"
        footer={
          <span className="text-pink-ink">
            That's roughly {chickenBreasts(targets.protein)} chicken breasts!
          </span>
        }
      />

      <Wave from="pink" to="green" />

      {/* Carbs — green */}
      <ResultPanel
        bg="green"
        title={
          <>
            You should be getting no more
            <br />
            than{" "}
            <span className="text-pink-deep bg-foreground/30 px-3 rounded-2xl">
              {targets.carbs}g of carbs
            </span>
          </>
        }
        emoji="🍝☕"
        footer={`That's like ${pastaBowls(targets.carbs)} bowls of pasta + a caramel latte`}
      />

      <Wave from="green" to="pink" />

      {/* Fats — pink */}
      <ResultPanel
        bg="pink"
        title={
          <span className="text-pink-ink">
            Don't forget your healthy fats!
            <br />
            You need around <span className="text-pink-deep">{targets.fats}g of fats</span>
          </span>
        }
        emoji="🥑🥜"
        footer={
          <span className="text-pink-ink">
            That's about {avocados(targets.fats)} avocados — or {peanutButterSpoons(targets.fats)} tbsp of peanut butter 🥜
          </span>
        }
      />

      <Wave from="pink" to="green" />

      {/* Final reveal — green */}
      <section className="bg-green-soft min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl text-foreground text-shadow-soft leading-tight"
        >
          As long as you eat around
          <br />
          <span className="text-pink-deep bg-foreground/25 px-4 rounded-2xl">
            {targets.calories.toLocaleString()} kcal
          </span>{" "}
          per day,
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
          That's about <strong>{starbucksLattes(targets.calories)}</strong> caramel macchiatos 🥤,{" "}
          <strong>{burritos(targets.calories)}</strong> Chipotle bowls 🌯, or honestly — a really
          balanced day of real food.
        </motion.p>
      </section>
    </div>
  );
}

function StatCard({
  label,
  value,
  unit,
  emoji,
}: {
  label: string;
  value: string;
  unit: string;
  emoji?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl bg-foreground/20 backdrop-blur-sm border border-foreground/30 p-7 shadow-card overflow-hidden"
    >
      <p className="text-foreground font-display mb-2">{label}</p>
      <p className="text-5xl md:text-6xl font-display text-foreground text-shadow-soft">{value}</p>
      <p className="text-foreground/90 text-sm mt-2">{unit}</p>
      {emoji && (
        <div className="absolute top-5 right-6 text-5xl opacity-90" aria-hidden>
          {emoji}
        </div>
      )}
    </motion.div>
  );
}
