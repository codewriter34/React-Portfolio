import React, { useState } from 'react';
import graduate2 from '../assets/graduate2.jpg';
import { motion } from 'framer-motion';
import { useContactModal } from '../context/ContactModalContext';

// Phone validation function - accepts international formats
const validatePhoneNumber = (phone) => {
  // Remove all spaces, dashes, parentheses, and plus signs for validation
  const cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
  
  // International phone number regex:
  // - Must start with optional + or country code
  // - Should have 7-15 digits (international standard)
  // - Can include spaces, dashes, parentheses, plus sign
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  
  // Check if cleaned number has 7-15 digits
  const digitCount = cleaned.replace(/\D/g, '').length;
  
  return phoneRegex.test(phone) && digitCount >= 7 && digitCount <= 15;
};

// Email validation function - comprehensive validation
const validateEmail = (email) => {
  // RFC 5322 compliant email regex (simplified but robust)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  // Additional checks
  if (!email || email.length === 0) return false;
  if (email.length > 254) return false; // RFC 5321 limit
  
  // Check for consecutive dots
  if (email.includes('..')) return false;
  
  // Check local and domain parts
  const parts = email.split('@');
  if (parts.length !== 2) return false;
  
  const [localPart, domain] = parts;
  
  // Local part validation
  if (localPart.length === 0 || localPart.length > 64) return false;
  if (localPart.startsWith('.') || localPart.endsWith('.')) return false;
  
  // Domain validation
  if (domain.length === 0 || domain.length > 253) return false;
  if (domain.startsWith('.') || domain.endsWith('.')) return false;
  if (!domain.includes('.')) return false; // Must have TLD
  
  // Check for valid TLD (at least 2 characters)
  const domainParts = domain.split('.');
  const tld = domainParts[domainParts.length - 1];
  if (tld.length < 2) return false;
  
  return emailRegex.test(email);
};

function ContactSection() {
  const { isOpen, openModal, closeModal } = useContactModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handlePhoneChange = (e) => {
    const phone = e.target.value;
    setPhoneError('');
    
    if (phone && !validatePhoneNumber(phone)) {
      setPhoneError('Please enter a valid phone number (international format accepted)');
    }
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmailError('');
    
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    
    // Validate email before submitting
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      e.target.email.focus();
      return;
    }
    
    // Validate phone before submitting
    if (!validatePhoneNumber(phone)) {
      setPhoneError('Please enter a valid phone number (international format accepted)');
      e.target.phone.focus();
      return;
    }
    
    setIsSubmitting(true);
    setPhoneError('');
    setEmailError('');

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
        closeModal();
        setIsSubmitted(false);
        e.target.reset();
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
        className="max-w-6xl mx-auto bg-[#0f172a] rounded-2xl shadow-xl px-6 py-10 md:px-12 md:py-16 overflow-hidden flex flex-col-reverse md:flex-row gap-8"
      >
        {/* Text Section */}
        <div className="relative z-10 flex-1 text-center md:text-left">
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
            onClick={openModal}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            Contact
          </motion.button>
        </div>

        {/* Image Section */}
        <div className="relative z-0 w-full md:w-1/2 h-[250px] md:h-auto">
          <img
            src={graduate2}
            alt="Graduate"
            className="w-full h-full object-cover object-top rounded-xl md:rounded-none md:absolute md:top-0 md:right-0 md:h-full md:w-full"
            style={{ mixBlendMode: 'lighten' }}
          />
        </div>
      </motion.div>

      {/* Modal Form */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-2xl relative text-black my-8">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-2xl font-bold text-gray-700 hover:text-red-600 transition"
              aria-label="Close modal"
            >
              &times;
            </button>

            {isSubmitted ? (
              <div className="text-center space-y-4 py-8">
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-green-600">Thank You!</h3>
                <p className="text-gray-600">Your inquiry has been received. I'll get back to you within 24-48 hours.</p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2 text-center">Business Inquiry</h3>
                  <p className="text-gray-600 text-sm text-center">Fill out the form below and I'll get back to you soon</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@company.com"
                      required
                      onChange={handleEmailChange}
                      className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition ${
                        emailError ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {emailError && (
                      <p className="text-red-500 text-sm mt-1">{emailError}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Company Name (Optional)"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+237 6XX XXX XXX or +1 (555) 123-4567"
                      required
                      onChange={handlePhoneChange}
                      className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition ${
                        phoneError ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {phoneError && (
                      <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                    )}
                    <p className="text-gray-500 text-xs mt-1">International format accepted (e.g., +237 681 423 158, +1 555 123 4567)</p>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-1">
                      Inquiry Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition bg-white"
                    >
                      <option value="">Select an option</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="full-stack">Full Stack Project</option>
                      <option value="consultation">Consultation</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Brief description of your project"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                      rows="5"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-1">
                      Budget Range (Optional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition bg-white"
                    >
                      <option value="">Prefer not to say</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2 h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Inquiry'
                    )}
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
