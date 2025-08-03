import React from "react";
import { motion } from "framer-motion";
import { FaVideo, FaPhoneAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
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

const cards = [
  {
    icon: <FaVideo size={28} />,
    title: "Zoom Consultation",
    description: "Book a virtual design consultation via Zoom.",
    link: "https://calendly.com/sharjilsiddiqui719/zoom?preview_source=et_card&month=2025-08",
  },
  {
    icon: <FaPhoneAlt size={28} />,
    title: "Phone Consultation",
    description: "Have a quick discussion over a phone call.",
    link: "https://calendly.com/sharjilsiddiqui719/phone-call?preview_source=et_card&month=2025-08",
  },
  {
    icon: <FaMapMarkerAlt size={28} />,
    title: "In-Person Meeting",
    description: "Visit our office for a face-to-face meeting.",
    link: "https://calendly.com/sharjilsiddiqui719/30min?preview_source=et_card&month=2025-08",
  },
];

const Consultation = () => {
  return (
    <div className="min-h-screen bg-white font-body text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="py-40 px-6 bg-gradient-to-r from-blue-100 via-white to-blue-200 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-animated mb-4">
            Schedule a Consultation
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            Choose the consultation method that works best for you.
          </p>
        </motion.div>
      </section>

      {/* Cards Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid gap-10 md:grid-cols-3">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-indigo-600 mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-700 mb-6">{card.description}</p>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg transition-all"
            >
              Book Now <FaArrowRight />
            </a>
          </motion.div>
        ))}
      </section>

      <div className="text-center text-sm text-gray-400 pb-10">
        100+ Clients | Trusted by Top Architects 🏗️
      </div>

      <Footer />
    </div>
  );
};

export default Consultation;
