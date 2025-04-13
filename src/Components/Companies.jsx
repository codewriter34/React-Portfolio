import React from 'react';
import graduate3 from '../assets/graduate3.jpg';
import afayi from '../assets/afayi.jpg';
import cbf from '../assets/cbf.jpg';
import smarttech from '../assets/smartTech.jpg';
import afrovision from '../assets/afroVision.jpg';

function Companies() {
  const logos = [
    { id: 1, src: afayi, alt: 'Afayi' },
    { id: 2, src: cbf, alt: 'CBF' },
    { id: 3, src: smarttech, alt: 'Smart Tech' },
    { id: 4, src: afrovision, alt: 'Afrovision' },
  ];

  return (
    <section className="relative min-h-[500px] px-4 md:px-10 text-white overflow-hidden">
      {/* Background with bright-dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(17,17,17,0.35), rgba(17,17,17,0.55)), url(${graduate3})`,
          backgroundPosition: 'center top 15%',
          backgroundAttachment: 'fixed',
          zIndex: -1,
        }}
      ></div>

      {/* Foreground content */}
      <div className="flex flex-col justify-center h-[500px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left - Text */}
          <div className="text-left w-full md:w-1/3">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Companies<br />& Clients
            </h2>
          </div>

          {/* Right - Logos with animation */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full md:w-2/3">
            {logos.map(({ id, src, alt }) => (
              <div
                key={id}
                className="bg-black h-32 lg:h-40 p-6 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition duration-500 hover:scale-105"
              >
                <img
                  src={src}
                  alt={alt}
                  className="max-h-16 object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Companies;
