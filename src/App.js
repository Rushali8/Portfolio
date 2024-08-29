import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <SocialLinks />
      </main>
    </div>
  );
}

export default App;
