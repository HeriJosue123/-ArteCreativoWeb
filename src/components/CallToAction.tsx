import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <section id="contacto" className="py-12 md:py-32 bg-brand-carbon text-center px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col-reverse md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img 
            src="/images/promo-haaland.jpg" 
            alt="Promocional" 
            className="w-full max-w-sm rounded-sm shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="font-editorial italic text-5xl md:text-7xl text-brand-white mb-4">
            ¿Tenés una idea?
          </h2>
          <p className="font-editorial text-2xl md:text-4xl text-brand-neutral/80 mb-12 font-light">
            Nosotros la convertimos en arte.
          </p>
          
          <button className="group relative inline-flex items-center justify-center px-8 py-4 font-sans-modern text-[10px] md:text-xs font-semibold tracking-[0.3em] text-brand-white uppercase bg-transparent overflow-hidden border border-brand-white/20 transition-all duration-300 hover:border-brand-red">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded opacity-30 bg-gradient-to-b from-transparent via-transparent to-brand-red"></span>
            <span className="relative z-10 flex items-center gap-4">
              Quiero hacer un pedido
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <div className="absolute inset-0 h-full w-full bg-brand-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
          </button>
        </motion.div>
      </div>

      <div className="mt-32 border-t border-brand-white/10 pt-10 text-brand-white/40 text-sm">
        <p>© {new Date().getFullYear()} Arte Creativo. Todos los derechos reservados.</p>
      </div>
    </section>
  );
};

