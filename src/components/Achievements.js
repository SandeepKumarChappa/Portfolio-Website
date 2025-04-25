// Achievements.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Achievements.css';

const achievements = [
  {
    title: "LeetCode Milestone",
    description: "Solved 600+ problems and achieved a contest rating of 1786.",
    icon: "fas fa-code",
    date: "April 2025",
    link: "https://leetcode.com/"
  },
  {
    title: "CodeForces Progress",
    description: "Increased rating from 615 to 1070 in 8 months.",
    icon: "fas fa-terminal",
    date: "April 2025",
    link: "https://codeforces.com/"
  },
  {
    title: "CodeChef Achievement",
    description: "Reached a rating of 1519 and earned 2⭐ rank.",
    icon: "fas fa-code-branch",
    date: "March 2025",
    link: "https://www.codechef.com/"
  },
  {
    title: "GFG Contributor",
    description: "Solved 100+ problems and earned a coding score of 308.",
    icon: "fas fa-laptop-code",
    date: "March 2025",
    link: "https://www.geeksforgeeks.org/"
  }
];

function Achievements() {
  return (
    <section style={{backgroundColor: "#2d3436",color:"white"}} id="achievements">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Achievements
        </motion.h2>

        <div className="achievements-grid">
          {achievements.map((achieve, index) => (
            <motion.div 
              className="achievement-card" 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="achievement-icon">
                <i className={achieve.icon}></i>
              </div>
              <h3>{achieve.title}</h3>
              <p>{achieve.description}</p>
              <span className="achievement-date">{achieve.date}</span>
              <a href={achieve.link} target="_blank" rel="noopener noreferrer">
                View Profile <i className="fas fa-external-link-alt"></i>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;

// import React from 'react';
// import './Achievements.css'; // Import the CSS file

// const Achievements = () => {
//   return (
//     <section className="achievements-section">
//       <h2 className="achievements-title">Achievements</h2>
//       <div className="achievements-grid">
//         <div className="achievement-box">
//           <div className="achievement-symbol">
//             <i className="fas fa-trophy"></i> {/* Trophy Icon */}
//           </div>
//           <div className="achievement-content">
//             <h3>Secured AIR 1245 in CodeKaze by Coding Ninjas (2024)</h3>
//           </div>
//         </div>
//         <div className="achievement-box">
//           <div className="achievement-symbol">
//             <i className="fas fa-graduation-cap"></i> {/* Graduation Cap Icon */}
//           </div>
//           <div className="achievement-content">
//             <h3>Completed MERN Stack summer training from CSEPathshala</h3>
//           </div>
//         </div>
//         <div className="achievement-box">
//           <div className="achievement-symbol">
//             <i className="fas fa-laptop-code"></i> {/* Laptop Icon */}
//           </div>
//           <div className="achievement-content">
//             <h3>8-week DSA with Java course on GeeksforGeeks</h3>
//           </div>
//         </div>
//         <div className="achievement-box">
//           <div className="achievement-symbol">
//             <i className="fas fa-code"></i> {/* Code Icon */}
//           </div>
//           <div className="achievement-content">
//             <h3>Built 5+ full-stack and PHP-based real-world projects</h3>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Achievements;
