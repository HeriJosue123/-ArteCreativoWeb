import { motion } from "framer-motion";

const categories = [
  {
    id: "crochet",
    title: "Arte en Crochet",
    subtitle: "Amigurumis",
    description: "Creaciones tejidas con dedicación y detalle. Cada puntada es una muestra de paciencia y amor por el arte.",
    image: "/images/crochet-spiderman.jpg",
    align: "left",
    titleFont: "font-editorial italic text-5xl md:text-7xl"
  },
  {
    id: "pixel",
    title: "Pixel Art",
    subtitle: "Hama Beads",
    description: "Estilo retro convertido en arte moderno. Piezas meticulosamente ensambladas pixel por pixel.",
    image: "/images/pixel-naruto.jpg",
    align: "right",
    titleFont: "font-pixel uppercase text-6xl md:text-8xl tracking-widest"
  },
  {
    id: "pintura",
    title: "Pintura & Tote Bags",
    subtitle: "Lienzo y Tela",
    description: "Lienzos que cobran vida y accesorios únicos pintados a mano. Tu arte a donde vayas.",
    image: "/images/icon-pintura.jpg",
    align: "left",
    titleFont: "font-editorial text-4xl md:text-6xl font-medium"
  },
  {
    id: "dibujo",
    title: "Dibujo Realista",
    subtitle: "A Lápiz",
    description: "Retratos personalizados con precisión milimétrica. Capturando la esencia en cada trazo.",
    image: "/images/icon-dibujo.jpg",
    align: "right",
    titleFont: "font-editorial uppercase tracking-[0.2em] text-4xl md:text-5xl font-light"
  }
];

export const Categorias = () => {
  return (
    <section id="galeria" className="overflow-hidden bg-brand-dark">
      <div className="mx-auto max-w-6xl px-4 flex flex-col">
        {categories.map((cat, index) => (
          <article key={cat.id} className="h-[100dvh] snap-start py-8 pt-20 md:py-20 flex flex-col">
            
            {/* Título de la sección anclado al primer elemento */}
            {index === 0 && (
              <div className="w-full text-center mb-4 md:mb-16 shrink-0">
                <h2 className="font-sans-modern mb-2 md:mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-brand-red md:text-xs">Nuestras Disciplinas</h2>
                <h3 className="font-editorial text-4xl md:text-5xl italic text-brand-white lg:text-7xl">Galería Creativa</h3>
              </div>
            )}

            <div className={`flex flex-1 min-h-0 w-full flex-col ${cat.align === "right" ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-center gap-6 md:gap-16`}>
              <motion.div
                initial={{ opacity: 0, x: cat.align === "right" ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 flex flex-1 min-h-0 justify-center"
              >
                <div className="group relative w-full h-full max-w-sm md:max-w-xl overflow-hidden rounded-sm bg-brand-carbon">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="block w-full h-full object-cover md:object-contain transition-transform duration-1000 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808]/50 via-transparent to-transparent" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex w-full shrink-0 flex-col justify-center md:w-1/2 text-center md:text-left pb-4 md:pb-0"
              >
                <span className="font-sans-modern mb-2 md:mb-4 block text-[10px] font-semibold uppercase tracking-widest text-brand-red md:text-xs">0{index + 1} // {cat.subtitle}</span>
                <h4 className={`${cat.titleFont} mb-3 md:mb-6 leading-tight text-brand-white`}>{cat.title}</h4>
                <p className="max-w-md mx-auto md:mx-0 font-sans-modern text-sm md:text-base font-light leading-relaxed text-brand-neutral/70 md:text-lg">{cat.description}</p>
                <div className="mt-4 md:mt-10">
                  <span className="group inline-flex cursor-pointer items-center gap-2 font-sans-modern text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-white/50 transition-colors hover:text-brand-red md:text-xs">
                    Explorar
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </div>
              </motion.div>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
};
