import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalculatorForm } from "@/components/CalculatorForm";
import { ResultsScrolly } from "@/components/ResultsScrolly";

import { TeaLoader } from "@/components/TeaLoader";
import { SiteFooter } from "@/components/SiteFooter";
import { Wave } from "@/components/Wave";
import { calculate, type Inputs, type Targets } from "@/lib/calorie";

export const Route = createFileRoute("/calculate")({
  head: () => ({
    meta: [
      { title: "Calculate Your Macros — Body Like Tea" },
      {
        name: "description",
        content:
          "Enter your stats and instantly get your daily calories, protein, carbs and fats — visualised in cute food equivalents.",
      },
      { property: "og:title", content: "Calculate Your Macros — Body Like Tea" },
      {
        property: "og:description",
        content:
          "Enter your stats and instantly get your daily calories, protein, carbs and fats — visualised in cute food equivalents.",
      },
    ],
  }),
  component: CalculatePage,
});

function CalculatePage() {
  const navigate = useNavigate();
  const [targets, setTargets] = useState<Targets | null>(null);
  const [meta, setMeta] = useState<{ goalLabel: string; activityLabel: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = (inputs: Inputs) => {
    setLoading(true);
    setTimeout(() => {
      const t = calculate(inputs);
      const goalLabel =
        inputs.goal === "lose" ? "Lose Weight" : inputs.goal === "gain" ? "Gain Weight" : "Maintain";
      const activityLabel =
        inputs.activity === "light"
          ? "Lightly"
          : inputs.activity === "high"
            ? "Highly"
            : "Moderately";
      setTargets(t);
      setMeta({ goalLabel, activityLabel });
      setLoading(false);
    }, 1200);
  };

  return (
    <main className="min-h-screen">
      <AnimatePresence>{loading && <TeaLoader />}</AnimatePresence>

      {!targets && (
        <>
          <section className="bg-pink-soft pt-10 pb-8 px-6 text-center">
            <button
              onClick={() => navigate({ to: "/" })}
              className="text-pink-ink font-display underline-offset-4 hover:underline"
            >
              ← Back home
            </button>
            <h1 className="mt-4 text-4xl md:text-5xl text-pink-ink text-shadow-soft">
              Tell us about you
            </h1>
          </section>
          <Wave from="pink" to="green" />
          <section className="bg-green-soft">
            <CalculatorForm onCalculate={handleCalculate} />
          </section>
          <Wave from="green" to="pink" />
          <SiteFooter />
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
            />
            <Wave from="green" to="pink" />
            <div className="bg-pink-soft pt-10 pb-4 text-center">
              <button
                onClick={() => {
                  setTargets(null);
                  setMeta(null);
                  window.scrollTo({ top: 0 });
                }}
                className="bg-gradient-pill shadow-pill text-foreground font-display text-xl px-8 py-3 rounded-2xl"
              >
                Recalculate
              </button>
            </div>
            <SiteFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
