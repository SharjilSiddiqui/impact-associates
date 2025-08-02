import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
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

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  useEffect(() => {
    emailjs.init("IMU_dAqz6bYYfFLBg"); // Replace with your actual Public Key
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send("service_0l50jki", "template_2hjlp1o", form).then(
      () => {
        setSent(true);
        setForm({ name: "", email: "", phone: "", message: "" });
      },
      (error) => {
        console.error("EmailJS Error:", error);
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
            Whether you’re planning a new project or have a question — we’re
            ready to listen.
          </p>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        {sent ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-500 text-white p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold">Thank you!</h3>
            <p>
              Your message has been sent successfully. We will contact you soon.
            </p>
          </motion.div>
        ) : (
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
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
