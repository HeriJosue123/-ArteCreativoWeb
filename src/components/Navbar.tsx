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
    visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 6.0 } },
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
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-700 ease-out ${isScrolled ? "bg-[#121212]/90 py-4 shadow-2xl backdrop-blur-xl" : "bg-transparent py-5 md:py-7"}`}
    >
      <div className="flex w-full items-center px-4 md:px-6 lg:px-8">
        <motion.a
          variants={itemVariants}
          href="#home"
          aria-label="Arte Creativo"
          className={`block transition-all duration-700 ease-out ${isScrolled ? "opacity-80" : "opacity-100"}`}
        >
          <img
            src="/images/arte-creativo-logo.svg"
            alt="Arte Creativo"
            className={`h-auto w-[165px] object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)] transition-all duration-700 md:w-[215px] ${isScrolled ? "scale-90 origin-left" : "scale-100"}`}
          />
        </motion.a>
      </div>
    </motion.nav>
  );
};
