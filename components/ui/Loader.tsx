"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 1800;
    const interval = 20;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const eased = Math.round((1 - Math.pow(1 - current / steps, 3)) * 100);
      setProgress(Math.min(eased, 100));

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 900);
        }, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="mb-10 relative w-16 h-16"
          >
            <Image src="/draaksh-logo.png" alt="Draaksh" fill className="object-contain" />
          </motion.div>

          {/* Progress bar track */}
          <div className="w-48 h-px bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-[#5e2eea]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.02 }}
            />
            {/* Glow on fill */}
            <motion.div
              className="absolute inset-y-0 left-0 bg-[#7b4fff] blur-sm"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.02 }}
            />
          </div>

          {/* Counter */}
          <motion.span
            className="mt-4 font-mono text-xs text-white/30 tracking-widest"
          >
            {String(progress).padStart(3, "0")}
          </motion.span>

          {/* Event name */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 font-grotesk text-[10px] tracking-[0.3em] text-white/30 uppercase"
          >
            Draaksh TechQuest 2026
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
