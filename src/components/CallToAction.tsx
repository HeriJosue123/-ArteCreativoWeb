import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <section id="contacto" className="min-h-[100dvh] snap-start flex flex-col justify-center bg-brand-carbon px-4 pt-16 pb-8 md:pt-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-20">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-red/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center my-auto">
        
        {/* TEXT & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h2 className="font-editorial italic text-5xl md:text-7xl lg:text-8xl text-brand-white mb-2">
            ¿Tenés una idea?
          </h2>
          <p className="font-editorial text-3xl md:text-5xl lg:text-6xl text-brand-neutral/80 mb-10 md:mb-12 font-light">
            Nosotros la convertimos en arte.
          </p>
          
          <button className="group relative inline-flex items-center justify-center px-8 py-4 font-sans-modern text-[10px] md:text-xs font-semibold tracking-[0.3em] text-brand-white uppercase bg-transparent overflow-hidden border border-brand-white/20 transition-all duration-300 hover:border-brand-red">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded opacity-30 bg-gradient-to-b from-transparent via-transparent to-brand-red"></span>
            <span className="relative z-10 flex items-center gap-4 group-hover:text-brand-white transition-colors">
              Quiero hacer un pedido
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <div className="absolute inset-0 h-full w-full bg-brand-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
          </button>
        </motion.div>

        {/* IMAGE & EDITORIAL PHRASE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 md:mt-24 flex flex-col items-center"
        >
          <div className="relative w-32 md:w-48 mb-8 group rotate-[-2deg] transition-transform duration-700 hover:rotate-0">
            <div className="absolute inset-0 bg-brand-red/10 border border-brand-red/20 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 -z-10 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-brand-red/20"></div>
            <img 
              src="/images/promo-haaland.jpg" 
              alt="Obra personalizada" 
              className="w-full h-auto object-cover grayscale-[0.3] contrast-125 hover:grayscale-0 transition-all duration-700 shadow-xl"
            />
          </div>
          
          <span className="font-sans-modern text-[9px] md:text-xs uppercase tracking-[0.4em] text-brand-white/50 font-semibold">
            Una idea. Una pieza. Una historia.
          </span>
        </motion.div>

      </div>

      <div className="mt-8 pt-6 border-t border-brand-white/5 text-center text-brand-white/30 text-[10px] md:text-xs relative z-10 w-full">
        <p>© {new Date().getFullYear()} Arte Creativo. Todos los derechos reservados.</p>
      </div>
    </section>
  );
};
