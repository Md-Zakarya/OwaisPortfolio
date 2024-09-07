import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 bg-[length:400%_400%] animate-gradient">
        <style jsx>{`
          @keyframes gradient {
            0% {
              background-position: 0% 0%;
            }
            50% {
              background-position: 100% 100%;
            }
            100% {
              background-position: 0% 0%;
            }
          }
          .animate-gradient {
            animation: gradient 8s ease infinite;
          }

          .typewriter {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            border-right: 3px solid rgba(255, 255, 255, 0.75);
            animation: typing 3.5s steps(30, end), blink 0.75s step-end infinite;
          }

          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }

          @keyframes blink {
            from, to {
              border-color: transparent;
            }
            50% {
              border-color: rgba(255, 255, 255, 0.75);
            }
          }

          /* Add media queries for responsiveness */
          @media (max-width: 768px) {
            .hero-content {
              font-size: 2xl;
            }
            .button {
              padding: 6px 8px;
            }
          }
          @media (max-width: 480px) {
            .hero-content {
              font-size: 1xl;
            }
            .button {
              padding: 6px 6px;
            }
          }
        `}</style>
      </div>

      {/* Bubbles */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        {Array(10)
          .fill()
          .map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-10 h-10 bg-white rounded-full opacity-25 pointer-events-none"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: `blur(${Math.random() * 2}px)`,  // Slight blur for depth
              }}
              animate={{
                y: ["0%", "-200%", "0%"],
                x: [`${Math.random() * 5}%`, `${Math.random() * -5}%`, `${Math.random() * 5}%`],  // Subtle horizontal movement
              }}
              transition={{
                duration: 5 + Math.random() * 5,  // Varying speeds
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              whileHover={{
                scale: 1.2,  // Scale up on hover
                boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",  // Glow effect on hover
              }}
            />
          ))}
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-white text-2xl md:text-5xl font-bold mb-6 text-center hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="typewriter">Hello, I'm Owais Ahmad Khan</span>
      </motion.div>

      <div className="relative z-10 flex space-x-4 mt-6">
        <motion.div
          whileHover={{ scale: 1.1, boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)" }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="projects"
            smooth
            className="bg-white text-blue-600 py-3 px-6 rounded-full font-semibold cursor-pointer button"
          >
            View Projects
          </Link>
        </motion.div>
        <motion.div
                   whileHover={{ scale: 1.1, boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)" }}
                   transition={{ duration: 0.3 }}
                 >
                   <Link
                     to="contact"
                     smooth
                     className="bg-white text-blue-600 py-3 px-6 rounded-full font-semibold cursor-pointer button"
                   >
                     Contact Me
                   </Link>
                 </motion.div>
               </div>
             </div>
           );
         };
         
         export default Hero;