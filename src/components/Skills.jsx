import React from 'react';

const skills = [
  { name: 'HTML', logo: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
  { name: 'CSS', logo: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
  { name: 'JavaScript', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
  { name: 'React', logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
  { name: 'Java', logo: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
  { name: 'SQL', logo: 'https://cdn-icons-png.flaticon.com/512/2772/2772128.png' },
  { name: 'Tailwind CSS', logo: 'https://cdn-icons-png.flaticon.com/512/732/732232.png' },
  { name: 'Bootstrap', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png' },
  { name: 'Material-UI', logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white">Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
          {skills.map((skill) => (
            <div key={skill.name} className="text-center">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
              />
              <p className="mt-2 text-sm sm:text-lg text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
