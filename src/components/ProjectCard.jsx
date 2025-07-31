import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaEye, FaHeart, FaShare, FaMapMarkerAlt, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleShare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Share functionality would go here
    console.log("Share project:", project.name);
  };

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

  const getCategoryColor = (category) => {
    const colors = {
      residential: "from-brand-400 to-brand-600",
      commercial: "from-brand-500 to-brand-700",
      interior: "from-brand-300 to-brand-500",
      urban: "from-brand-600 to-brand-800",
    };
    return colors[category] || "from-brand-500 to-brand-600";
  };

  const getCategoryIcon = (category) => {
    const icons = {
      residential: "🏠",
      commercial: "🏢",
      interior: "🎨",
      urban: "🏙️",
    };
    return icons[category] || "🏗️";
  };

  const projectCategory = getProjectCategory(project.name);

  return (
    <motion.div
      className="group relative bg-white rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-500 overflow-hidden border border-neutral-100"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700"
          whileHover={{ scale: 1.1 }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(projectCategory)} shadow-glow`}>
            <span>{getCategoryIcon(projectCategory)}</span>
            {projectCategory.charAt(0).toUpperCase() + projectCategory.slice(1)}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <motion.button
            onClick={handleLike}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isLiked 
                ? "bg-red-500 text-white shadow-glow" 
                : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaHeart className={`text-sm ${isLiked ? "fill-current" : ""}`} />
          </motion.button>
          
          <motion.button
            onClick={handleShare}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 flex items-center justify-center transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaShare className="text-sm" />
          </motion.button>
        </div>

        {/* View Details Button */}
        <motion.div
          className="absolute bottom-4 left-4 right-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to={`/projects/${project.slug}`}
            className="block w-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white py-3 px-6 rounded-xl text-center font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              <FaEye className="text-sm" />
              View Details
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Project Info */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-heading font-semibold text-black mb-2 group-hover:text-brand-600 transition-colors duration-300">
              {project.name}
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-sm text-neutral-500">
            <FaMapMarkerAlt className="text-brand-500" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-neutral-500">
            <FaCalendarAlt className="text-brand-500" />
            <span>2024</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-neutral-500">
            <FaBuilding className="text-brand-500" />
            <span>2,500 sq ft</span>
          </div>
        </div>

        {/* Tags */}
        {project.details && project.details.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.details.slice(0, 3).map((detail, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-brand-50 text-brand-600 text-xs font-medium rounded-full border border-brand-100"
              >
                {detail.title}
              </span>
            ))}
            {project.details.length > 3 && (
              <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
                +{project.details.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Progress Bar (if applicable) */}
        {project.progress && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-black">Progress</span>
              <span className="text-sm text-brand-600 font-semibold">{project.progress}%</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-brand-500 to-brand-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${project.progress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </div>
        )}

        {/* Status Badge */}
        {project.status && (
          <div className="flex justify-between items-center">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
              project.status === 'completed' 
                ? 'bg-green-100 text-green-700' 
                : project.status === 'in-progress'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-blue-100 text-blue-700'
            }`}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
            
            {/* Client Rating */}
            {project.rating && (
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaHeart
                    key={i}
                    className={`w-3 h-3 ${
                      i < project.rating 
                        ? "text-yellow-400 fill-current" 
                        : "text-neutral-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-500/20 rounded-3xl transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;
