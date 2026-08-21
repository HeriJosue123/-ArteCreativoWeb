import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative h-[100dvh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/pixel-walle.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/40 via-[#121212]/60 to-[#121212]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans-modern text-brand-red uppercase tracking-[0.4em] text-[10px] md:text-sm font-semibold mb-4"
        >
          El arte de crear
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center md:items-end gap-1 md:gap-4 mb-6 leading-none"
        >
          <span className="font-sans-modern text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-semibold text-brand-white tracking-widest leading-none">ARTE</span>
          <span className="font-editorial italic text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] text-brand-white leading-none font-medium">Creativo</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-brand-neutral/80 text-lg md:text-xl max-w-2xl mx-auto font-light"
        >
          Transformamos ideas en obras maestras. Desde lienzos y tote bags hasta crochet y pixel art.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-brand-white/50 text-xs uppercase tracking-widest">Descubrir</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-brand-red" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

