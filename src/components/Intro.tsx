import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const seq = [
  { text: "CREAR", img: "/images/hero-bg.jpg" },
  { text: "IMAGINAR", img: "/images/icon-dibujo.jpg" },
  { text: "TEJER", img: "/images/crochet-custom.jpg" },
  { text: "INSPIRAR", img: "/images/pixel-naruto.jpg" },
  { text: "HECHO A MANO", img: "/images/icon-pintura.jpg" }
];

export const Intro = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"words" | "ending" | "done">("words");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Cycle through words every 900ms
    const interval = setInterval(() => {
      setWordIndex(prev => {
        if (prev < seq.length - 1) return prev + 1;
        
        clearInterval(interval);
        // After reaching the last word, wait 1.4s then start ending sequence
        setTimeout(() => setPhase("ending"), 1400);
        return prev;
      });
    }, 900);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase === "ending") {
      // Allow "ARTE Creativo" to linger alone for 1.0s, then hide entire intro
      const timer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "";
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  if (shouldReduceMotion) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)", scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
        >
          {/* Fading Background Images */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="popLayout">
              {phase === "words" && (
                <motion.img
                  key={seq[wordIndex].text}
                  src={seq[wordIndex].img}
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
                  animate={{ opacity: 0.12, scale: 1, filter: "blur(8px)" }}
                  exit={{ opacity: 0, filter: "blur(12px)" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </AnimatePresence>
            {/* Dark gradient overlay to ensure text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center w-full">
            
            {/* ARTE Creativo Centerpiece */}
            <div className="overflow-hidden flex flex-col md:flex-row items-center md:items-end gap-0 md:gap-4 relative">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-sans-modern text-5xl md:text-8xl font-semibold text-brand-white tracking-[0.2em] leading-none"
              >
                ARTE
              </motion.span>
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-editorial italic text-6xl md:text-8xl text-brand-red leading-none font-medium translate-y-2 md:translate-y-0"
              >
                Creativo
              </motion.span>
            </div>
            
            {/* Very fine red detail line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: phase === "words" ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
              className="h-[1px] w-12 md:w-20 bg-brand-red/60 mt-8 mb-6 origin-center"
            />

            {/* Changing Words */}
            <div className="h-10 w-full flex flex-col items-center justify-center relative">
              <AnimatePresence mode="wait">
                {phase === "words" && (
                  <motion.div
                    key={seq[wordIndex].text}
                    initial={{ opacity: 0, y: -10, filter: "blur(2px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 10, filter: "blur(2px)" }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="font-sans-modern text-brand-white/70 text-[10px] md:text-xs uppercase tracking-[0.6em] font-medium absolute text-center w-full whitespace-nowrap"
                  >
                    {seq[wordIndex].text}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Final Tagline under HECHO A MANO */}
            <div className="h-4 mt-2 w-full flex justify-center">
              <AnimatePresence>
                {wordIndex === seq.length - 1 && phase === "words" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="font-editorial italic text-brand-red/80 text-[10px] md:text-sm tracking-[0.3em] font-light whitespace-nowrap"
                  >
                    ARTE QUE SE SIENTE
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
