import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const getCategoryColor = (category) => {
    const colors = {
      residential: "bg-gradient-to-br from-blue-500 to-blue-600",
      commercial: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      interior: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      urban: "bg-gradient-to-br from-teal-500 to-teal-600",
    };
    return colors[category] || "bg-gradient-to-br from-blue-500 to-blue-600";
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

  const projectCategory = project.category || "residential"; // fallback if not provided

  return (
    <motion.div
      className="group relative bg-white rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-500 overflow-hidden border border-neutral-100 cursor-pointer"
      whileHover={{ y: -6, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Link to={`/projects/${project.slug}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <motion.img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay and Category Badge */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute top-4 left-4">
            <span
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold text-white ${getCategoryColor(
                projectCategory
              )} shadow-lg`}
            >
              <span>{getCategoryIcon(projectCategory)}</span>
              {projectCategory.charAt(0).toUpperCase() + projectCategory.slice(1)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Project Info */}
          <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>

          {/* Project Details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <FaMapMarkerAlt className="text-blue-500 flex-shrink-0" />
              <span className="truncate">{project.location}</span>
            </div>
            
            {/* <div className="flex items-center gap-2 text-sm text-neutral-500">
              <FaBuilding className="text-blue-500 flex-shrink-0" />
              <span className="truncate">{project.size}</span>
            </div> */}
          </div>

          {/* Tags */}
          {project.details && project.details.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.details.slice(0, 3).map((detail, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
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

          {/* Status Badge & Rating */}
          {project.status && (
            <div className="flex justify-between items-center pt-4 border-t border-neutral-100">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : project.status === "in-progress"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;