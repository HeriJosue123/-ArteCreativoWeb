import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 1.8 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-700 ease-out ${isScrolled ? "bg-[#121212]/90 py-4 shadow-2xl backdrop-blur-xl" : "bg-transparent py-8 md:py-10"}`}
    >
      <div className="flex w-full items-center px-3 md:px-6 lg:px-8">
        <div className="flex items-center">
          <motion.a
            variants={itemVariants}
            href="#home"
            className={`relative flex shrink-0 items-center justify-center transition-all duration-700 ease-out ${isScrolled ? "h-8 w-8 md:h-10 md:w-10" : "h-10 w-10 md:h-14 md:w-14"}`}
            id="navbar-logo-container"
          >
            <img
              src="/images/logo.png"
              alt="Arte Creativo"
              className="h-full w-full object-contain"
              onError={(event) => { event.currentTarget.style.display = "none"; }}
            />
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="#home"
            className={`ml-3 flex items-center overflow-hidden transition-all duration-700 ease-out md:ml-4 ${isScrolled ? "opacity-80" : "opacity-100"}`}
          >
            <div className={`flex origin-left items-baseline gap-2 transition-all duration-700 ease-out ${isScrolled ? "scale-90" : "scale-100 hover:tracking-widest"}`}>
              <span className="font-sans-modern text-[10px] font-semibold uppercase tracking-[0.4em] text-brand-white transition-all duration-700 md:text-xs">ARTE</span>
              <span className="font-editorial text-lg font-medium italic text-brand-red transition-all duration-700 md:text-2xl">Creativo</span>
            </div>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};
