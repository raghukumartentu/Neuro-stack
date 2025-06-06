import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rk25raghukumar@gmail.com",
      href: "mailto:rk25raghukumar@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 93924 59395",
      href: "tel:+919392459395",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-portfolio-dark to-portfolio-slate relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              background: `linear-gradient(135deg, ${
                ["#ff8c00", "#38b2ac", "#81e6d9"][i]
              }, transparent)`,
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              right: `${-50 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's discuss your next project or just say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Feel free to reach out to me for any inquiries, collaborations,
                or just a friendly chat about technology and development.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 bg-portfolio-slate/30 backdrop-blur-md rounded-lg border border-portfolio-teal/20"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 p-3 bg-portfolio-teal/20 rounded-lg"
                >
                  <info.icon className="text-portfolio-teal" size={24} />
                </motion.div>
                <div>
                  <p className="text-sm text-portfolio-mint font-medium">
                    {info.label}
                  </p>
                  <a
                    href={info.href}
                    className="text-white hover:text-portfolio-orange transition-colors duration-300"
                  >
                    {info.value}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-portfolio-slate/30 backdrop-blur-md rounded-xl p-8 border border-portfolio-teal/20"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-portfolio-mint mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-portfolio-dark/50 border border-portfolio-teal/30 rounded-lg text-white placeholder-gray-400 focus:border-portfolio-orange focus:ring-2 focus:ring-portfolio-orange/20 transition-all duration-300"
                    placeholder="Raghukumar"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-portfolio-mint mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-portfolio-dark/50 border border-portfolio-teal/30 rounded-lg text-white placeholder-gray-400 focus:border-portfolio-orange focus:ring-2 focus:ring-portfolio-orange/20 transition-all duration-300"
                    placeholder="Tentu"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-portfolio-mint mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-portfolio-dark/50 border border-portfolio-teal/30 rounded-lg text-white placeholder-gray-400 focus:border-portfolio-orange focus:ring-2 focus:ring-portfolio-orange/20 transition-all duration-300"
                  placeholder="rk25raghukumar@gmail.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-portfolio-mint mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-portfolio-dark/50 border border-portfolio-teal/30 rounded-lg text-white placeholder-gray-400 focus:border-portfolio-orange focus:ring-2 focus:ring-portfolio-orange/20 transition-all duration-300"
                  placeholder="Project Collaboration"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-portfolio-mint mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-portfolio-dark/50 border border-portfolio-teal/30 rounded-lg text-white placeholder-gray-400 focus:border-portfolio-orange focus:ring-2 focus:ring-portfolio-orange/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-portfolio-orange to-portfolio-rust text-white rounded-lg font-semibold hover:from-portfolio-rust hover:to-portfolio-burgundy transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
