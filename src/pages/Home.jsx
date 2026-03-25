import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/NavBar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Services from '../Components/Services';
import Companies from '../Components/Companies';
import Projects from '../Components/Projects';
import ContactSection from '../Components/ContactSection';
import Footer from '../Components/Footer';
import BackToTop from '../Components/BackToTop';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div>
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="services"><Services /></div>
      <div id="companies"><Companies /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><ContactSection /></div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
