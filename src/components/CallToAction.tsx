import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <section id="contacto" className="py-32 bg-brand-carbon text-center px-4 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-artistic text-4xl md:text-6xl text-brand-white mb-6">
            ¿Tenés una idea?
          </h2>
          <p className="text-xl md:text-2xl text-brand-neutral/80 mb-12 font-light">
            Nosotros la convertimos en arte.
          </p>
          
          <button className="group relative inline-flex items-center justify-center px-8 py-4 font-medium tracking-widest text-brand-white uppercase bg-transparent overflow-hidden border border-brand-white/20 transition-all duration-300 hover:border-brand-red">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded opacity-30 bg-gradient-to-b from-transparent via-transparent to-brand-red"></span>
            <span className="relative z-10 flex items-center gap-3">
              Quiero hacer un pedido
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
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

