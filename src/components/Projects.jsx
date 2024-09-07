import React from 'react';
import { motion } from 'framer-motion';
import tsdp from '../assets/tsdp.jpeg';
import STFN5 from '../assets/STFN5.png';
import gicp from '../assets/gicp.png';

const projects = [
  {
    title: 'Stock Analysis for NIFTY 50',
    description: 'Developed an LSTM-based neural network model to predict stock prices for NSE-listed companies using news headlines and sentiment analysis.',
    techStack: 'Python, TensorFlow, Keras, Pandas, NumPy',
    image: STFN5
  },
  {
    title: 'Traffic Sign Detection',
    description: 'Developed an interactive image classifier using Python and Gradio to detect road signs from images with 95% accuracy.',
    techStack: 'Python, Gradio, OpenCV, Scikit-learn',
    image: tsdp
  },
  {
    title: 'Grayscale Image Colorization',
    description: 'Created a deep learning model for image colorization and classification using LAB color space, achieving precise colorization of images.',
    techStack: 'Python, TensorFlow, Keras, OpenCV',
    image: gicp
  }
];

const Projects = () => {
  return (
    <div id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-3 text-sm md:text-base">{project.description}</p>
              <p className="text-gray-500 font-medium text-xs md:text-sm">{project.techStack}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
