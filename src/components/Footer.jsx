import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowUp, FaHeart, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-blue-600/5 animate-pulse"></div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-32 h-32 border border-blue-500/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 w-24 h-24 border border-blue-600/20 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-300 bg-clip-text text-transparent">
                  Impact
                </span>
                <span className="text-white"> Design</span>
                <span className="text-gray-300"> Associates</span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Shaping spaces with timeless architectural excellence and innovative design solutions that inspire and endure.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                { icon: FaFacebookF, href: "#", label: "Facebook" },
                { icon: FaInstagram, href: "#", label: "Instagram" },
                { icon: FaLinkedinIn, href: "#", label: "LinkedIn" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="group w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <social.icon size={20} className="text-white" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-heading font-semibold mb-8 text-white border-b border-blue-500/30 pb-3">
              Navigation
            </h3>
            <ul className="space-y-4">
              {["Home", "Projects", "Services", "About", "Contact"].map((link, index) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-blue-300 transition-all duration-300 hover:translate-x-2 inline-block text-lg"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-heading font-semibold mb-8 text-white border-b border-blue-500/30 pb-3">
              Contact
            </h3>
            <ul className="space-y-6">
              <motion.li 
                className="flex items-start gap-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope className="text-blue-400 mt-2 flex-shrink-0 text-xl" />
                <div>
                  <span className="text-gray-300 text-sm">Email</span>
                  <div className="text-white font-medium text-m md:text-s lg:text-s">impact_designassociates@rediffmail.com</div>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start gap-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaPhone className="text-blue-400 mt-2 flex-shrink-0 text-xl" />
                <div>
                  <span className="text-gray-300 text-sm">Phone</span>
                  <div className="text-white font-medium text-lg">+91 98909 33772</div>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start gap-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaMapMarkerAlt className="text-blue-400 mt-2 flex-shrink-0 text-xl" />
                <div>
                  <span className="text-gray-300 text-sm">Studio</span>
                  <div className="text-white font-medium text-sm leading-relaxed">
                    Block No 3, 1st Floor Global Avenue, Paithan Gate, Aurangabad - Maharashtra - 431001
                  </div>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          {/* Enhanced Services Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pl-8"
          >
            <h3 className="text-2xl font-heading font-semibold mb-8 text-white border-b border-blue-500/30 pb-3">
              Services
            </h3>
            <ul className="space-y-4">
              {[
                "Residential Design",
                "Commercial Spaces", 
                "Urban Planning",
                "Interior Concepts",
                "Project Management"
              ].map((service, index) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    type: "spring", 
                    stiffness: 300 
                  }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <span className="text-gray-300 hover:text-blue-300 transition-colors duration-300 cursor-pointer text-lg">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Enhanced Newsletter Section */}
        <motion.div 
          className="border-t border-gray-700 pt-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-heading font-semibold mb-6 text-white">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Subscribe to our newsletter for the latest architectural trends and project updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-lg"
                required
              />
              <motion.button 
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubscribed ? (
                  <span className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    Subscribed!
                  </span>
                ) : (
                  "Subscribe"
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Bottom Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 border-t border-gray-700 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div 
              className="text-gray-300 text-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              &copy; {new Date().getFullYear()} Impact Design Associates. All rights reserved.
            </motion.div>
            <motion.div 
              className="flex space-x-8 text-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <motion.a 
                  key={link}
                  href="#" 
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <FaArrowUp className="mx-auto" />
      </motion.button>
    </footer>
  );
};

export default Footer;
