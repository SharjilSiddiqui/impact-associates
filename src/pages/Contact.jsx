import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const QuoteForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("IMU_dAqz6bYYfFLBg"); // Replace with your actual Public Key
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0l50jki", // Replace with your actual Service ID
        "template_2hjlp1o", // Replace with your actual Template ID
        form
      )
      .then(
        () => {
          setSent(true);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 px-4 md:px-20 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get a Quote</h2>
        <p className="mb-10 text-lg">Fill in your details to receive an approximate price estimate.</p>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-500 text-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold">Thank you!</h3>
            <p>We’ll get back to you with a custom quote soon.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white text-gray-800 p-6 rounded-lg shadow-md max-w-xl mx-auto"
          >
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-1">What do you need?</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Describe your project or requirements..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition-all"
            >
              Submit
            </motion.button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default QuoteForm;
