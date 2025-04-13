import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-6 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 sm:px-8 flex items-center justify-between relative">
        {/* Logo */}
        <div className={`text-2xl font-bold tracking-wide z-50 ${isOpen ? 'hidden' : 'block'} md:block`}>
            <Link to="/">WAMBAELISHA</Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center flex-1 items-center space-x-10">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/projects" className="hover:text-blue-400">Projects</Link>
          <Link to="/blog" className="hover:text-blue-400">Blog</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>

        {/* Hire Me Button (Desktop) */}
        <div className="hidden md:flex z-50">
          <Link
            to="/hire"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white transition duration-300"
          >
            Hire Me
          </Link>
        </div>

        {/* Hamburger / Close Icon */}
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
          <div
            className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-40 px-4 py-10 text-center"
          >
            {/* Close button already top-right */}
            <div className="text-3xl font-bold mb-10">WAMBAELISHA</div>
            
            <div className="space-y-6 text-xl">
              <Link onClick={() => setIsOpen(false)} to="/" className="block hover:text-blue-400">Home</Link>
              <Link onClick={() => setIsOpen(false)} to="/about" className="block hover:text-blue-400">About</Link>
              <Link onClick={() => setIsOpen(false)} to="/projects" className="block hover:text-blue-400">Projects</Link>
              <Link onClick={() => setIsOpen(false)} to="/blog" className="block hover:text-blue-400">Blog</Link>
              <Link onClick={() => setIsOpen(false)} to="/contact" className="block hover:text-blue-400">Contact</Link>
              <Link
                onClick={() => setIsOpen(false)}
                to="/hire"
                className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded transition"
              >
                Hire Me
              </Link>
            </div>

            {/* Socials */}
            <div className="flex space-x-6 text-white text-2xl mt-12">
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
        )}
      </div>
    </nav>
  );
}

export default Navbar;
