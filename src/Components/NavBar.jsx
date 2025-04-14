import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-6 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 sm:px-8 flex items-center justify-between relative">
        {/* Logo */}
        <div className={`text-2xl font-bold tracking-wide z-50 ${isOpen ? 'hidden' : 'block'} md:block`}>
          <a href="#hero">WAMBAELISHA</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center flex-1 items-center space-x-10">
          <a href="#hero" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

        {/* Hire Me Button (Desktop) */}
        <div className="hidden md:flex z-50">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white transition duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Fullscreen Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-40 px-4 py-10 text-center">
            <div className="text-3xl font-bold mb-10">WAMBAELISHA</div>

            <div className="space-y-6 text-xl">
              <a onClick={() => setIsOpen(false)} href="#hero" className="block hover:text-blue-400">Home</a>
              <a onClick={() => setIsOpen(false)} href="#about" className="block hover:text-blue-400">About</a>
              <a onClick={() => setIsOpen(false)} href="#projects" className="block hover:text-blue-400">Projects</a>
              <a onClick={() => setIsOpen(false)} href="#contact" className="block hover:text-blue-400">Contact</a>
              <a
                onClick={() => setIsOpen(false)}
                href="#contact"
                className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded transition"
              >
                Hire Me
              </a>
            </div>

            {/* Socials */}
            <div className="flex space-x-6 text-white text-2xl mt-12">
              <a href="https://cm.linkedin.com/in/wamba-elisha" target="_blank" rel="noreferrer" className="bg-blue-600 p-3 rounded-full hover:bg-[#0A66C2] transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://github.com/codewriter34" target="_blank" rel="noreferrer" className="bg-blue-600 p-3 rounded-full hover:bg-gray-700 transition-colors">
                <FaGithub />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-blue-600 p-3 rounded-full hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 transition-all">
                <FaInstagram />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
