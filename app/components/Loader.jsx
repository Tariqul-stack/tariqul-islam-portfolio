'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-[var(--bg-primary)] flex flex-col items-center justify-center transition-colors duration-300"
        >
          {/* Logo */}
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold bg-gradient-to-r from-teal to-indigo bg-clip-text text-transparent mb-8"
          >
            TI
          </motion.h1>

          {/* Loading Bar Container */}
          <div className="glass-card w-48 h-1 overflow-hidden p-0">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="w-full h-full bg-[#2dd4bf]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
