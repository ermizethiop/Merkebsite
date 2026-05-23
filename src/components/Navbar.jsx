import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/Logo_2.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Team", path: "/team" },
  { label: "Services", path: "/service" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Pricing", path: "/price" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (path) => {
    setMobileOpen(false);
    navigate(path);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-900/80 backdrop-blur-xl border-b border-glass-border shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNav("/")}
            className="flex items-center gap-3 group"
          >
            <img
              src={Logo}
              alt="Merkeb Technologies"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="text-left">
              <span className="text-xl font-display font-bold text-white block leading-tight">
                Merkeb
              </span>
              <span className="text-xs text-gray-400 tracking-widest uppercase block -mt-0.5">
                Technologies
              </span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-white bg-primary/20"
                      : "text-gray-300 hover:text-white hover:bg-glass-hover"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  )}
                </button>
              );
            })}
            <button
              onClick={() => handleNav("/contact")}
              className="ml-4 px-6 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_25px_-5px_rgba(249,115,22,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get Started
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 hover:bg-glass-hover rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-glass-border bg-dark-900/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNav(link.path)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "text-white bg-primary/20"
                        : "text-gray-300 hover:text-white hover:bg-glass-hover"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <button
                onClick={() => handleNav("/contact")}
                className="w-full mt-4 px-6 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-center"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
