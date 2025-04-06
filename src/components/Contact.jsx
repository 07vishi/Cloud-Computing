import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="min-h-screen py-24 bg-gradient-to-br from-gray-50 to-white flex items-center">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-14 text-[#333333]">
          Contact Me
        </h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-[#333333] mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:border-[#333333]"
                placeholder="Your name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-[#333333] mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:border-[#333333]"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-[#333333] mb-2 font-medium">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:border-[#333333]"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-[#e94560] to-[#ff7b89] text-white rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#e94560]/20"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
