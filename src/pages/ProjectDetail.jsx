import React, { useState, useEffect, memo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaBuilding,
  FaPhone,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";
import projects from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ===== Memoized Tab Components =====
const OverviewTab = memo(({ project }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
    <div className="lg:col-span-2">
      <h3 className="text-3xl font-heading font-bold text-black mb-6">
        Project Overview
      </h3>
      <div className="prose prose-lg max-w-none">
        <p className="text-neutral-600 leading-relaxed mb-6">
          {project.description}
        </p>
        {project.longDescription && (
          <p className="text-neutral-600 leading-relaxed mb-6">
            {project.longDescription}
          </p>
        )}
      </div>
    </div>

    <div>
      <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-3xl p-8 text-white">
        <h4 className="text-2xl font-heading font-bold mb-6">Get in Touch</h4>
        <p className="text-white/80 mb-6">
          Interested in this project? Let's discuss how we can bring your vision
          to life.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FaPhone className="text-brand-300" />
            <span>+91 98909 33772</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-brand-300" />
            <span>impact_designassociates@rediffmail.com</span>
          </div>
        </div>
        <motion.button
          className="w-full mt-6 bg-white text-brand-600 px-6 py-3 rounded-xl font-semibold hover:bg-neutral-100 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Start Your Project
        </motion.button>
      </div>
    </div>
  </div>
));

const SpecificationsTab = memo(({ project, projectCategory }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div>
      <h3 className="text-3xl font-heading font-bold text-black mb-6">
        Technical Specifications
      </h3>
      <div className="space-y-6">
        {[
          { label: "Project Type", value: projectCategory },
          { label: "Location", value: project.location },
          { label: "Size", value: "2,500 sq ft" },
          { label: "Completion Date", value: "2024" },
          { label: "Architect", value: "Impact Design Associates" },
          { label: "Client", value: "Private Client" },
        ].map((spec, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center py-4 border-b border-neutral-200"
          >
            <span className="font-semibold text-black">{spec.label}</span>
            <span className="text-neutral-600">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-3xl font-heading font-bold text-black mb-6">
        Materials & Features
      </h3>
      <div className="space-y-4">
        {[
          "Premium Concrete & Steel Structure",
          "Energy-Efficient Glass Windows",
          "Sustainable Wood Flooring",
          "Smart Home Automation",
          "Solar Panel Integration",
          "Rainwater Harvesting System",
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <FaCheckCircle className="text-brand-500 flex-shrink-0" />
            <span className="text-neutral-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
));

const GalleryTab = memo(({ project, openModal }) => (
  <div>
    <h3 className="text-3xl font-heading font-bold text-black mb-8">
      Project Gallery
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {project.gallery?.map((img, idx) => (
        <div
          key={idx}
          className="aspect-square rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 cursor-pointer"
          onClick={() => openModal(img, false)}
        >
          <img
            src={img}
            alt={`${project.name} - ${idx + 1}`}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      ))}

      {project.video && (
        <div
          className="aspect-video rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 cursor-pointer col-span-full md:col-span-2 lg:col-span-3"
          onClick={() => openModal(project.video, true)}
        >
          <div className="relative w-full h-full bg-black flex items-center justify-center">
            <span className="text-white text-xl font-semibold">▶ Play Video</span>
          </div>
        </div>
      )}

      {!project.gallery && !project.video && (
        <div className="col-span-full text-center py-12">
          <p className="text-neutral-600">Gallery images coming soon...</p>
        </div>
      )}
    </div>
  </div>
));

const ProjectDetail = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isVideo, setIsVideo] = useState(false);

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) window.scrollTo(0, 0);
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Project Not Found</h1>
          <p className="text-neutral-600 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/projects"
            className="bg-gradient-to-r from-brand-500 to-brand-600 text-white px-8 py-3 rounded-full hover:from-brand-600 hover:to-brand-700 transition-all duration-300"
          >
            Back to Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "gallery", label: "Gallery" },
    { id: "specifications", label: "Specifications" },
  ];

  const getProjectCategory = (name) => {
    const lower = name.toLowerCase();
    if (lower.includes("residence") || lower.includes("home")) return "Residential";
    if (lower.includes("center") || lower.includes("office")) return "Commercial";
    return "Residential";
  };

  const projectCategory = getProjectCategory(project.name);
  const relatedProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  // Open Modal
  const openModal = (content, video = false) => {
    setModalContent(content);
    setIsVideo(video);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-50 via-white to-brand-50/30 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-500/5 to-brand-600/5"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="mb-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 transition-colors duration-300"
            >
              <FaArrowLeft className="text-sm" /> Back to Projects
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-blue-600 bg-gradient-to-r from-brand-500 to-brand-600 shadow-glow">
                  {projectCategory}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-black mb-6 leading-tight">
                {project.name}
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">{project.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: FaMapMarkerAlt, label: "Location", value: project.location },
                  { icon: FaBuilding, label: "Size", value: "25,000 sq ft" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-glow">
                      <stat.icon className="text-blue-600 text-lg" />
                    </div>
                    <div className="text-sm text-neutral-500 mb-1">{stat.label}</div>
                    <div className="font-semibold text-black">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-soft">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-neutral-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => activeTab !== tab.id && setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-brand-500 to-brand-600 text-blue-600 shadow-glow"
                    : "text-neutral-600 hover:text-black hover:bg-neutral-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && <OverviewTab project={project} />}
          {activeTab === "gallery" && <GalleryTab project={project} openModal={openModal} />}
          {activeTab === "specifications" && (
            <SpecificationsTab project={project} projectCategory={projectCategory} />
          )}
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-display font-bold text-black mb-4">
                Related Projects
              </h2>
              <p className="text-xl text-neutral-600">Explore more of our work</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((rp, idx) => (
                <div key={rp.slug} className="bg-white rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden">
                  <Link to={`/projects/${rp.slug}`}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={rp.image}
                        alt={rp.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-semibold text-black mb-2">
                        {rp.name}
                      </h3>
                      <p className="text-neutral-600 text-sm">{rp.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-start justify-center p-4 pt-24 overflow-auto"
          onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
        >
          <div className="relative max-w-6xl w-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-white text-3xl font-bold z-50"
            >
              &times;
            </button>
            {isVideo ? (
              <video
                src={modalContent}
                controls
                autoPlay
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
            ) : (
              <img
                src={modalContent}
                alt="Preview"
                className="w-full max-h-[80vh] object-contain rounded-2xl"
                loading="lazy"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
