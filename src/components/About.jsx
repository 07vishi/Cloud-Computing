import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Load Credly script
    const script = document.createElement('script');
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <img 
                src="your-photo-url.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-700 mb-4">
                Hello! I'm a passionate developer with expertise in web development.
                I love creating beautiful and functional applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                My skills include React, JavaScript, Tailwind CSS, and more.
                I'm always eager to learn new technologies and take on challenging projects.
              </p>
              {/* Credly Badge */}
              <div 
                data-iframe-width="150" 
                data-iframe-height="270" 
                data-share-badge-id="ec44a8e1-f9d6-4ba5-a406-74a009cf2bbe" 
                data-share-badge-host="https://www.credly.com"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
