import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export const Intro = () => {
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Lock scroll during intro
    document.body.style.overflow = "hidden";
    
    // Hide the intro after the animation sequence (approx 1.8s)
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
    }, 1800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
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
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#121212] overflow-hidden"
        >
          {/* Red flash / line effect */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="absolute top-1/2 left-0 w-full h-[2px] bg-brand-red -translate-y-1/2 origin-left"
          />

          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="overflow-hidden flex flex-col md:flex-row items-center md:items-end gap-0 md:gap-3">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="font-sans-modern text-4xl md:text-7xl font-semibold text-brand-white tracking-widest leading-none"
              >
                ARTE
              </motion.span>
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
                className="font-editorial italic text-6xl md:text-8xl text-brand-red leading-none font-medium"
              >
                Creativo
              </motion.span>
            </div>
            
            <motion.div className="overflow-hidden mt-6 md:mt-4">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
                className="font-sans-modern block text-brand-neutral/60 text-[10px] md:text-xs uppercase tracking-[0.6em] font-medium"
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
