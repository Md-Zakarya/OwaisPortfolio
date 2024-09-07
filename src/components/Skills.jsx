import React from 'react';
import { motion } from 'framer-motion'; // For subtle animations
import { FaPython, FaProjectDiagram } from 'react-icons/fa'; // Example icons
import { SiTensorflow, SiKeras, SiOpencv, SiPandas, SiNumpy } from 'react-icons/si';

const Skills = () => {
  // Array of skill data, each with a skill name, icon, and proficiency level
  const skillData = [
    { name: 'Python', icon: <FaPython size={40} />, level: 90 }, // Skill proficiency percentage
    { name: 'TensorFlow', icon: <SiTensorflow size={40} />, level: 80 },
    { name: 'Keras', icon: <SiKeras size={40} />, level: 75 },
    { name: 'OpenCV', icon: <SiOpencv size={40} />, level: 85 },
    { name: 'Gradio', icon: <FaProjectDiagram size={40} />, level: 70 },
    { name: 'Pandas', icon: <SiPandas size={40} />, level: 95 },
    { name: 'NumPy', icon: <SiNumpy size={40} />, level: 85 },
  ];

  return (
    <div id="skills" className="h-screen bg-white py-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
          {skillData.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }} // Subtle hover scale effect
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <div className="text-blue-500 mb-4">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <span className="text-xl font-medium text-gray-700 mb-2">{skill.name}</span>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-2 mb-4" style={{ width: '80%' }}>
                <motion.div
                  className="bg-gradient-to-r from-blue-400 to-green-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }} // Dynamic width based on proficiency level
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
              </div>

              {/* Skill Proficiency Percentage */}
              <span className="text-sm text-gray-600">{skill.level}% proficient</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
