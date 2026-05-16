import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ResultsTransition() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds, navigate at 3 seconds
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
    const navigateTimer = setTimeout(() => navigate('/results'), 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className={`w-full h-screen bg-gradient-to-b from-pink-soft via-pink-100 to-green-soft flex flex-col items-center justify-center px-4 transition-opacity duration-500 overflow-hidden ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Character Image */}
      <motion.div className="mb-6 flex justify-center" variants={itemVariants}>
        <motion.img
          src="/src/assets/character2.png"
          alt="Calculating"
          className="w-56 h-auto drop-shadow-2xl"
          variants={floatVariants}
          animate="animate"
        />
      </motion.div>

      {/* Loading Spinner */}
      <motion.div className="mb-6 flex justify-center" variants={itemVariants}>
        <div className="relative w-12 h-12">
          <motion.div
            className="absolute inset-0 rounded-full border-3 border-pink-200 border-opacity-30"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, linear: true }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-3 border-transparent border-t-white border-r-white"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, linear: true }}
          />
        </div>
      </motion.div>

      {/* Message Bubble */}
      <motion.div
        className="max-w-sm bg-white rounded-3xl px-6 py-4 shadow-xl drop-shadow-lg"
        variants={itemVariants}
      >
        <p className="text-center font-semibold text-pink-deep mb-2 text-base font-display">
          Awesome!
        </p>
        <p className="text-center text-pink-ink font-medium text-sm leading-relaxed">
          We're calculating your personalized nutrition targets. This will only take a moment!
        </p>
      </motion.div>
    </motion.div>
  );
}
