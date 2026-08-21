import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/hero-bg.jpg",
    eyebrow: "EL ARTE DE CREAR",
    title: "ARTE",
    accent: "que se siente",
    phrase: "Hay ideas que merecen convertirse en algo que puedas tocar.",
  },
  {
    image: "/images/crochet-mj.jpg",
    eyebrow: "HECHO CON ALMA",
    title: "CADA",
    accent: "puntada cuenta",
    phrase: "Porque detrás de cada detalle hay tiempo, paciencia y corazón.",
  },
  {
    image: "/images/pixel-naruto.jpg",
    eyebrow: "PIXELES CON HISTORIA",
    title: "CREAR",
    accent: "es dejar huella",
    phrase: "Una idea pequeña también puede convertirse en algo inolvidable.",
  },
  {
    image: "/images/crochet-custom.jpg",
    eyebrow: "TU IDEA, NUESTRA PASIÓN",
    title: "LO QUE",
    accent: "imaginas existe",
    phrase: "Tú traes la idea. Nosotros le damos forma, textura y vida.",
  },
];

export const Hero = () => {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[100dvh] min-h-[640px] w-full overflow-hidden bg-brand-dark">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img src={slide.image} alt="" aria-hidden="true" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#080808]/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/35 via-[#080808]/55 to-[#121212]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/55 via-transparent to-[#080808]/35" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full items-center justify-center px-5 text-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.image}
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="mx-auto flex max-w-5xl flex-col items-center"
          >
            <p className="font-sans-modern mb-5 text-[9px] font-semibold uppercase tracking-[0.48em] text-brand-red sm:text-xs">
              {slide.eyebrow}
            </p>
            <h1 className="flex flex-col items-center leading-[0.86]">
              <span className="font-sans-modern text-5xl font-semibold tracking-[0.14em] text-brand-white sm:text-7xl md:text-8xl lg:text-9xl">
                {slide.title}
              </span>
              <span className="font-editorial mt-2 text-5xl italic font-medium text-brand-red sm:text-7xl md:text-8xl lg:text-[9rem]">
                {slide.accent}
              </span>
            </h1>
            <p className="mt-9 max-w-2xl px-2 font-sans-modern text-base font-light leading-relaxed text-brand-neutral/85 sm:text-lg md:text-xl">
              {slide.phrase}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((item, index) => (
          <button key={item.image} type="button" aria-label={`Ir a la diapositiva ${index + 1}`} onClick={() => setActive(index)} className="group flex h-5 items-center">
            <span className={`block h-px transition-all duration-500 ${active === index ? "w-9 bg-brand-red" : "w-4 bg-brand-white/35 group-hover:bg-brand-white/70"}`} />
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1"
      >
        <span className="font-sans-modern text-[9px] uppercase tracking-[0.35em] text-brand-white/45">Descubrir</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ChevronDown className="text-brand-red" size={21} />
        </motion.div>
      </motion.div>
    </section>
  );
};
