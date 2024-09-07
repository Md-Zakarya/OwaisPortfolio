import React from 'react';
import { FaPython, FaDatabase, FaHtml5, FaGitAlt } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <div id="about" className="h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white py-20 flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        <p className="justify-text text-lg mb-8">
          I am a dedicated Computer Science graduate with hands-on experience in TensorFlow, SQL, Machine Learning, and Web Development. 
          I possess strong analytical skills and a passion for developing robust and efficient solutions.
        </p>
        <div className="flex space-x-6 justify-center">
          <FaPython className="text-4xl hover:text-yellow-300 transition-colors" />
          <FaDatabase className="text-4xl hover:text-green-300 transition-colors" />
          <FaHtml5 className="text-4xl hover:text-orange-300 transition-colors" />
          <FaGitAlt className="text-4xl hover:text-red-300 transition-colors" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;