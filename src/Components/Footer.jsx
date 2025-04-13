import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Social icons

function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-20 md:px-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* First Grid */}
          <div className="ml-4">
            <h3 className="text-3xl font-bold mb-4">FORWAMBA ELICIA</h3>
            <p className="text-lg text-gray-300 mb-6">
              Hi, I'm Forwamba Elicia. I'm passionate about software engineering and
              web development. I enjoy building applications that solve real-world problems.
            </p>
            <div>
              <h4 className="font-semibold mb-2">Join my Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 text-black rounded-l-md w-full"
                />
                <button className="bg-blue-600 px-6 py-2 rounded-r-md text-white hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Second Grid: Navigation */}
          <div className="ml-4">
            <h4 className="text-xl font-semibold mb-4">Navigation</h4>
            <ul>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition mb-2 block">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition mb-2 block">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition mb-2 block">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Third Grid: Contact */}
          <div className="ml-4">
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">Phone: 681423158</p>
            <p className="text-gray-300 mb-6">Email: <a href="mailto:elishawamba61@gmail.com" className="text-blue-400 hover:underline">elishawamba61@gmail.com</a></p>

            <div className="flex space-x-4">
              <a href="https://cm.linkedin.com/in/wamba-elisha" target="_blank" rel="noreferrer">
                <FaLinkedin size={30} className="text-gray-300 hover:text-white transition" />
              </a>
              <a href="https://github.com/codewriter34" target="_blank" rel="noreferrer">
                <FaGithub size={30} className="text-gray-300 hover:text-white transition" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram size={30} className="text-gray-300 hover:text-white transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 text-gray-400">
          <p>@copyright 2025 FORWAMBA ELICIA</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
