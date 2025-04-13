import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projectData from '../assets/projectData';
import Navbar from '../Components/NavBar';
import { motion } from 'framer-motion';

function ProjectDetails() {
  const { id } = useParams();
  const project = projectData.find(p => p.id === id);

  if (!project) return <div className="text-black p-10">Project not found</div>;

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[75vh] flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backgroundBlendMode: 'overlay',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">{project.title}</h1>
          <div className="flex gap-6 justify-center mt-4">
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer" className="text-blue-300 underline text-lg">
                GitHub Repo
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="text-green-300 underline text-lg">
                Live Site
              </a>
            )}
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="bg-white text-black px-4 md:px-10 py-16 space-y-14">

        {/* Back to Projects */}
        <div>
          <Link to="/#projects" className="text-blue-500 underline">&larr; Back to Projects</Link>
        </div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">About This Project</h2>
          <p className="text-gray-700">{project.about}</p>
        </motion.div>

        {/* Overview */}
        {project.overview && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700">{project.overview}</p>
          </motion.div>
        )}

        {/* Main Features */}
        {project.features && project.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Main Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Conclusion */}
        {project.conclusion && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="text-gray-700">{project.conclusion}</p>
          </motion.div>
        )}
      </section>
    </>
  );
}

export default ProjectDetails;
