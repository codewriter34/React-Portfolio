import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import projectData from '../assets/projectData';
import realWorldProjects from '../assets/realWorldProjects';

function Projects() {
  const [activeTab, setActiveTab] = useState('github');

  const renderProjects = (projects) => (
    <motion.div
      key={activeTab}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"
    >
      {projects.map(({ id, image, title, description, link }, index) => (
        <motion.div
          key={id}
          className="relative group rounded-lg overflow-hidden shadow-lg bg-[#111]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <img src={image} alt={title} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
          <Link to={link}>
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-3xl">➜</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section className="bg-black text-white py-20 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-10 gap-4">
        <h2 className="text-4xl md:text-5xl font-extrabold">Projects</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('github')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition ${
              activeTab === 'github'
                ? 'bg-blue-600 text-white'
                : 'bg-[#222] text-gray-300 hover:bg-[#333]'
            }`}
          >
            <FaGithub />
            GitHub Projects
          </button>
          <button
            onClick={() => setActiveTab('realworld')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition ${
              activeTab === 'realworld'
                ? 'bg-blue-600 text-white'
                : 'bg-[#222] text-gray-300 hover:bg-[#333]'
            }`}
          >
            <FaGlobe />
            Real World Projects
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'github' && renderProjects(projectData)}
        {activeTab === 'realworld' && renderProjects(realWorldProjects)}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
