import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'React Native', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
      color: 'blue'
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'PHP', 'FastAPI', 'REST APIs'],
      color: 'green'
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MongoDB', 'Firebase'],
      color: 'purple'
    },
    {
      category: 'DevOps',
      skills: ['Docker', 'Kubernetes'],
      color: 'teal'
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'GitHub', 'Agile', 'Project Management', 'IT Support'],
      color: 'orange'
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      green: 'bg-green-600 hover:bg-green-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      teal: 'bg-teal-600 hover:bg-teal-700',
      orange: 'bg-orange-600 hover:bg-orange-700',
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="bg-[#111111] text-white py-20 px-4 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">Skills & Technologies</h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Technologies and tools I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className={`${getColorClasses(category.color)} px-4 py-2 rounded-full text-sm font-medium transition-colors`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;

