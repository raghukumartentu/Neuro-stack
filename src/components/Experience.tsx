import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building, GraduationCap, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experiences = [
    {
      title: "Software Developer",
      company: "Leewayhertz Technologies Pvt. Ltd.",
      location: "Gurugram, Haryana",
      period: "Dec 2023 - Present",
      description:
        "In my role as a Software Developer at LeewayHertz, I was promoted to focus on AI-powered solutions for full stack web applications. By integrating Generative AI tools, I enhanced application efficiency, automation, and user experience. Utilizing technologies like OpenAI APIs, I built smart features, automated workflows, and improved decision-making within web applications.",
      achievements: [
        "Increased application performance by 40%",
        "Led migration to microservices architecture",
        "Mentored 3 junior developers",
      ],
      technologies: [
        "Python",
        "Typescript",
        "MERN Stack",
        "AWS",
        "OpenAI",
        "Docker",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Leewayhertz Technologies Pvt. Ltd.",
      location: "Gurugram, Haryana",
      period: "Dec 2022 - Nov 2023",
      description:
        "In my role as a Full Stack Developer at LeewayHertz in India, I developed end-to-end web applications using MERN stack technologies. Collaborating with teams, I optimized performance of scalable APIs and user interfaces, contributing to continuous improvements in the development lifecycle.",
      achievements: [
        "Built and maintained multiple web applications",
        "Implemented responsive design system",
        "Built RESTful APIs for data management",
      ],
      technologies: [
        "React",
        "Node.js",
        "Tailwind CSS",
        "REST APIs",
        "MongoDB",
      ],
    },
    {
      title: "Trainee Full Stack Developer",
      company: "Leewayhertz Technologies Pvt. Ltd.",
      location: "Gurugram, Haryana",
      period: "Sept 2021 - Nov 2022",
      description:
        "In my role as a Trainee Full-stack Developer at LeewayHertz, I was trained in full stack web development using the MERN stack. I gained hands-on experience in building web applications, developing REST APIs, and creating responsive user interfaces. Working closely with teams, I understood requirements, fixed bugs, and improved application performance.",
      achievements: [
        "Completede MERN stack training program",
        "Contributed to multiple web projects",
        "Learned modern JavaScript frameworks",
      ],
      technologies: [
        "JavaScript",
        "HTML/CSS",
        "Git",
        "React",
        "Node.js",
        "MongoDB",
        "Bitbucket",
        "Postman",
        "Confluence",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Technology",
      school: "Javaharlal Nehru Technological University",
      location: "Kakinada, Andhra Pradesh",
      period: "2017 - 2019",
      description:
        "Specialized in Thermal Engineering. Graduated with honors and completed thesis on thermal energy storage systems.",
      achievements: [
        "GPA: 76%",
        "Top 10% of the class",
        "Published 2 research papers",
      ],
      subjects: ["Heat Transfer", "Thermodynamics", "Fluid Mechanics"],
    },
    {
      degree: "Bachelor of Technology",
      school: "Jawaharlal Nehru Technological University",
      location: "Kakinada, Andhra Pradesh",
      period: "2014 - 2017",
      description:
        "Comprehensive study of Mechanical Engineering principles. Focused on design, manufacturing and mechanical systems.",
      achievements: [
        "GPA: 73%",
        "Top 2 of the class",
        "Published 1 research paper",
      ],
      subjects: ["Auto Cad", "Thermodynamics", "Machine Design"],
    },
  ];

  const TabButton = ({ id, label, icon: Icon, isActive, onClick }) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(id)}
      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
        isActive
          ? "bg-portfolio-orange text-white"
          : "bg-white dark:bg-portfolio-slate/50 text-gray-700 dark:text-portfolio-mint hover:bg-portfolio-teal hover:text-white border border-gray-200 dark:border-portfolio-teal/30"
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </motion.button>
  );

  const TimelineItem = ({ item, index, type }) => {
    const isLeft = index % 2 === 0;
    const Icon = type === "experience" ? Building : GraduationCap;
    const colorClass =
      type === "experience" ? "portfolio-orange" : "portfolio-teal";

    return (
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        viewport={{ once: true }}
        className={`relative flex items-center w-full ${
          isLeft ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Content Card */}
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className={`w-5/12 ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}
        >
          <div className="bg-white dark:bg-portfolio-slate/30 backdrop-blur-md rounded-xl p-6 border border-gray-200 dark:border-portfolio-teal/20 shadow-lg">
            <div
              className={`flex items-start gap-4 mb-4 ${
                isLeft ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className={`p-3 bg-${colorClass}/20 rounded-lg`}>
                <Icon className={`w-6 h-6 text-${colorClass}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {type === "experience" ? item.title : item.degree}
                </h3>
                <p className={`text-${colorClass} font-semibold text-lg mb-1`}>
                  {type === "experience" ? item.company : item.school}
                </p>
                <div
                  className={`flex items-center gap-4 text-sm text-gray-500 dark:text-portfolio-mint ${
                    isLeft ? "justify-end" : "justify-start"
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {item.period}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-justify text-base">
              {item.description}
            </p>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-left">
                {type === "experience" ? "Key Achievements:" : "Achievements:"}
              </h4>
              <ul
                className={`list-disc text-gray-600 dark:text-gray-300 space-y-1 ${
                  isLeft ? "list-inside text-left" : "list-inside text-left"
                }`}
              >
                {item.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div
              className={`flex flex-wrap gap-2 ${
                isLeft ? "justify-end" : "justify-start"
              }`}
            >
              {(type === "experience" ? item.technologies : item.subjects).map(
                (tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 bg-${colorClass}/20 text-${colorClass} rounded-full text-sm font-medium border border-${colorClass}/30`}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* Timeline Dot */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.3 }}
          className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-${colorClass} rounded-full border-4 border-white dark:border-portfolio-dark z-10 shadow-lg`}
        />

        {/* Empty space for the other side */}
        <div className="w-5/12"></div>
      </motion.div>
    );
  };

  return (
    <section
      id="experience"
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
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional experience and educational background
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-16"
        >
          <TabButton
            id="experience"
            label="Experience"
            icon={Building}
            isActive={activeTab === "experience"}
            onClick={setActiveTab}
          />
          <TabButton
            id="education"
            label="Education"
            icon={GraduationCap}
            isActive={activeTab === "education"}
            onClick={setActiveTab}
          />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-portfolio-orange to-portfolio-teal rounded-full"
          />

          {/* Timeline Items */}
          <div className="space-y-16">
            {activeTab === "experience" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {experiences.map((exp, index) => (
                  <TimelineItem
                    key={index}
                    item={exp}
                    index={index}
                    type="experience"
                  />
                ))}
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {education.map((edu, index) => (
                  <TimelineItem
                    key={index}
                    item={edu}
                    index={index}
                    type="education"
                  />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
