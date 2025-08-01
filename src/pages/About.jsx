import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaLightbulb,
  FaHandsHelping,
  FaMapMarkedAlt,
  FaDraftingCompass,
  FaCity,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

const aboutItems = [
  {
    icon: <FaUserTie className="text-white text-3xl" />,
    title: "About Us",
    description:
      "We are an award-winning architectural firm with a passion for shaping the skylines of tomorrow through technology, creativity, and precision.",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    icon: <FaDraftingCompass className="text-white text-3xl" />,
    title: "Design Ethos",
    description:
      "Balancing form and function with human experience, we craft built environments that inspire and endure.",
    gradient: "from-blue-300 to-blue-500",
  },
  {
    icon: <FaCity className="text-white text-3xl" />,
    title: "Urban Impact",
    description:
      "Our projects empower communities and redefine urban living — one structure, street, and skyline at a time.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: <FaMapMarkedAlt className="text-white text-3xl" />,
    title: "Global Vision",
    description:
      "With clients across continents, we embrace cultural diversity, contextual relevance, and sustainable innovation in all we do.",
    gradient: "from-blue-600 to-blue-800",
  },
];

const About = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-black font-body">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 via-white to-blue-200 py-32 px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient-animated">
            Crafting the Blueprint of Tomorrow
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            From iconic buildings to immersive environments, we lead with
            creativity and build with purpose.
          </p>
        </motion.div>
      </section>

      {/* About Section - Vertical Stack */}
      <section className="max-w-5xl mx-auto py-24 px-6 flex flex-col gap-16">
        {aboutItems.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <div
              className={`flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-glow`}
            >
              {item.icon}
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-2 text-black">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Vision Section */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold text-blue-700 mb-6">
              Our Vision
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <li>✓ Cultivate design excellence across diverse scales</li>
              <li>✓ Elevate human experience through spatial intelligence</li>
              <li>
                ✓ Innovate responsibly with digital and ecological foresight
              </li>
              <li>✓ Inspire progress with purpose-driven architecture</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/illustrations/vision-graphic.svg"
              alt="Vision Illustration"
              className="w-full rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner with Visionaries
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Collaborate with a firm that blends creativity, precision, and
            innovation to bring bold ideas to life.
          </p>
          <Link to="/contact">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">
              Get in Touch
            </button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
