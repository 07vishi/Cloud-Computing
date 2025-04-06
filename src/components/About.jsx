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
    <section id="about" className="min-h-screen py-24 bg-gradient-to-br from-gray-50 to-white flex items-center">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-14 text-[#333333]">
          About Me
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="flex-shrink-0">
            <div className="relative w-[280px] h-[280px] rounded-2xl overflow-hidden border-2 border-[#e94560]/20 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#e94560] bg-white">
              <img 
                src="/images/3.jpeg"
                alt="Historical military ceremony"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="flex justify-center gap-6 mt-8">
              <a 
                href="https://github.com/07vishi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-[#e94560] p-2 rounded-full bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:text-[#ff7b89] hover:shadow-lg"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-[#e94560] p-2 rounded-full bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:text-[#ff7b89] hover:shadow-lg"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div className="flex-1 bg-white p-10 rounded-2xl border border-gray-100 shadow-lg">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a second-year programming student with a passion for exploring the ever-evolving
                world of technology and software development. Over the past two years, I've been honing
                my skills in languages like Python, JavaScript, C++, and I enjoy applying my knowledge to
                hands-on projects that challenge me to think critically and solve problems creatively.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I've been working on Integration of Health and Solidarity Services, which has helped me improve
                both my technical and teamwork skills.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm eager to further enhance my expertise by gaining real-world experience, collaborating
                on meaningful projects, and contributing to innovative solutions in the field. I'm committed 
                to continuously learning and growing as a programmer.
              </p>
            </div>
            
            <div className="mt-10 p-8 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[#333333] mb-6 text-center">Technical Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['Python', 'JavaScript', 'Java', 'C++', 'HTML', 'SQL', 'Git'].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-[#e94560] to-[#ff7b89] text-white rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#e94560]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-10 flex justify-center">
              <div 
                data-iframe-width="150" 
                data-iframe-height="270" 
                data-share-badge-id="ec44a8e1-f9d6-4ba5-a406-74a009cf2bbe" 
                data-share-badge-host="https://www.credly.com"
                className="bg-gray-50 p-6 rounded-xl border border-gray-100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
