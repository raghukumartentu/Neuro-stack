import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsData = [
    { name: "JavaScript", level: 90, category: "Languages" },
    { name: "TypeScript", level: 60, category: "Languages" },
    { name: "Python", level: 60, category: "Languages" },
    { name: "React.js", level: 85, category: "Frontend" },
    { name: "Tailwind Css", level: 85, category: "Frontend" },
    { name: "HTML5", level: 85, category: "Frontend" },
    { name: "CSS3", level: 85, category: "Frontend" },
    { name: "Bootstrap", level: 85, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Django", level: 65, category: "Backend" },
    { name: "MongoDB", level: 90, category: "Database" },
    { name: "MySql", level: 70, category: "Database" },
    { name: "AWS", level: 65, category: "Cloud" },
    { name: "Docker", level: 70, category: "DevOps" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "Postman", level: 90, category: "Tools" },
    { name: "agile", level: 90, category: "Tools" },
  ];

  const categories = [
    "All",
    "Languages",
    "Frontend",
    "Backend",
    "Database",
    "Cloud",
    "DevOps",
    "Tools",
  ];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gradient-to-br dark:from-portfolio-slate dark:to-portfolio-dark"
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-portfolio-orange text-white"
                  : "bg-white dark:bg-portfolio-slate/50 text-gray-700 dark:text-portfolio-mint hover:bg-portfolio-teal hover:text-white border border-gray-200 dark:border-portfolio-teal/30"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-portfolio-dark/50 backdrop-blur-md rounded-xl p-6 border border-gray-200 dark:border-portfolio-teal/20 shadow-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-portfolio-orange font-bold">
                  {skill.level}%
                </span>
              </div>

              <div className="relative">
                <div className="w-full bg-gray-200 dark:bg-portfolio-slate/50 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-portfolio-orange to-portfolio-teal rounded-full relative"
                    whileHover={{
                      boxShadow: [
                        "0 0 5px #38b2ac",
                        "0 0 10px #38b2ac",
                        "0 0 15px #38b2ac",
                        "0 0 20px #38b2ac",
                      ],
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-full"
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "100%" }}
                      transition={{
                        duration: 2,
                        delay: index * 0.1,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </div>
              </div>

              <div className="mt-2">
                <span className="text-sm text-gray-500 dark:text-portfolio-mint">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
