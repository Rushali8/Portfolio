import React from 'react';
import project1 from '../assets/PortFolio.jpeg';
import project2 from '../assets/FoodWebsite.jpeg';
import project3 from '../assets/MoviesApp.jpeg';

function Projects() {
  const projectData = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS.',
      image: project1,
      url: '#',
    },
    {
      id: 2,
      title: 'Food Website',
      description: 'Responsive food website built with HTML, CSS, and JS.',
      image: project2,
      url: 'https://vermillion-caramel-dd207e.netlify.app/',
    },
    {
      id: 3,
      title: 'Movies App',
      description: 'An engaging and responsive Movies App built with React and Tailwind CSS. Featuring dynamic movie listings, search functionality, and a sleek, modern design that enhances user experience.',
      image: project3,
      url: 'https://dynamic-taiyaki-c33ee2.netlify.app/',
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="relative bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-lg h-48 w-full object-cover"
              />
              <div className="p-4 relative z-10">
                <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-lg mb-4 text-gray-300">{project.description}</p>
                <a
                  href={project.url}
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
              {/* Mirror Effect */}
              <div className="absolute inset-0 flex justify-center items-end">
                <div className="w-full h-32 bg-gradient-to-t from-gray-700 to-transparent opacity-75 rounded-b-lg transform rotate-x-180 origin-bottom"></div>
              </div>
              {/* Enhanced Shadow */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-900 to-transparent opacity-50 blur-lg transform translate-y-1 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
