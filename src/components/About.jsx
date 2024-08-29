import React from 'react';

function About() {
  return (
    <section id="about" className="py-48 bg-gray-900">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Text and Details Side */}
        <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left lg:pr-12 mb-12 lg:mb-0">
          <h2 className="text-6xl font-extrabold text-white mb-4 font-sac italic">
            Ru<span className='text-yellow-500'>sha</span>li R
          </h2>
          <p className="text-4xl text-white mb-4  relative">
            I am a
            <span className="block lg:inline-block lg:ml-2  mt-2 lg:mt-0 animate-slide-in-out text-4xl font-extrabold text-yellow-500">
              Software Developer
            </span>
          </p>
          <p className="text-xl text-white leading-relaxed font-sans">
            Specializing in creating dynamic and beautiful web applications. Skilled in Html, Css, JavaScript, React, and more. Passionate about building impactful web applications.
          </p>
        </div>
        {/* Profile Picture Side */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
            alt="Profile"
            className="w-96 h-96 rounded-full border-4 border-teal-500 shadow-lg "
          />
        </div>
      </div>
    </section>
  );
}

export default About;
