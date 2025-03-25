import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Bachelor of Technology in Computer Science 4th Year",
      company: "DBATU",
      duration: "Present",
      description: "Studying Computer Science fundamentals and advanced programming concepts.",
      type: "education"
    },
    {
      title: "Web Developer - Intern",
      company: "WebHub Technology, Pune",
      duration: "March 2025 - Present",
      description: "Developing and maintaining modern web applications using React.js, TailwindCSS, Node.js, Express.js, MongoDB and other cutting-edge technologies.",
      type: "work"
    }
  ];

  return (
    <div id="experience" className="min-h-screen py-20 relative">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-6">
            Experience & Education
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            My professional journey and educational background.
          </p>
        </motion.section>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-400 to-purple-600" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} items-center md:items-stretch mb-8`}
            >
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 m-4 md:m-10 relative group rounded-lg shadow-lg"
                >
                  {/* Icon */}
                  <motion.div
                    className="absolute top-6 text-purple-400 text-2xl"
                    style={{ [index % 2 === 0 ? 'right' : 'left']: '-40px' }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                  </motion.div>

                  <h3 className="text-lg md:text-xl font-bold text-purple-400 mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-gray-400 mb-2">{exp.company}</h4>
                  <p className="text-sm text-purple-300 mb-3">{exp.duration}</p>
                  <p className="text-gray-300">{exp.description}</p>

                  {/* Decorative dot */}
                  <motion.div
                    className="absolute w-3 h-3 bg-purple-400 rounded-full"
                    style={{
                      top: '50%',
                      [index % 2 === 0 ? 'right' : 'left']: '-1.5rem',
                      transform: 'translateY(-50%)',
                    }}
                    whileHover={{ scale: 1.5 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
