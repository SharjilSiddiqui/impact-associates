import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaHome,
  FaBuilding,
  FaCity,
  FaDraftingCompass,
  FaQuoteLeft,
  FaArrowDown,
  FaLightbulb,
  FaTools,
  FaClock,
  FaPlay,
  FaStar,
  FaAward,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import heroImage from "../assets/herosection.jpeg";

const services = [
  {
    title: "Residential Design",
    icon: (
      <FaHome
        className="text-white text-4xl mb-4"
        aria-label="Residential Design"
      />
    ),
    description:
      "Elegant and functional living spaces crafted to reflect your lifestyle.",
    gradient: "from-blue-400 to-blue-600",
    delay: 0.1,
  },
  {
    title: "Commercial Spaces",
    icon: (
      <FaBuilding
        className="text-white text-4xl mb-4"
        aria-label="Commercial Spaces"
      />
    ),
    description:
      "Smart commercial environments designed for efficiency and brand impact.",
    gradient: "from-blue-300 to-blue-500",
    delay: 0.2,
  },
  {
    title: "Urban Planning",
    icon: (
      <FaCity
        className="text-white text-4xl mb-4"
        aria-label="Urban Planning"
      />
    ),
    description: "Sustainable, scalable cityscapes with architectural harmony.",
    gradient: "from-blue-500 to-blue-700",
    delay: 0.3,
  },
  {
    title: "Interior Concepts",
    icon: (
      <FaDraftingCompass
        className="text-white text-4xl mb-4"
        aria-label="Interior Concepts"
      />
    ),
    description: "Contemporary interiors blending utility with sophistication.",
    gradient: "from-blue-600 to-blue-800",
    delay: 0.4,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Home = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <div className="bg-white text-black font-body">
        {/* Extraordinary Hero Section */}
        <section
          className="relative h-screen bg-cover bg-center overflow-hidden flex items-center justify-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Advanced Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80"></div>

          {/* Animated Particle System */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* 3D Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{
                float: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                float: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
              className="absolute top-20 left-10 w-6 h-6 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full opacity-60 shadow-lg animate-float"
            />
            <motion.div
              animate={{
                float: [0, 15, 0],
                rotate: [0, -360],
              }}
              transition={{
                float: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                },
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              }}
              className="absolute top-40 right-20 w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-40 shadow-lg animate-float"
            />
            <motion.div
              animate={{
                float: [0, -10, 0],
                rotate: [0, 360],
              }}
              transition={{
                float: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                },
                rotate: { duration: 18, repeat: Infinity, ease: "linear" },
              }}
              className="absolute bottom-40 left-20 w-4 h-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full opacity-50 shadow-lg animate-float"
            />
          </div>

          {/* Mouse-following gradient */}
          <motion.div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-3xl pointer-events-none"
            animate={{
              x: mousePosition.x - 192,
              y: mousePosition.y - 192,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />

          {/* Glass Morphism Content Container */}
          <motion.div
            className="relative z-10 w-full max-w-7xl mx-auto px-6 h-170"
            style={{ y, opacity }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="glass-card backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-16 border border-white/20 shadow-2xl text-center relative overflow-hidden"
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-blue-600/20 animate-pulse"></div>
              </div>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-white text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight text-shadow-lg"
              >
                Shaping Spaces with
                <span className="block text-gradient-animated animate-gradient">
                  Timeless Design
                </span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeUp}
                className="text-white/90 text-lg md:text-2xl mb-12 max-w-4xl mx-auto font-light leading-relaxed"
              >
                Bridging aesthetics and functionality through innovative
                architectural solutions that stand the test of time.
              </motion.p>

              {/* Enhanced CTA Buttons */}
              <motion.div
                initial="hidden"
                animate="visible"
                custom={3}
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              >
                <Link to="/projects">
                  <motion.button
                    className="btn-premium group relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 font-semibold text-s min-w-[220px] overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <FaRocket className="animate-bounce" />
                      Explore Our Work
                    </span>
                  </motion.button>
                </Link>

                {/* <motion.button
                  className="glass-button group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 min-w-[220px] overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPlay className="text-blue-300 animate-pulse" />
                  Watch Showreel
                </motion.button> */}
              </motion.div>

              {/* Enhanced Stats */}
              <motion.div
                initial="hidden"
                animate="visible"
                custom={4}
                variants={fadeUp}
                className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-white/90"
              >
                {[
                  {
                    number: "150+",
                    label: "Projects Completed",
                    icon: <FaShieldAlt />,
                  },
                  {
                    number: "25+",
                    label: "Years Experience",
                    icon: <FaAward />,
                  },
                  {
                    number: "98%",
                    label: "Client Satisfaction",
                    icon: <FaStar />,
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group hover-lift"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center justify-center mb-3">
                      <div className="text-blue-300 text-2xl group-hover:animate-bounce">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 text-gradient-animated">
                      {stat.number}
                    </div>
                    <div className="text-sm opacity-80 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center gap-3 text-white/70"
            >
              <span className="text-sm font-medium">Scroll to Explore</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FaArrowDown
                  className="text-2xl animate-bounce"
                  aria-label="Scroll to Explore"
                />
              </motion.div>
            </motion.div>
          </div> */}
        </section>

        {/* Extraordinary Features Section */}
        <section className="max-w-7xl mx-auto py-24 px-6 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20 relative z-10"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-gradient-animated">
              Our Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 mx-auto rounded-full shadow-glow"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="card-premium group relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 h-full overflow-hidden hover-lift"
              >
                {/* Animated background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10 text-center">
                  <motion.div
                    className="flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 mx-auto mb-8 shadow-glow group-hover:shadow-glow-lg transition-all duration-300 hover-rotate"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-white text-4xl">{service.icon}</div>
                  </motion.div>
                  <h3 className="text-2xl font-heading font-semibold mb-6 text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Extraordinary Why Choose Us Section */}
        <section className="max-w-7xl mx-auto py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-blue-600"></div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20 relative z-10"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-gradient-animated">
              Why Choose Us
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 mx-auto rounded-full shadow-glow"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {[
              {
                icon: (
                  <FaLightbulb
                    className="text-blue-500 text-5xl"
                    aria-label="Innovative Solutions"
                  />
                ),
                title: "Innovative Solutions",
                text: "We approach every project with creativity, backed by technical expertise.",
                gradient: "from-yellow-400 to-orange-500",
              },
              {
                icon: (
                  <FaTools
                    className="text-blue-500 text-5xl"
                    aria-label="Skilled Craftsmanship"
                  />
                ),
                title: "Skilled Craftsmanship",
                text: "Our team ensures precision in every line, curve, and finish.",
                gradient: "from-blue-400 to-cyan-500",
              },
              {
                icon: (
                  <FaClock
                    className="text-blue-500 text-5xl"
                    aria-label="Timely Delivery"
                  />
                ),
                title: "Timely Delivery",
                text: "We value your time and always meet deadlines without compromising quality.",
                gradient: "from-green-400 to-emerald-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="card-premium group relative p-10 rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-500 transform hover:-translate-y-2 bg-white border border-gray-100 h-full overflow-hidden hover-lift"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} rounded-t-3xl`}
                ></div>
                <div className="mb-8 text-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="hover-rotate"
                  >
                    {item.icon}
                  </motion.div>
                </div>
                <h3 className="text-3xl font-heading font-semibold mb-6 text-black text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed tracking-wide text-center text-lg">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Extraordinary Testimonials Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-24 px-6 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-blue-600/10 animate-pulse"></div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20 relative z-10"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-white text-shadow-lg">
              What Our Clients Say
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-400 mx-auto rounded-full shadow-glow"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
            {[
              {
                quote: "Impact Associates turned our dream home into reality.",
                name: "Sarah L.",
                role: "Homeowner",
                rating: 5,
              },
              {
                quote:
                  "Professional, visionary, and efficient from start to finish.",
                name: "David R.",
                role: "Commercial Developer",
                rating: 5,
              },
              {
                quote:
                  "They balanced creativity and practicality like no one else.",
                name: "Anjali K.",
                role: "City Planner",
                rating: 5,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="glass-card group relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-soft hover:shadow-soft-lg transition-all duration-500 transform hover:-translate-y-2 border border-white/20 h-full overflow-hidden hover-lift"
              >
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <FaQuoteLeft className="text-blue-300 text-4xl mb-6" />
                <p className="text-white/90 italic text-xl leading-relaxed mb-8">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">
                      {item.name}
                    </div>
                    <div className="text-sm text-white/70">{item.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Extraordinary Call to Action */}
        <section className="py-24 px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-20 px-12 rounded-3xl shadow-2xl overflow-hidden max-w-7xl mx-auto"
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute top-10 left-10 w-32 h-32 border-2 border-white/30 rounded-full animate-spin"
                style={{ animationDuration: "20s" }}
              ></div>
              <div
                className="absolute bottom-10 right-10 w-40 h-40 border-2 border-white/20 rounded-full animate-spin"
                style={{
                  animationDuration: "25s",
                  animationDirection: "reverse",
                }}
              ></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/40 rounded-full animate-pulse"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <motion.h2
                className="text-5xl md:text-6xl font-display font-bold mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Ready to Build Something Great?
              </motion.h2>
              <p className="text-2xl mb-12 text-white/90 leading-relaxed">
                Contact us to start your architectural journey with a team that
                values quality, innovation, and vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  className="bg-white text-blue-600 font-semibold px-10 py-5 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[240px] text-lg btn-premium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                </motion.button>
                <motion.button
                  className="border-2 border-white/30 text-white px-10 py-5 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 min-w-[240px] text-lg glass-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
