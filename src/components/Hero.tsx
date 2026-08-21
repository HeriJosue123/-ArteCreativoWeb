import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/60 to-brand-dark"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand-red uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6"
        >
          El arte de crear
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-artistic text-6xl md:text-8xl lg:text-9xl font-bold text-brand-white mb-8 tracking-tight leading-none"
        >
          ARTE <br className="md:hidden" /> CREATIVO
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

