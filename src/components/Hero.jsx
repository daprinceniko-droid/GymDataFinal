import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wave } from "./Wave";

/**
 * Hero component - Main landing page hero section
 * @param {Object} props
 * @param {Function} props.onScrollDown - Callback when scroll down button is clicked
 */
export function Hero({ onScrollDown }) {
  return (
    <section className="relative flex flex-col items-center justify-start bg-pink-soft overflow-hidden">
      <div className="relative w-full max-w-2xl mx-auto pt-8 px-6 text-center">
        <motion.img
          src="/src/assets/character.png"
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
          className="absolute left-1/2 -translate-x-1/2 bottom-10 md:bottom-16 text-5xl md:text-7xl font-display font-bold text-pink-ink text-shadow-soft whitespace-nowrap"
        >
          Body Like Tea
        </motion.h1>
      </div>

      {/* Wave overlaps the bottom of the illustration to crop cleanly */}
      <div className="relative w-full -mt-16 md:-mt-24 z-10">
        <Wave from="pink" to="green" />
      </div>

      <div className="bg-green-soft w-full flex flex-col items-center justify-center pt-4 pb-16 px-6 text-center">
        <Link to="/calculate">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-200 to-pink-300 hover:from-pink-300 hover:to-pink-400 text-white font-display font-bold text-2xl md:text-3xl px-12 md:px-14 py-3 md:py-4 rounded-full shadow-pill transition"
          >
            Calculate
          </motion.button>
        </Link>
        <p className="mt-4 font-display text-pink-ink text-shadow-soft text-lg">
          Free, Personal &amp; Informative
        </p>

        {/* Feature trio cards */}
        <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-12 max-w-2xl w-full">
          <FeatureCard emoji="🥗" title="Personalized Nutrition Targets" />
          <FeatureCard emoji="📊" title="Visual & Easy to understand" />
          <FeatureCard emoji="🧸" title="No fluff, only the info you really need" />
        </div>
      </div>
    </section>
  );
}

/**
 * FeatureCard component - Individual feature card
 * @param {Object} props
 * @param {string} props.emoji - Emoji to display
 * @param {string} props.title - Card title text
 */
function FeatureCard({ emoji, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-pink-soft rounded-2xl p-4 shadow-card flex flex-col items-center text-center"
    >
      <div className="text-4xl mb-2">{emoji}</div>
      <p className="text-pink-ink text-xs sm:text-sm font-display font-semibold leading-tight">{title}</p>
    </motion.div>
  );
}
