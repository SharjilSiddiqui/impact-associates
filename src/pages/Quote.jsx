import React, { useState } from "react";
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

const Quote = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/xqalykal", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new FormData(e.target),
    });

    if (res.ok) {
      setSubmitted(true);
    }
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
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-animated mb-4 leading-tight pb-1">
            Request a Custom Quote
          </h1>

          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            Let us know your requirements — we’ll get back with a tailored
            proposal.
          </p>
        </motion.div>
      </section>

      {/* Form */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-blue-50 p-8 rounded-xl shadow-lg"
        >
          {submitted ? (
            <div className="text-center text-green-600 text-xl font-semibold">
              Thank you! We’ve received your request.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  name="location"
                  placeholder="Project Location"
                  value={form.location}
                  onChange={handleChange}
                  className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <input
                name="projectType"
                placeholder="Project Type (e.g. Residential, Commercial)"
                value={form.projectType}
                onChange={handleChange}
                className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                name="budget"
                placeholder="Estimated Budget (INR)"
                value={form.budget}
                onChange={handleChange}
                className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                placeholder="Describe your project requirements..."
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-all"
              >
                Submit Quote Request
              </button>
            </form>
          )}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
