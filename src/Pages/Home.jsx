import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default Home;
