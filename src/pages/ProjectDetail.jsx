import React, { useState, useEffect, memo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaBuilding,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import projects from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ===== Memoized Tab Components =====
const OverviewTab = memo(({ project }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
    <div className="lg:col-span-2">
      <h3 className="text-3xl font-heading font-bold text-gray-900 mb-6">
        Project Overview
      </h3>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 leading-relaxed mb-6">
          {project.description}
        </p>
        {project.longDescription && (
          <p className="text-gray-600 leading-relaxed mb-6">
            {project.longDescription}
          </p>
        )}
      </div>
    </div>

    <div className="relative">
      <div className="sticky top-20">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white shadow-lg">
          <h4 className="text-2xl font-heading font-bold mb-6">Get in Touch</h4>
          <p className="text-white/80 mb-6">
            Interested in this project? Let's discuss how we can bring your
            vision to life.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaPhone className="text-white/70" />
              <span>+91 98909 33772</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-white/70" />
              <span>impact_designassociates@rediffmail.com</span>
            </div>
          </div>
          <Link to="/contact">
            <motion.button
              className="w-full mt-6 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 cursor-pointer"
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  </div>
));

const SpecificationsTab = memo(({ project, projectCategory }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div>
      <h3 className="text-3xl font-heading font-bold text-gray-900 mb-6">
        Technical Specifications
      </h3>
      <div className="space-y-6">
        {[
          { label: "Project Type", value: projectCategory },
          { label: "Location", value: project.location },
          { label: "Size", value: project.size },
        ].map((spec, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center py-4 border-b border-gray-200"
          >
            <span className="font-semibold text-gray-900">{spec.label}</span>
            <span className="text-gray-600">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
));

const GalleryTab = memo(({ project, openModal }) => (
  <div>
    <h3 className="text-3xl font-heading font-bold text-gray-900 mb-8">
      Project Gallery
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {project.gallery?.map((img, idx) => (
        <div
          key={idx}
          className="relative aspect-square rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 cursor-pointer group"
          onClick={() => openModal(img, false)}
        >
          <img
            src={img}
            alt={`${project.name} - ${idx + 1}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-xl font-semibold">View</span>
          </div>
        </div>
      ))}

      {project.video && (
        <div
          className="relative aspect-video rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 cursor-pointer col-span-full md:col-span-2 lg:col-span-3 group"
          onClick={() => openModal(project.video, true)}
        >
          <div className="w-full h-full bg-black flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 text-white text-xl font-semibold">
              ▶ Play Video
            </span>
          </div>
        </div>
      )}

      {!project.gallery && !project.video && (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-600">Gallery images coming soon...</p>
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

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -50]);

  useEffect(() => {
    if (project) window.scrollTo(0, 0);
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/projects"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
          >
            Back to Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // ✅ Updated category logic
  const getProjectCategory = (project) => {
    if (project.category) return project.category; // Use explicit category if available
    const lower = project.name.toLowerCase();
    if (lower.includes("residence") || lower.includes("home"))
      return "Residential";
    if (lower.includes("center") || lower.includes("office"))
      return "Commercial";
    return "Residential"; // final fallback
  };

  const projectCategory = getProjectCategory(project);
  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

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
      <section className="relative pt-32 pb-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/10 to-blue-50/10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
            >
              <FaArrowLeft className="text-sm" /> Back to Projects
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
                  {projectCategory}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
                {project.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-12 gap-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-semibold text-gray-900">
                      {project.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <FaBuilding className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Size</div>
                    <div className="font-semibold text-gray-900">
                      {project.size}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Image with Parallax */}
            <motion.div
              style={{ y: yParallax }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-soft-lg"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200">
            {[
              { id: "overview", label: "Overview" },
              { id: "gallery", label: "Gallery" },
              { id: "specifications", label: "Specifications" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative cursor-pointer ${
                  activeTab === tab.id
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-px left-0 w-full h-0.5 bg-blue-600"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === "overview" && <OverviewTab project={project} />}
            {activeTab === "gallery" && (
              <GalleryTab project={project} openModal={openModal} />
            )}
            {activeTab === "specifications" && (
              <SpecificationsTab
                project={project}
                projectCategory={projectCategory}
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                More Projects
              </h2>
              <p className="text-xl text-gray-600">
                Explore more of our stunning work
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/projects/${rp.slug}`}
                  className="block bg-white rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={rp.image}
                      alt={rp.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                      {rp.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{rp.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4 overflow-auto"
          onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-6xl w-full"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white text-4xl font-light z-50 hover:text-gray-300 transition cursor-pointer"
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
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
