import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Cloud Computing",
      description: "JavaScript-based cloud computing project focusing on modern cloud technologies and implementations.",
      tech: ["JavaScript", "Cloud", "Node.js"],
      github: "https://github.com/07vishi/Cloud-Computing"
    },
    {
      title: "Health Integration Services",
      description: "Integration platform for health and solidarity services, improving healthcare accessibility.",
      tech: ["Python", "JavaScript", "API"],
      github: "https://github.com/07vishi/2GFinnovationsystems"
    },
    {
      title: "Python Fundamentals",
      description: "UFCD 10793 Fundamentos da Linguagem Python - Comprehensive Python programming fundamentals.",
      tech: ["Python", "Data Structures"],
      github: "https://github.com/07vishi/python_fundamentos_PI1"
    },
    {
      title: "Stationary Store Management",
      description: "C++ based system for managing stationary store inventory and sales.",
      tech: ["C++", "Data Management"],
      github: "https://github.com/07vishi/c-StationaryStore"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-24 bg-gradient-to-br from-gray-50 to-white flex items-center">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-14 text-[#333333]">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-[#333333] mb-4">{project.title}</h3>
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-[#e94560] to-[#ff7b89] text-white rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#e94560] hover:text-[#ff7b89] transition-colors"
              >
                <i className="fab fa-github text-lg"></i>
                <span>View Project</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
