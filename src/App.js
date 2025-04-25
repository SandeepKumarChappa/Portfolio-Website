// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
// import CodingProfiles from './components/CodingProfiles';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Achievements />
      {/* <CodingProfiles /> */}
      <Certificates />
      <About />

      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;