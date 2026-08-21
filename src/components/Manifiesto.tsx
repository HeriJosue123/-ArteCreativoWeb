import { motion } from "framer-motion";

export const Manifiesto = () => {
  return (
    <section id="manifiesto" className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-brand-red text-sm uppercase tracking-[0.4em] mb-8 font-semibold">
            Nuestro Manifiesto
          </h2>
          <p className="font-artistic text-3xl md:text-5xl leading-tight text-brand-white mb-10">
            Nacimos con la convicción de que el arte no solo se observa, <span className="italic text-brand-red-light">se vive</span>.
          </p>
          <p className="text-brand-neutral/70 text-lg max-w-2xl mx-auto font-light leading-relaxed">
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

