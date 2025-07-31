import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaPaperPlane } from "react-icons/fa";

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

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setSent(true);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email error:", error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-white font-body text-black">
      <Navbar />

      {/* Hero */}
      <section className="py-32 px-6 bg-gradient-to-r from-blue-100 via-white to-blue-200 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-animated mb-4">
            Let's Connect
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            Whether you’re planning a new project or have a question — we’re ready to listen.
          </p>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid grid-cols-1 gap-6 bg-blue-50 p-8 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-all"
          >
            <FaPaperPlane /> Send Message
          </button>

          {sent && (
            <p className="text-green-600 font-medium text-center pt-2">
              Message sent successfully!
            </p>
          )}
        </motion.form>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
