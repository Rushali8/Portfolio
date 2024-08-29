import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the menu after clicking
  };

  return (
    <header className="bg-gray-800 py-4 shadow-md fixed top-0 left-0 w-full z-30">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl font-bold text-white">
          Ru<span className="text-yellow-500">Sha</span>li R
        </h1>
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
        <nav className="hidden sm:flex sm:items-center sm:space-x-6">
          <a
            href="#about"
            onClick={() => handleScrollTo('about')}
            className="text-yellow-500 hover:text-yellow-300 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={() => handleScrollTo('experience')}
            className="text-white hover:text-gray-300 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg"
          >
            Experience
          </a>
          <a
            href="#skills"
            onClick={() => handleScrollTo('skills')}
            className="text-white hover:text-gray-300 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => handleScrollTo('projects')}
            className="text-white hover:text-gray-300 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => handleScrollTo('contact')}
            className="text-white hover:text-gray-300 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg"
          >
            Contact
          </a>
        </nav>
      </div>
      {/* Right-side drawer */}
      <div
        className={`fixed top-0 right-0 w-52 h-full bg-gray-800 text-white z-20 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out sm:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FaTimes size={28} />
          </button>
        </div>
        <nav className="flex flex-col items-start p-6  space-y-6">
          <a
            href="#about"
            onClick={() => handleScrollTo('about')}
            className="text-lg hover:text-yellow-300 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={() => handleScrollTo('experience')}
            className="text-lg hover:text-yellow-300 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg"
          >
            Experience
          </a>
          <a
            href="#skills"
            onClick={() => handleScrollTo('skills')}
            className="text-lg hover:text-yellow-300 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => handleScrollTo('projects')}
            className="text-lg hover:text-yellow-300 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => handleScrollTo('contact')}
            className="text-lg hover:text-yellow-300 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg"
          >
            Contact
          </a>
        </nav>
      </div>
      {/* Overlay when the menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 sm:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}

export default Header;
