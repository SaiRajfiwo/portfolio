import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen  py-20 relative">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </motion.div>

        <div className="justify-center mr-72 ml-72">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 1px 4px rgba(0, 0, 0, 0)" }}
            className="space-y-6"
          >
            <div className="glass-card p-6 text-center">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Contact Information</h3>
              
              <div className="space-y-4 flex flex-col items-center justify-center">
                <motion.div 
                  className="flex items-center gap-4 text-gray-300"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FaEnvelope className="text-xl text-purple-400" />
                  <a href="mailto:shrimanwarsairaj@gmail.com" className="hover:text-purple-400 transition-colors">
                    shrimanwarsairaj@gmail.com
                  </a>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 text-gray-300"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FaPhone className="text-xl text-purple-400" />
                  <a href="tel:7028789385" className="hover:text-purple-400 transition-colors">
                    +91 7028789385
                  </a>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 text-gray-300"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FaMapMarkerAlt className="text-xl text-purple-400" />
                  <span>Pune, Maharashtra, India</span>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-purple-400 mb-4">Connect With Me</h4>
                <div className="flex gap-4 items-center justify-center">
                  <motion.a
                    href="https://linkedin.com/in/shrimanwarsairaj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin size={24} />
                  </motion.a>
                  <motion.a
                    href="https://github.com/SaiRajfiwo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub size={24} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;