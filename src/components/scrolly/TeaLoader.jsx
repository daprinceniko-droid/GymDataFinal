import { motion, AnimatePresence } from 'framer-motion';

export function TeaLoader({ message = 'Steeping your numbers…' }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-pink-soft"
    >
      <div className="relative">
        <span className="absolute left-1/2 -translate-x-[18px] -top-6 block w-3 h-3 rounded-full bg-white/60 animate-steam" style={{ animationDelay: '0s' }} />
        <span className="absolute left-1/2 translate-x-0 -top-6 block w-3 h-3 rounded-full bg-white/60 animate-steam" style={{ animationDelay: '0.4s' }} />
        <span className="absolute left-1/2 translate-x-[12px] -top-6 block w-3 h-3 rounded-full bg-white/60 animate-steam" style={{ animationDelay: '0.8s' }} />
        <div className="text-7xl animate-tea-bounce" aria-hidden>🍵</div>
      </div>
      <p className="mt-8 font-display text-2xl text-pink-ink text-shadow-soft">{message}</p>
    </motion.div>
  );
}
