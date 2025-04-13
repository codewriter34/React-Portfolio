import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import graduateImage from '../assets/graduate1.jpg';

function Hero() {
  return (
    <section className="relative w-full h-screen text-white mt-20"> {/* Added margin-top */}
      {/* Background Image with Linear Gradient */}
      <img
        src={graduateImage}
        alt="Graduate"
        className="absolute inset-0 w-full h-full object-cover object-top"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))' // Small dark gradient
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-16">
        <h1 className="text-2xl md:text-4xl font-semibold mb-2">Hello, my name is</h1>
        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
          FORWAMBA<br />ELICIA
        </h2>
        
        <p className="text-lg md:text-2xl mt-6 font-medium">
          Full Stack Developer | Web Developer | Mobile App Developer | Software Engineer
        </p>

        <div className="flex space-x-6 text-white text-2xl mt-8">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 p-3 rounded-full hover:bg-[#0A66C2] transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 p-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 p-3 rounded-full hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 transition-all"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
