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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    area: "",
    amenities: [],
  });

  const [quote, setQuote] = useState(null);

  const amenitiesOptions = [
    "Smart Home",
    "Solar Panels",
    "Swimming Pool",
    "Landscaping",
    "Premium Materials",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updated = checked
        ? [...formData.amenities, value]
        : formData.amenities.filter((a) => a !== value);
      setFormData({ ...formData, amenities: updated });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const calculateQuote = () => {
    const baseRate = 1500; // per sq.ft.
    const area = parseFloat(formData.area) || 0;
    const amenityCost = formData.amenities.length * 100000;
    const estimated = area * baseRate + amenityCost;
    setQuote(estimated);
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
            Estimate Your Dream Project
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            Get an instant quote based on your project preferences.
          </p>
        </motion.div>
      </section>

      {/* Quote Form */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            calculateQuote();
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid grid-cols-1 gap-6 bg-blue-50 p-8 rounded-xl shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Project Type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Mixed Use">Mixed Use</option>
            </select>

            <input
              type="number"
              name="area"
              required
              placeholder="Total Area (in sq.ft.)"
              value={formData.area}
              onChange={handleChange}
              className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="font-semibold block mb-2">Select Amenities</label>
            <div className="grid md:grid-cols-3 gap-4">
              {amenitiesOptions.map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={item}
                    checked={formData.amenities.includes(item)}
                    onChange={handleChange}
                    className="accent-blue-600"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-all"
          >
            Get Quote Estimate
          </button>

          {quote && (
            <p className="text-blue-700 font-medium text-center pt-2 text-xl">
              Estimated Cost: ₹{quote.toLocaleString("en-IN")}
            </p>
          )}
        </motion.form>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
