import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

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
    { name: "Nosotros", href: "#nosotros" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-brand-dark/90 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-artistic font-bold tracking-wider text-brand-white">
          ARTE CREATIVO
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-white/80 hover:text-brand-red transition-colors text-sm uppercase tracking-widest font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-brand-white border border-brand-red px-4 py-2 hover:bg-brand-red transition-colors text-sm uppercase tracking-widest font-medium"
          >
            Contacto
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-md flex flex-col items-center py-8 gap-6 shadow-xl border-t border-brand-carbon"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-brand-white text-lg hover:text-brand-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-brand-white border border-brand-red px-8 py-3 hover:bg-brand-red transition-colors text-lg"
          >
            Contacto
          </a>
        </motion.div>
      )}
    </nav>
  );
};

