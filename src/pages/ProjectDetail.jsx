import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaArrowLeft, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaBuilding, 
  FaUsers, 
  FaHeart, 
  FaShare, 
  FaDownload,
  FaEye,
  FaStar,
  FaCheckCircle,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";
import projects from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    if (!project) {
      // Handle project not found
      return;
    }
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Project Not Found</h1>
          <p className="text-neutral-600 mb-8">The project you're looking for doesn't exist.</p>
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
    { id: "team", label: "Team" },
  ];

  // Get a default category based on project name or use a fallback
  const getProjectCategory = (projectName) => {
    const name = projectName.toLowerCase();
    if (name.includes('elite') || name.includes('residence') || name.includes('home')) {
      return 'residential';
    } else if (name.includes('palms') || name.includes('center') || name.includes('office')) {
      return 'commercial';
    } else {
      return 'residential'; // default fallback
    }
  };

  const projectCategory = getProjectCategory(project.name);

  const relatedProjects = projects
    .filter(p => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-50 via-white to-brand-50/30 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-500/5 to-brand-600/5"></div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-32 h-32 border border-brand-500/20 rounded-full"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 transition-colors duration-300"
            >
              <FaArrowLeft className="text-sm" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-blue-600 bg-gradient-to-r from-brand-500 to-brand-600 shadow-glow">
                  {projectCategory.charAt(0).toUpperCase() + projectCategory.slice(1)}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-black mb-6 leading-tight">
                {project.name}
              </h1>
              
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Project Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: FaMapMarkerAlt, label: "Location", value: project.location },
                  { icon: FaCalendarAlt, label: "Date", value: "2024" },
                  { icon: FaBuilding, label: "Size", value: "2,500 sq ft" },
                  { icon: FaUsers, label: "Team", value: "5 Members" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-glow">
                      <stat.icon className="text-blue-600 text-lg" />
                    </div>
                    <div className="text-sm text-neutral-500 mb-1">{stat.label}</div>
                    <div className="font-semibold text-black">{stat.value}</div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              {/* <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isLiked 
                      ? "bg-red-500 text-white shadow-glow" 
                      : "bg-white text-black border border-neutral-200 hover:border-brand-500"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaHeart className={isLiked ? "fill-current" : ""} />
                  {isLiked ? "Liked" : "Like"}
                </motion.button>
                
                <motion.button
                  className="flex items-center gap-2 px-6 py-3 bg-white text-black border border-neutral-200 hover:border-brand-500 rounded-xl font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaShare />
                  Share
                </motion.button>
                
                <motion.button
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white rounded-xl font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload />
                  Download PDF
                </motion.button>
              </div> */}
            </div>

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-soft">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2 mb-12 border-b border-neutral-200"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-brand-500 to-brand-600 text-blue-600 shadow-glow"
                    : "text-neutral-600 hover:text-black hover:bg-neutral-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-[400px]"
          >
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-heading font-bold text-black mb-6">Project Overview</h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    {project.longDescription && (
                      <p className="text-neutral-600 leading-relaxed mb-6">
                        {project.longDescription}
                      </p>
                    )}
                    
                    {/* Features */}
                    {project.details && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {project.details.map((detail, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <span className="text-2xl">{detail.icon}</span>
                            <div>
                              <h4 className="font-semibold text-black mb-1">{detail.title}</h4>
                              <p className="text-neutral-600 text-sm">{detail.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-3xl p-8 text-white">
                    <h4 className="text-2xl font-heading font-bold mb-6">Get in Touch</h4>
                    <p className="text-white/80 mb-6">
                      Interested in this project? Let's discuss how we can bring your vision to life.
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
            )}

            {activeTab === "gallery" && (
              <div>
                <h3 className="text-3xl font-heading font-bold text-black mb-8">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.gallery ? project.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="aspect-square rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`${project.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </motion.div>
                  )) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-neutral-600">Gallery images coming soon...</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-heading font-bold text-black mb-6">Technical Specifications</h3>
                  <div className="space-y-6">
                    {[
                      { label: "Project Type", value: projectCategory },
                      { label: "Location", value: project.location },
                      { label: "Size", value: "2,500 sq ft" },
                      { label: "Completion Date", value: "2024" },
                      { label: "Architect", value: "Impact Design Associates" },
                      { label: "Client", value: "Private Client" },
                    ].map((spec, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex justify-between items-center py-4 border-b border-neutral-200"
                      >
                        <span className="font-semibold text-black">{spec.label}</span>
                        <span className="text-neutral-600">{spec.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-heading font-bold text-black mb-6">Materials & Features</h3>
                  <div className="space-y-4">
                    {[
                      "Premium Concrete & Steel Structure",
                      "Energy-Efficient Glass Windows",
                      "Sustainable Wood Flooring",
                      "Smart Home Automation",
                      "Solar Panel Integration",
                      "Rainwater Harvesting System"
                    ].map((material, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <FaCheckCircle className="text-brand-500 flex-shrink-0" />
                        <span className="text-neutral-700">{material}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "team" && (
              <div>
                <h3 className="text-3xl font-heading font-bold text-black mb-8">Project Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { name: "Sarah Johnson", role: "Lead Architect", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400" },
                    { name: "Michael Chen", role: "Structural Engineer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
                    { name: "Emily Rodriguez", role: "Interior Designer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" },
                  ].map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-soft">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-xl font-heading font-semibold text-black mb-2">{member.name}</h4>
                      <p className="text-neutral-600">{member.role}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
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
              <h2 className="text-4xl font-display font-bold text-black mb-4">Related Projects</h2>
              <p className="text-xl text-neutral-600">Explore more of our work</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Link to={`/projects/${relatedProject.slug}`}>
                    <div className="bg-white rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={relatedProject.image}
                          alt={relatedProject.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-heading font-semibold text-black mb-2">
                          {relatedProject.name}
                        </h3>
                        <p className="text-neutral-600 text-sm">
                          {relatedProject.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetail;