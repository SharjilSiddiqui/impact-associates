import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${
        isHome && !isScrolled
          ? "bg-transparent"
          : "backdrop-blur-xl bg-white/90 shadow-md border-b border-white/20"
      }`}
    >
      {/* Dynamic background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 pointer-events-none"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 20,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />

      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        {/* Brand */}
        <Link
          to="/"
          className="text-lg md:text-xl lg:text-2xl font-display font-bold"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-2"
          >
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Impact
            </span>
            <span
              className={`${
                isHome && !isScrolled ? "text-white" : "text-black"
              }`}
            >
              Design
            </span>
            <span className="text-gray-500">Associates</span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative text-[15px] font-medium transition-all duration-300 ${
                  isActive
                    ? "text-blue-600"
                    : isHome && !isScrolled
                    ? "text-white hover:text-blue-300"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <motion.span
                className="group relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all group-hover:w-full"></span>
              </motion.span>
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-105 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Quote
          </motion.button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-3 rounded-xl transition-colors ${
              isHome && !isScrolled
                ? "text-white hover:bg-white/10"
                : "text-black hover:bg-gray-100"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Slide-In */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-80 h-220 z-[99] bg-white/95 backdrop-blur-lg shadow-2xl border-l border-white/30"
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-lg font-semibold text-black">Menu</h3>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
                whileHover={{ scale: 1.1 }}
              >
                <X size={24} className="text-gray-600" />
              </motion.button>
            </div>

            <div className="p-6 space-y-2">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}

              <motion.button
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105"
                whileHover={{ scale: 1.02 }}
              >
                Get Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
