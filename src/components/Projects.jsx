import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of project 1",
      image: "project1-image.jpg",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      link: "#"
    },
    {
      title: "Project 2",
      description: "A brief description of project 2",
      image: "project2-image.jpg",
      technologies: ["React", "MongoDB", "Express"],
      link: "#"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
