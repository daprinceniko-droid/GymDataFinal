import { motion } from 'framer-motion';

export function ResultPanel({ bg, kicker, title, description, image, emoji, footer, children }) {
  const bgClass = bg === 'pink' ? 'bg-pink-soft' : 'bg-green-soft';

  return (
    <section
      className={`relative ${bgClass} flex flex-col items-center justify-center overflow-hidden`}
      style={{ minHeight: '100vh' }}
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-6 py-20 w-full">
        {kicker && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="font-display text-lg md:text-xl mb-3 text-shadow-soft text-foreground"
          >
            {kicker}
          </motion.p>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-3xl md:text-5xl leading-tight text-shadow-soft text-foreground"
        >
          {title}
        </motion.h2>

        {description && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground mt-4 text-lg md:text-xl max-w-xl"
          >
            {description}
          </motion.div>
        )}

        {image && (
          <motion.img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.3, type: 'spring', bounce: 0.35 }}
            className="my-8 w-56 md:w-72 h-auto drop-shadow-2xl"
          />
        )}

        {emoji && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.3, type: 'spring', bounce: 0.45 }}
            className="my-8 text-[6rem] md:text-[9rem] leading-none drop-shadow-xl"
            aria-hidden="true"
          >
            {emoji}
          </motion.div>
        )}

        {children}

        {footer && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-foreground text-lg md:text-xl mt-2 text-shadow-soft font-display"
          >
            {footer}
          </motion.p>
        )}
      </div>
    </section>
  );
}
