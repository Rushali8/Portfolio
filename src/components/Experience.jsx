import React from 'react';

function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          <div className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Frontend Developer</h3>
            <p className="text-lg mb-2 text-teal-500 font-bold">HSB</p>
            <p className="text-lg mb-2">Feb-2024 to June-2024</p>
            <p>Specialized in building responsive UIs with React, Tailwind CSS, and JavaScript.</p>
          </div>
          <div className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Academic Project</h3>
            <p className="text-lg mb-2">Main Project Undertaken in BE</p>
            <p className="font-bold">Graphical Password Authentication Using Color Login Technique</p>
            <p className="mt-2">
              <strong>Description:</strong> Authorization is the technique of allowing only authorized personnel to access
              an account or data. Our project focuses on a new authentication technique using graphical passwords to
              prevent common attacks like shoulder surfing, which are common with traditional alphanumeric passwords.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
