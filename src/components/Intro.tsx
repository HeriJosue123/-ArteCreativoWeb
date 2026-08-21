import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export const Intro = () => {
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Hide the intro after the animation sequence (approx 1.5 - 2s)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800); // slightly longer to allow fade out to finish

    return () => clearTimeout(timer);
  }, []);

  if (shouldReduceMotion) {
    return null; // Don't show intro if user prefers reduced motion
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark overflow-hidden pointer-events-none"
        >
          {/* Red flash / line effect */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="absolute top-1/2 left-0 w-full h-[2px] bg-brand-red -translate-y-1/2 origin-left"
          />

          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="overflow-hidden flex flex-col md:flex-row items-center md:items-end gap-2 md:gap-4">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-bold text-brand-white tracking-tight leading-none"
              >
                ARTE
              </motion.span>
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
                className="font-artistic text-5xl md:text-7xl text-brand-red leading-none"
              >
                CREATIVO
              </motion.span>
            </div>
            
            <motion.div className="overflow-hidden mt-4">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
                className="block text-brand-neutral/60 text-xs md:text-sm uppercase tracking-[0.4em] font-medium"
              >
                Hecho a mano
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
