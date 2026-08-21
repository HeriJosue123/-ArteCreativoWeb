import { motion } from "framer-motion";

const categories = [
  {
    id: "crochet",
    title: "Arte en Crochet",
    subtitle: "Amigurumis",
    description: "Creaciones tejidas con dedicación y detalle. Cada puntada es una muestra de paciencia y amor por el arte.",
    image: "/images/crochet-spiderman.jpg",
    align: "left",
    isIcon: false,
    titleFont: "font-editorial italic text-5xl md:text-7xl"
  },
  {
    id: "pixel",
    title: "Pixel Art",
    subtitle: "Hama Beads",
    description: "Estilo retro convertido en arte moderno. Piezas meticulosamente ensambladas pixel por pixel.",
    image: "/images/pixel-naruto.jpg",
    align: "right",
    isIcon: false,
    titleFont: "font-pixel uppercase text-6xl md:text-8xl tracking-widest text-brand-red"
  },
  {
    id: "pintura",
    title: "Pintura & Tote Bags",
    subtitle: "Lienzo y Tela",
    description: "Lienzos que cobran vida y accesorios únicos pintados a mano. Tu arte a donde vayas.",
    image: "/images/icon-pintura.jpg",
    align: "left",
    isIcon: true,
    titleFont: "font-editorial text-4xl md:text-6xl font-medium"
  },
  {
    id: "dibujo",
    title: "Dibujo Realista",
    subtitle: "A Lápiz",
    description: "Retratos personalizados con precisión milimétrica. Capturando la esencia en cada trazo.",
    image: "/images/icon-dibujo.jpg",
    align: "right",
    isIcon: true,
    titleFont: "font-editorial uppercase tracking-[0.2em] text-4xl md:text-5xl font-light"
  }
];

export const Categorias = () => {
  return (
    <section id="galeria" className="py-12 md:py-32 bg-brand-dark px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-24 text-center">
          <h2 className="font-sans-modern text-brand-red text-[10px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-4">Nuestras Disciplinas</h2>
          <h3 className="font-editorial italic text-5xl md:text-7xl text-brand-white">Galería Creativa</h3>
        </div>

        <div className="space-y-16 md:space-y-32">
          {categories.map((cat, index) => (
            <div key={cat.id} className={`flex flex-col ${cat.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}>
              {/* Image side */}
              <motion.div 
                initial={{ opacity: 0, x: cat.align === 'right' ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 relative"
              >
                 <div className={`relative w-full ${cat.isIcon ? 'aspect-square max-w-[240px] md:max-w-xs mx-auto' : 'aspect-[4/5] md:aspect-[3/4] max-w-md mx-auto'} overflow-hidden rounded-sm group`}>
                   <img 
                     src={cat.image} 
                     alt={cat.title} 
                     loading="lazy"
                     className={`w-full h-full ${cat.isIcon ? 'object-contain p-8 md:p-12' : 'object-cover object-center'} transition-transform duration-1000 group-hover:scale-105`} 
                   />
                   {!cat.isIcon && <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>}
                 </div>
                 {/* Decorative element */}
                 <div className={`hidden md:block absolute -z-10 w-2/3 h-2/3 border border-brand-red/20 rounded-sm ${cat.align === 'right' ? '-top-6 -right-6' : '-bottom-6 -left-6'}`}></div>
              </motion.div>

              {/* Text side */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 flex flex-col justify-center"
              >
                <span className="font-sans-modern text-brand-red uppercase tracking-widest text-[10px] md:text-xs font-semibold mb-4 block">0{index + 1} // {cat.subtitle}</span>
                <h4 className={`${cat.titleFont} text-brand-white mb-6 leading-tight`}>
                  {cat.title}
                </h4>
                <p className="text-brand-neutral/70 text-base md:text-lg font-light leading-relaxed max-w-md">
                  {cat.description}
                </p>
                <div className="mt-10">
                  <span className="font-sans-modern inline-flex items-center gap-2 text-brand-white/50 text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold hover:text-brand-red transition-colors cursor-pointer group">
                    Explorar
                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

