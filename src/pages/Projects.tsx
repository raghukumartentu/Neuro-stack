import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { projects as allProjects } from "../components/Projects";

const ProjectsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const projectsPerPage = 6;

  const filters = ["All", "Professional", "Personal"];

  // Filter projects based on category and search term
  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory =
      selectedFilter === "All" || project.category === selectedFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-portfolio-dark pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-portfolio-orange hover:text-portfolio-rust transition-colors duration-300 mb-6"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my complete portfolio of projects and creative solutions
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-portfolio-slate/50 border border-gray-200 dark:border-portfolio-teal/30 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-portfolio-orange"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedFilter(filter);
                  setCurrentPage(1);
                }}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedFilter === filter
                    ? "bg-portfolio-orange text-white"
                    : "bg-white dark:bg-portfolio-slate/50 text-gray-700 dark:text-portfolio-mint border border-gray-200 dark:border-portfolio-teal/30 hover:bg-portfolio-teal hover:text-white"
                }`}
              >
                {filter} (
                {selectedFilter === filter
                  ? filteredProjects.length
                  : allProjects.filter(
                      (p) => filter === "All" || p.category === filter
                    ).length}
                )
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-portfolio-slate/30 backdrop-blur-md rounded-xl overflow-hidden border border-gray-200 dark:border-portfolio-teal/20 shadow-lg group"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-portfolio-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {/* <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-portfolio-teal rounded-full text-white hover:bg-portfolio-orange transition-colors duration-300"
                  >
                    <Github size={20} />
                  </motion.a> */}
                  {project.githubUrl ? (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-portfolio-teal rounded-full text-white hover:bg-portfolio-orange transition-colors duration-300"
                    >
                      <Github size={20} />
                    </motion.a>
                  ) : (
                    <div
                      className="p-3 bg-gray-500/50 rounded-full text-white cursor-not-allowed opacity-50"
                      title="GitHub link not available"
                    >
                      <Github size={20} />
                    </div>
                  )}
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-portfolio-orange rounded-full text-white hover:bg-portfolio-teal transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-portfolio-orange transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-portfolio-teal/20 text-portfolio-teal rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-portfolio-slate/50 text-gray-700 dark:text-portfolio-mint rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center items-center gap-2"
          >
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white dark:bg-portfolio-slate/50 border border-gray-200 dark:border-portfolio-teal/30 rounded-lg text-gray-700 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-portfolio-teal hover:text-white transition-colors duration-300"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
                  currentPage === page
                    ? "bg-portfolio-orange text-white"
                    : "bg-white dark:bg-portfolio-slate/50 border border-gray-200 dark:border-portfolio-teal/30 text-gray-700 dark:text-white hover:bg-portfolio-teal hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white dark:bg-portfolio-slate/50 border border-gray-200 dark:border-portfolio-teal/30 rounded-lg text-gray-700 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-portfolio-teal hover:text-white transition-colors duration-300"
            >
              Next
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
