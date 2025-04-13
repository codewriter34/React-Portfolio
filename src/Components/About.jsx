import React from 'react';
import graduateImage from '../assets/graduate2.jpg';

function About() {
  return (
    <section className="w-full py-20 bg-[#111111] text-white">
      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center py-24">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <img
            src={graduateImage}
            alt="Graduate"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 md:pl-10">
          {/* About Title */}
          <h2 className="text-3xl font-extrabold text-blue-600 text-center md:text-left mb-4">About WAMBA ELICIA</h2>
          
          {/* Who I Am Text */}
          <p className="text-4xl font-bold text-center md:text-left mb-6">Who I am</p>

          {/* 1st Section */}
          <div className="mb-8 px-6 py-4">
            <div className="flex items-start space-x-4">
              <div className="text-3xl font-bold text-blue-600">#1</div>
              <div>
                <h3 className="text-2xl font-semibold">Mobile App Developer</h3>
                <p className="text-lg mt-2">
                  I specialize in developing mobile applications that are intuitive and user-friendly. My focus is to create seamless experiences using the latest frameworks and technologies like React Native, ensuring cross-platform compatibility.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd Section */}
          <div className="mb-8 px-6 py-4">
            <div className="flex items-start space-x-4">
              <div className="text-3xl font-bold text-blue-600">#2</div>
              <div>
                <h3 className="text-2xl font-semibold">Full Stack Developer</h3>
                <p className="text-lg mt-2">
                  With a strong grasp of both frontend and backend technologies, I am skilled in building dynamic, scalable web applications. My expertise includes HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB and SQL.
                </p>
              </div>
            </div>
          </div>

          {/* 3rd Section */}
          <div className="mb-8 px-6 py-4">
            <div className="flex items-start space-x-4">
              <div className="text-3xl font-bold text-blue-600">#3</div>
              <div>
                <h3 className="text-2xl font-semibold">Software Engineer</h3>
                <p className="text-lg mt-2">
                  As a software engineer, I focus on building reliable systems and writing clean, maintainable code. I have experience with version control, testing, and Agile methodologies to ensure high-quality delivery on projects.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
