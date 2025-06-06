import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Zbrain from "../assets/Zbrain_project.png";
import Pollpapa from "../assets/Pollpapa_project.png";
import Gettr from "../assets/Gettr_project.png";
import Mooday from "../assets/Mooday_project.png";
import Atlasclinic from "../assets/Atlasclinic_project.png";

export interface Projects {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
}

export const projects: Projects[] = [
  {
    id: 1,
    title: "Zbrain - AI Platform",
    description:
      "ZBrain – A modular GenAI platform combining RAG, agents, and knowledge bases to build intelligent, customizable AI assistants. I contributed to the development of the platform's core features, including RAG, agents, and knowledge bases.",
    image: Zbrain,
    technologies: [
      "MERN stack",
      "Python",
      "Typescript",
      "Django",
      "OpenAI",
      "LangChain",
      "Tailwindcss",
    ],
    category: "Professional",
    githubUrl: "",
    liveUrl: "https://app.zbrain.ai",
  },
  // {
  //   id: 2,
  //   title: "Task Management App",
  //   description:
  //     "A collaborative task management application with real-time updates and team collaboration features.",
  //   image:
  //     "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //   technologies: ["React", "Firebase", "Material-UI"],
  //   category: "Personal",
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com",
  // },
  {
    id: 3,
    title: "Pollpapa",
    description:
      "Pollpapa – A blockchain-based Mobile App for survey platform enabling transparent polling, real-time results, and token-based engagement. I contributed as a full-stack developer, leading backend development and implementing the end-to-end architecture for both the backend and the admin portal frontend.",
    image: Pollpapa,
    technologies: [
      "Node js",
      "Web3",
      "Mongo DB",
      "Express",
      "React",
      "Tailwindcss",
    ],
    category: "Professional",
    githubUrl: "",
    liveUrl: "https://anketa.com/",
  },
  // {
  //   id: 4,
  //   title: "Weather App",
  //   description:
  //     "Beautiful weather application with location-based forecasts and interactive maps.",
  //   image:
  //     "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //   technologies: ["React", "Weather API", "CSS Animations"],
  //   category: "Personal",
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com",
  // },
  {
    id: 5,
    title: "Gettr",
    description:
      "Gettr - A social media platform integrated with blockchain-based wallet and tipping system, enabling users to send and receive tokens seamlessly. I contributed as a full-stack developer.",
    image: Gettr,
    technologies: [
      "Node js",
      "Web3",
      "Mongo DB",
      "Express",
      "React",
      "Tailwindcss",
    ],
    category: "Professional",
    githubUrl: "",
    liveUrl: "https://gettr.com",
  },
  {
    id: 6,
    title: "Mooday",
    description:
      "Mooday – A mobile-based party and event management application designed to organize, invite, and track event activities. I contributed as a full-stack web developer, building the backend APIs and admin dashboard to manage events, users, and analytics.",
    image: Mooday,
    technologies: [
      "Node js",
      "Web3",
      "Mongo DB",
      "Express",
      "React",
      "Material UI",
    ],
    category: "Professional",
    githubUrl: "",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.agency.rant.moodyapp&hl=en_IE",
  },
  {
    id: 6,
    title: "Atlas Clinic",
    description:
      "Atlas Clinic – A healthcare platform for managing doctor appointments, patient schedules, and clinic operations. I contributed as a full-stack web developer, building APIs and the admin portal to streamline appointment booking and doctor availability.",
    image: Atlasclinic,
    technologies: [
      "Node js",
      "Web3",
      "Mongo DB",
      "Express",
      "React",
      "Material UI",
    ],
    category: "Professional",
    githubUrl: "",
    liveUrl: "https://atlasmultispecialityclinics.com/",
  },
];

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Professional", "Personal"];

  const filteredProjects =
    selectedFilter === "All"
      ? projects.slice(0, 4)
      : projects
          .filter((project) => project.category === selectedFilter)
          .slice(0, 4);

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gradient-to-br dark:from-portfolio-slate dark:to-portfolio-burgundy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(filter)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedFilter === filter
                  ? "bg-portfolio-orange text-white"
                  : "bg-white dark:bg-portfolio-slate/50 text-gray-700 dark:text-portfolio-mint border border-gray-200 dark:border-portfolio-teal/30 hover:bg-portfolio-teal hover:text-white"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-portfolio-orange to-portfolio-rust text-white rounded-lg font-semibold hover:from-portfolio-rust hover:to-portfolio-burgundy transition-all duration-300"
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
