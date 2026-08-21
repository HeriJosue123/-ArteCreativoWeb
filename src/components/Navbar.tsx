import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Manifiesto", href: "#manifiesto" },
    { name: "Galería", href: "#galeria" },
    { name: "Contacto", href: "#contacto" },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  // Framer motion variants for the entrance animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 1.8 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20, filter: "blur(8px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out ${
          isScrolled ? "bg-[#121212]/90 backdrop-blur-xl py-4 shadow-2xl" : "bg-transparent py-8 md:py-10"
        }`}
      >
        <div className="w-full px-6 md:px-12 flex justify-between items-center">
          
          {/* Left Side: Logo + Typographic Name */}
          <div className="flex items-center">
            {/* Real Logo Container */}
            <motion.a 
              variants={itemVariants}
              href="#home" 
              className={`relative flex items-center justify-center transition-all duration-700 ease-out ${isScrolled ? 'w-8 h-8 md:w-10 md:h-10' : 'w-10 h-10 md:w-14 md:h-14'}`}
              id="navbar-logo-container"
            >
              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/logo.png" 
                  alt="Logo" 
                  className="w-full h-full object-contain"
                  onError={() => { 
                    const container = document.getElementById('navbar-logo-container');
                    if(container) container.style.display = 'none';
                  }} 
                />
              </div>
            </motion.a>

            {/* Premium Typography Name (Separated from logo) */}
            <motion.a 
              variants={itemVariants}
              href="#home" 
              className={`flex items-center overflow-hidden transition-all duration-700 ease-out ${isScrolled ? 'ml-4 opacity-80' : 'ml-6 md:ml-8 opacity-100'}`}
            >
              <div className={`flex items-baseline gap-2 transition-all duration-700 ease-out origin-left ${isScrolled ? 'scale-90' : 'scale-100 hover:tracking-widest'}`}>
                <span className="font-sans-modern text-[10px] md:text-xs uppercase tracking-[0.4em] font-semibold text-brand-white transition-all duration-700">
                  ARTE
                </span>
                <span className="font-editorial italic text-lg md:text-2xl text-brand-red font-medium transition-all duration-700">
                  Creativo
                </span>
              </div>
            </motion.a>
          </div>

          {/* Right Side: Artistic Hamburger Button */}
          <motion.button
            variants={itemVariants}
            className="relative z-[60] group flex flex-col justify-center gap-[6px] w-10 h-10 cursor-pointer focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block h-[1px] bg-brand-white transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-[7px]' : 'w-8 group-hover:w-5'}`}></span>
            <span className={`block h-[1px] bg-brand-white transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-5 group-hover:w-8'}`}></span>
            <span className={`block h-[1px] bg-brand-white transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-[7px]' : 'w-6 group-hover:w-4'}`}></span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Fullscreen Minimalist Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)", transition: { duration: 0.5, ease: "easeInOut" } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-10 md:gap-14">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
                  className="group relative font-editorial text-5xl md:text-7xl text-brand-white/50 hover:text-brand-white transition-colors duration-500"
                >
                  <span className="italic font-light">{link.name}</span>
                  <span className="absolute -bottom-3 left-1/2 w-0 h-[1px] bg-brand-red transition-all duration-700 ease-out group-hover:w-full group-hover:left-0"></span>
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-16 text-brand-neutral/30 font-sans-modern text-[9px] md:text-[10px] uppercase tracking-[0.5em]"
            >
              Transformando ideas en arte
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

