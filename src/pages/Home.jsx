// src/pages/Home.jsx
import React from 'react';
import Navbar from '../Components/NavBar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Services from '../Components/Services';
import Companies from '../Components/Companies';
import Projects from '../Components/Projects';
import ContactSection from '../Components/ContactSection';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Content below navbar */}
     <Hero />
     <About />
     <Services />
     <Companies />
     <Projects />
     <ContactSection />
     <Footer />
    </div>
  );
};

export default Home;
