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
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="companies"><Companies /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><ContactSection /></div>
      <Footer />
    </div>
  );
};

export default Home;
