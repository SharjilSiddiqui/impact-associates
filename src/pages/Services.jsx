import React from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaBuilding,
  FaCity,
  FaDraftingCompass,
  FaLaptopHouse,
  FaCogs,
  FaPalette,
  FaProjectDiagram,
  FaRobot,
  FaVrCardboard,
  FaLightbulb,
  FaTools,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const serviceItems = [
  {
    icon: <FaLaptopHouse className="text-white text-4xl mb-4" />,
    title: "Virtual Architecture",
    description:
      "Immersive 3D virtual tours that bring your projects to life before they're built.",
    gradient: "from-blue-400 to-blue-600",
    delay: 0.1,
  },
  {
    icon: <FaCogs className="text-white text-4xl mb-4" />,
    title: "Engineering Integration",
    description:
      "Combining design with technical systems for efficiency and functionality.",
    gradient: "from-blue-300 to-blue-500",
    delay: 0.2,
  },
  {
    icon: <FaPalette className="text-white text-4xl mb-4" />,
    title: "Design Consultancy",
    description:
      "Expert design solutions tailored to aesthetics, trends, and your brand identity.",
    gradient: "from-blue-500 to-blue-700",
    delay: 0.3,
  },
  {
    icon: <FaProjectDiagram className="text-white text-4xl mb-4" />,
    title: "Project Management",
    description:
      "Seamless end-to-end project execution with attention to detail and delivery.",
    gradient: "from-blue-600 to-blue-800",
    delay: 0.4,
  },
  {
    icon: <FaRobot className="text-white text-4xl mb-4" />,
    title: "AI-Driven Design",
    description:
      "Utilizing artificial intelligence to optimize planning and layout decisions.",
    gradient: "from-blue-400 to-blue-700",
    delay: 0.5,
  },
  {
    icon: <FaVrCardboard className="text-white text-4xl mb-4" />,
    title: "Virtual Reality Walkthroughs",
    description:
      "Step inside your project with immersive VR experiences.",
    gradient: "from-blue-300 to-blue-600",
    delay: 0.6,
  },
  {
    icon: <FaLightbulb className="text-white text-4xl mb-4" />,
    title: "Sustainable Innovation",
    description:
      "Environmentally responsible design strategies for future-ready builds.",
    gradient: "from-blue-500 to-blue-800",
    delay: 0.7,
  },
  {
    icon: <FaTools className="text-white text-4xl mb-4" />,
    title: "Technical Consultancy",
    description:
      "Supporting your technical teams with architectural and structural insights.",
    gradient: "from-blue-600 to-blue-900",
    delay: 0.8,
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

const Services = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-black font-body">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-30 px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient-animated">
            Designing the Future of Architecture & Innovation
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            Discover how we blend creative design, advanced technology, and intelligent planning to turn concepts into reality.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto py-24 px-6 relative">
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
          {serviceItems.map((service, index) => (
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

      {/* Feature Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-blue-700 mb-6">
            Why Work With Us?
          </h3>
          <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <li>✓ Seamless tech-driven design experiences</li>
            <li>✓ Future-ready and sustainable planning</li>
            <li>✓ AI-enhanced solutions for optimization</li>
            <li>✓ Trusted expertise and on-time delivery</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/illustrations/architecture-diagram.svg"
            alt="Architecture Features"
            className="w-full rounded-xl shadow-lg"
          />
        </motion.div>
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
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next big idea. Get in touch with us to explore possibilities.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">
            Contact Us
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
