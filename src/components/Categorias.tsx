import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    title: "Pintura & Tote Bags",
    description: "Lienzos que cobran vida y accesorios únicos pintados a mano.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1600&auto=format&fit=crop",
    colSpan: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Arte en Crochet",
    description: "Creaciones tejidas con dedicación y detalle.",
    image: "https://images.unsplash.com/photo-1606501127003-883a9ce34e32?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Pixel Art",
    description: "Estilo retro convertido en arte moderno.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Dibujo Realista",
    description: "Retratos personalizados con precisión milimétrica.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1600&auto=format&fit=crop",
    colSpan: "md:col-span-2 md:row-span-1",
  }
];

export const Categorias = () => {
  return (
    <section id="galeria" className="py-24 bg-brand-dark px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <h2 className="text-brand-red text-sm uppercase tracking-[0.3em] font-semibold mb-4">Nuestras Disciplinas</h2>
            <h3 className="font-artistic text-4xl md:text-5xl text-brand-white">Galería Creativa</h3>
          </div>
          <p className="text-brand-neutral/60 max-w-sm mt-6 md:mt-0 font-light text-sm">
            Explora las diferentes formas en las que materializamos las ideas. Cada pieza es elaborada de forma artesanal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4 md:gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-brand-carbon rounded-sm ${cat.colSpan}`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${cat.image})` }}
              ></div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <h4 className="font-artistic text-2xl md:text-3xl text-brand-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {cat.title}
                </h4>
                <p className="text-brand-neutral/80 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 max-w-md">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

