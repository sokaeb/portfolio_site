import React from 'react';

import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <div className='App'>
      <section className='navSection'>
        <Nav />
      </section>

      <section className='aboutSection'>
        <About />
      </section>

      <section className='skillsSection'>
        <Skills />
      </section>

      <section className='projectsSection'>
        <Projects />
      </section>

      <section className='contactSection'>
        <Contact />
      </section>

      <section className='footerSection'>
        <Footer />
      </section>

    </div>
    </>

  );
}

export default App;
