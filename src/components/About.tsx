import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Rocket, Brain, Zap } from "lucide-react";

const About = () => {
  const jobTitles = [
    "Software Engineer",
    "Fullstack Developer",
    "AI Integration Specialist",
    "Gen AI Enthusiast",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % jobTitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Delivering high-quality solutions within tight deadlines",
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description:
        "Analyzing complex problems and creating innovative solutions",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gradient-to-br dark:from-portfolio-dark dark:to-portfolio-slate"
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and bringing ideas to
            life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                I'm a{" "}
                <motion.span
                  key={currentTitleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="gradient-text inline-block"
                >
                  {jobTitles[currentTitleIndex]}
                </motion.span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                With over 4+ years of experience in software development, I
                specialize in creating robust web applications and integrating
                cutting-edge AI technologies. My passion lies in solving complex
                problems and delivering exceptional user experiences.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe in continuous learning and staying up-to-date with the
                latest technologies. When I'm not coding, you can find me
                exploring new frameworks, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-portfolio-orange text-white rounded-lg hover:bg-portfolio-rust transition-all duration-300 font-semibold"
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 dark:bg-portfolio-slate/30 backdrop-blur-md rounded-xl p-6 border border-gray-200 dark:border-portfolio-teal/20 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-portfolio-orange/20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <item.icon className="w-6 h-6 text-portfolio-orange" />
                </motion.div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
