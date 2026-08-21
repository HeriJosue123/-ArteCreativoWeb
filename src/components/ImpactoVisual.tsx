import { motion } from "framer-motion";

export const ImpactoVisual = () => {
  return (
    <section className="relative min-h-[100dvh] snap-start w-full flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Feel */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/crochet-snoopy.jpg')" }}
      >
        <div className="absolute inset-0 bg-brand-dark/70"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-editorial text-5xl md:text-7xl text-brand-white leading-none"
        >
          Donde las ideas <br/>
          <span className="text-brand-red italic text-6xl md:text-8xl mt-2 block">toman forma</span>
        </motion.h2>
      </div>
    </section>
  );
};

