import React from 'react';
import {
  Code2,
  Monitor,
  Layers,
  ClipboardList,
  Headset,
  Database,
} from 'lucide-react';

function Services() {
  const services = [
    {
      id: 1,
      icon: <Monitor size={40} className="text-blue-500" />,
      title: 'Front-End Development',
      description: 'Creating beautiful, responsive web interfaces using React, HTML, CSS, and Tailwind. I focus on user experience and accessibility.',
    },
    {
      id: 2,
      icon: <Code2 size={40} className="text-blue-500" />,
      title: 'Back-End Development',
      description: 'Designing powerful and secure backend systems using Node.js, Express, and PHP to power seamless user experiences.',
    },
    {
      id: 3,
      icon: <Layers size={40} className="text-blue-500" />,
      title: 'Full Stack Development',
      description: 'I build full-fledged web and mobile apps using React, React Native, Node.js, and Firebase — delivering complete, scalable solutions.',
    },
    {
      id: 4,
      icon: <ClipboardList size={40} className="text-blue-500" />,
      title: 'Project Management',
      description: 'Organizing and leading development teams using Agile principles to deliver high-quality products on time and on budget.',
    },
    {
      id: 5,
      icon: <Headset size={40} className="text-blue-500" />,
      title: 'IT Support',
      description: 'Providing fast, reliable IT support and troubleshooting to keep systems running smoothly with minimal downtime.',
    },
    {
      id: 6,
      icon: <Database size={40} className="text-blue-500" />,
      title: 'Database Administration',
      description: 'Skilled in managing MySQL, MongoDB, and Firebase. I ensure your data is secure, scalable, and always accessible when you need it.',
    },
  ];

  return (
    <section className="bg-[#111111]  text-white py-20 px-4 md:px-10">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">My Expertise</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
          View all services
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className="bg-gray-900 p-6 py-20 rounded-xl shadow-md hover:shadow-lg transition duration-300 space-y-4 px-20"
          >
            <div className="mb-2">{icon}</div>
            <h3 className="text-xl font-semibold py-8">{title}</h3>
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
