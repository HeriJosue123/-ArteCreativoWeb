import { motion } from "framer-motion";

export const ImpactoVisual = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Feel */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=2000&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-brand-dark/70"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-artistic text-4xl md:text-6xl text-brand-white leading-tight"
        >
          Donde las ideas <br/>
          <span className="text-brand-red italic">toman forma</span>
        </motion.h2>
      </div>
    </section>
  );
};

