import React, { useState } from 'react';
import '../styles/Certificates.css';
import { motion } from 'framer-motion';

// Import certificate images
import devopsCert from '../assets/devops.png';
import mernCert from '../assets/mern.png';
import cpCert from '../assets/cp.png';
import cppCert from '../assets/cpp.png';
import linkedinCert from '../assets/linkedin.png';
import udemyCert from '../assets/udemy.jpg';
import phpCert from '../assets/php.png';
import aisecCert from '../assets/aisec.png';


function Certificates() {
  const [hoveredCert, setHoveredCert] = useState(null);

  const certificates = [
    {
      title: "DevOps and Software Engineering",
      issuer: "Coursera",
      date: "November 2024",
      icon: "fas fa-cogs",
      link: "https://coursera.org/verify/professional-cert/4HS4JIWJBKKS",
      image: devopsCert,
      color: "#FF6B6B" // Coral Red
    },
    {
      title: "Full Stack Web Development: MERN Stack",
      issuer: "CSE Pathshala",
      date: "May 2023",
      icon: "fas fa-code",
      // link: "https://www.coursera.org/account/accomplishments/verify/2UJCCAAOT17Y",
      image: mernCert,
      color: "#4ECDC4" // Turquoise
    },
    {
      title: "Competitive Programming - DSA",
      issuer: "Coding Spoon",
      date: "February 2025",
      icon: "fas fa-brain",
      link: "https://credsverse.com/credentials/5f16206c-e143-4b30-b3a4-4fc8339592f7",
      image: cpCert,
      color: "#A78ADB" // Lavender Purple
    },
    {
      title: "Programming in C++: A Hands-on Introduction",
      issuer: "Coursera",
      date: "May 2023",
      icon: "fas fa-brain",
      link: "https://coursera.org/verify/specialization/YFXYLY86NCDP",
      image: cppCert,
      color: "#FF9F1C" // Bright Orange
    },
    {
      title: "Foundations of Cloud Computing: Models, Platforms, Services, and Careers",
      issuer: "LinkedIn Learning",
      date: "Dec 2022",
      icon: "fas fa-cloud",
      link: "https://www.linkedin.com/learning/certificates/7d3aa58d5dc5b60b21a0c51ce858361bf9903dc275d8ea3eec00093c3d27e59a?trk=share_certificate",
      image: linkedinCert,
      color: "#FF9F1C" // Bright Orange
    },
    {
      title: "Mastering Data Structures & Algorithms using C and C++",
      issuer: "Udemy",
      date: "February 2023",
      icon: "fas fa-brain",
      link: "https://www.udemy.com/certificate/UC-dbb37552-b4ec-41f1-ab4d-1d7e2fa4668d/",
      image: udemyCert,
      color: "#A78ADB" // Lavender Purple
    },
    {
      title: "Building Web Applications in PHP",
      issuer: "Coursera",
      date: "May 2024",
      icon: "fas fa-code",
      link: "https://coursera.org/verify/BL3MECQY0KI1",
      image: phpCert,
      color: "#4ECDC4" // Turquoise
    },
    {
      title: " Hack-a-Throne 1.0 ",
      issuer: "AISEC",
      date: "November 2024",
      icon: "fas fa-code",
      // link: "https://coursera.org/verify/professional-cert/4HS4JIWJBKKS",
      image: aisecCert,
      color: "#FF6B6B" // Coral Red
    }
  ];

  const handleScrollClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="certificates">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certificates
        </motion.h2>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div 
              className="certificate-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              style={{
                '--accent-color': cert.color,
                '--accent-gradient': `linear-gradient(135deg, ${cert.color} 0%, ${cert.color}CC 100%)`
              }}
              onMouseEnter={() => setHoveredCert(index)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              <div 
                className="certificate-image-wrapper"
                style={{ 
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '15px'
                }}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="certificate-image"
                />
                {hoveredCert === index && (
                  <motion.div 
                    className="certificate-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="view-certificate-btn"
                    >
                      View Certificate
                    </a>
                  </motion.div>
                )}
              </div>
              
              <div className="certificate-content">
                <div 
                  className="certificate-icon"
                  style={{ 
                    background: `linear-gradient(135deg, ${cert.color}, ${cert.color}CC)` 
                  }}
                >
                  <i className={cert.icon}></i>
                </div>
                <h3 className="certificate-title">{cert.title}</h3>
                <div className="certificate-details">
                  <span className="issuer">{cert.issuer}</span>
                  <span className="date">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* <motion.div 
          className="scroll-indicator" 
          onClick={handleScrollClick} 
          role="button" 
          tabIndex={0}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

export default Certificates;