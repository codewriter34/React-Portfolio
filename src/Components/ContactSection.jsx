import React, { useState } from 'react';
import graduate2 from '../assets/graduate2.jpg';
import { motion } from 'framer-motion';

function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const response = await fetch('https://formspree.io/f/meoandeq', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    });

    setIsSubmitting(false);

    if (response.ok) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
      }, 3000);
    } else {
      alert('There was an error. Please try again.');
    }
  };

  return (
    <section className="bg-black text-white py-16 px-4 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative bg-[#0f172a] rounded-2xl shadow-xl px-6 py-10 md:px-12 md:py-16 overflow-hidden flex items-center justify-between flex-col md:flex-row gap-8 min-h-[450px]"
      >
        {/* Background Image */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block z-0">
          <img
            src={graduate2}
            alt="Graduate"
            className="w-full h-full object-cover object-top"
            style={{ mixBlendMode: 'lighten' }}
          />
        </div>

        {/* Text Section */}
        <div className="relative z-10 flex-1 text-center md:text-left pr-0 md:pr-20">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug"
          >
            I would love <br /> hearing from you
          </motion.h2>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            Contact
          </motion.button>
        </div>
      </motion.div>

      {/* Modal Form */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-[90%] max-w-md relative text-black">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-2xl font-bold text-gray-700 hover:text-red-600"
            >
              &times;
            </button>

            {isSubmitted ? (
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-green-600">🎉 Thank you!</h3>
                <p>Your message was sent successfully. I’ll get back to you soon!</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-4 text-center">Contact Me</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
                  />
                  <textarea
                    name="reason"
                    placeholder="Reason for Submission"
                    rows="4"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600 resize-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="animate-spin mr-2 h-5 w-5 border-t-2 border-white rounded-full"></span>
                    ) : null}
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default ContactSection;
