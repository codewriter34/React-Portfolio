// src/pages/Home.jsx
import React from 'react';
import Navbar from '../Components/NavBar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Services from '../Components/Services';

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Content below navbar */}
     <Hero />
     <About />
     <Services />
    </div>
  );
};

export default Home;
