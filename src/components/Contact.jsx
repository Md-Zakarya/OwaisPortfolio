import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://formspree.io/f/myzgwley', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          alert('Something went wrong. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div id="contact" className="h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Me</h2>
        {submitted ? (
          <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h3 className="text-2xl font-semibold">Thank you for your message!</h3>
          </div>
        ) : (
          <form className="bg-white text-black p-8 rounded-lg shadow-lg space-y-4 max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-md text-gray-800"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-md text-gray-800"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-md text-gray-800"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded-md text-gray-800"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors">
                Send
              </button>
            </div>
          </form>
        )}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/owais-ahmad-khan-cse/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl sm:text-4xl hover:text-blue-300 transition-colors" />
          </a>
          <a href="mailto:oak.khanowais.1230@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-3xl sm:text-4xl hover:text-red-300 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
