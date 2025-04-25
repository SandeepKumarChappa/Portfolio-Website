import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../styles/Home.css';
import sandeep from '../assets/sandie.jpg';
import SandeepCV from '../assets/SandyCV.pdf';

function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Full Stack Web Developer',
        'MERN Stack Developer',
        // 'Web Developer',
        'Software Developer'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // const handleScrollClick = () => {
  //   const projectsSection = document.getElementById('about');
  //   projectsSection.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <section id="home">
      <div className="section-container">
        <div className="home-content">
          <div className="profile-container">
            <img src={sandeep} alt="Sandeep Kumar Chappa" className="profile-image" />
          </div>
          <div className="home-text">
            <h1 className="main-title">
              <h3> Hello, I'm </h3> <span className="highlight rainbow-text">Sandeep Kumar Chappa</span>
            </h1>
            <div className="typing-container">
              I'm a <span ref={typedRef} className="highlight"></span>
            </div>
            <p className="description">
              {/* A passionate developer and Computer Science student at Lovely Professional University, */}
              {/* A passionate developer and Computer Science student at Lovely Professional University, with hands-on experience in MERN Stack, PHP, and Java-based projects. Skilled in building dynamic web applications and driven by a commitment to continuous learning and innovation in software development. */}
              A passionate problem-solver and Computer Science student at Lovely Professional University, skilled in MERN Stack, PHP, and Java. Experienced in building dynamic web applications and committed to continuous learning and innovation in software development.
            </p>
          </div>

          <div className="cta-container">
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">
                View Projects
                <i className="fas fa-project-diagram ms-2"></i>
              </a>
              <a href="#contact" className="btn btn-outline-primary">
                Contact Me
                <i className="fas fa-envelope ms-2"></i>
              </a>
            </div>

            <a 
              href={SandeepCV} 
              className="resume-button"
              download="SandyCV.pdf"
            >
            Download CV
            <i className="fas fa-download ms-2"></i>
          </a>
          </div>

          <div className="social-links">
            <a 
              href="https://github.com/SandeepKumarChappa" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="GitHub"
              className="social-link github"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/sandeepkumar-chappa/" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="LinkedIn"
              className="social-link linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="mailto:chappasandeepkumar@gmail.com" 
              title="Email"
              className="social-link email"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a 
              href="tel:+919391829715" 
              title="Phone"
              className="social-link phone"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
{/* 
      <div 
        className="scroll-indicator" 
        onClick={handleScrollClick} 
        role="button" 
        tabIndex={0}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> */}
    </section>
  );
}

export default Home;