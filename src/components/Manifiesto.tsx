import { motion } from "framer-motion";

export const Manifiesto = () => {
  return (
    <section id="manifiesto" className="min-h-[100dvh] snap-start flex items-center py-12 md:py-32 bg-brand-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative !border-0 !outline-none !ring-0 before:hidden after:hidden">
            <img
              src="/images/crochet-mj.jpg"
              alt="Michael Jackson Amigurumi"
              className="relative z-10 block w-full max-w-sm object-cover rounded-sm shadow-2xl !border-0 !outline-none !ring-0"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-left"
        >
          <h2 className="font-sans-modern text-brand-red text-[10px] md:text-xs uppercase tracking-[0.4em] mb-6 font-semibold">
            Nuestro Manifiesto
          </h2>
          <p className="font-editorial text-4xl md:text-5xl leading-tight text-brand-white mb-8">
            Nacimos con la convicción de que el arte no solo se observa, <br/>
            <span className="italic text-5xl md:text-6xl text-brand-red-light block mt-2">se vive.</span>
          </p>
          <p className="text-brand-neutral/70 text-base md:text-lg font-light leading-relaxed">
            Comenzamos en 2024 tejiendo sueños para forjar nuestro propio camino. Hoy, Arte Creativo es un refugio para la expresión auténtica, el trabajo artesanal y la pasión juvenil. Cada trazo, cada puntada y cada pixel cuenta una historia única. La tuya.
          </p>
        </motion.div>
      </div>

      {/* Elementos decorativos abstractos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-carbon rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
    </section>
  );
};
