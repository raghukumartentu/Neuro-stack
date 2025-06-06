import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/raghukumartentu",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/raghukumartentu",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:rk25raghukumar@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-portfolio-dark to-portfolio-burgundy relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(45deg, transparent, rgba(56, 178, 172, 0.1), transparent)",
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold gradient-text mb-4"
            >
              Raghukumar
            </motion.h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Passionate Software developer creating beautiful, functional web
              applications that provide exceptional user experiences.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{
                    scale: 1.2,
                    y: -3,
                    boxShadow: "0 10px 25px rgba(56, 178, 172, 0.3)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  viewport={{ once: true }}
                  className="p-3 bg-portfolio-slate/30 rounded-full text-portfolio-teal hover:bg-portfolio-teal hover:text-white transition-all duration-300 backdrop-blur-md border border-portfolio-teal/20"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: "#ff8c00" }}
                    className="text-gray-300 hover:text-portfolio-orange transition-all duration-300 block"
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white mb-6">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <motion.p
                whileHover={{ x: 5 }}
                className="text-gray-300 hover:text-portfolio-mint transition-all duration-300"
              >
                rk25raghukumar@gmail.com
              </motion.p>
              <motion.p
                whileHover={{ x: 5 }}
                className="text-gray-300 hover:text-portfolio-mint transition-all duration-300"
              >
                +91 (939) 245-9395
              </motion.p>
              <motion.p
                whileHover={{ x: 5 }}
                className="text-gray-300 hover:text-portfolio-mint transition-all duration-300"
              >
                Hyderabad, India
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-full h-0.5 bg-gradient-to-r from-transparent via-portfolio-teal to-transparent my-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <motion.p
            whileHover={{ scale: 1.02 }}
            className="text-gray-400 text-center font-bold md:text-left mb-4 md:mb-0 flex items-center"
          >
            Made by R@gh(_)k(_)m@r
          </motion.p>

          <motion.p
            whileHover={{ scale: 1.02 }}
            className="text-gray-400 text-center md:text-right"
          >
            © 2025 All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
