// Projects.js
import React, { useState } from "react";
import "../styles/Projects.css";
import chat from "../assets/chat.png";
import exam from "../assets/exam.png";
import tourism from "../assets/tourism.png";
import salon from "../assets/salon.jpg";
import weather from "../assets/weatherapp.jpg";
import food from "../assets/food.png";
import car from "../assets/car.png";
import hospital from "../assets/hospital.png";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("major");

  const projects = [
    {
      title: "Weather Application",
      category: "major",
      duration: "Mar 2024",
      description:
        "A responsive weather forecast app delivering real-time weather updates with a clean, React-powered user interface.",
      keyFeatures: [
        "Developed a dynamic frontend using React.js with modular components",
        "Integrated real-time weather data using a public weather API",
        // "Enabled location-based search and dynamic data rendering",
        "Designed a responsive and modern UI using Bootstrap and custom CSS",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "Bootstrap",
        "CSS",
        "Weather API",
      ],

      image: weather, // Add your project image path
      links: {
        github: "https://github.com/SandeepKumarChappa/Weather-Dashboard",
        // live: "",
      },
    },
    {
      title: "Tourism Management System",
      category: "minor",
      duration: "Dec 2024",
      description:
        "A web-based application developed to streamline tourism services, enabling users to explore, book, and manage travel packages seamlessly.",
      keyFeatures: [
        "Built using PHP and MySQL to handle bookings, package listings, and user management",
        "Implemented secure admin and user authentication systems",
        "Designed user-friendly interfaces for browsing tours and managing bookings",
        // "Enabled dynamic content updates and integrated a responsive layout for better accessibility"
      ],
      technologies: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Apache Server (via XAMPP)",
        "PHPMyAdmin"
      ],
      image: tourism,
      links: {
        github: "https://github.com/SandeepKumarChappa/Tourism-Management-System",
      },
    },
    {
      title: "Chat Application",
      category: "major",
      duration: "May 2024",
      description:
        "A real-time chat platform enabling seamless communication for 50+ simultaneous users with low-latency message delivery.",
      keyFeatures: [
        "Developed real-time messaging using Socket.io, supporting over 50 concurrent users with optimized, low-latency delivery",
        "Integrated secure user registration and login system with ID/password-based authentication",
        "Built a responsive, user-friendly chat interface using React.js",
        // "Ensured scalability with Node.js, Express.js, and MongoDB for backend logic and persistent chat data storage",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "JWT",
        "CSS"
      ],
      image: chat,
      links: {
        github: "https://github.com/SandeepKumarChappa/Chat-application",
        // live: "",
      },
    },
    {
      title: "Food-Website",
      category: "major",
      duration: "Jan 2023",
      description:
        "A simple yet functional online food ordering website allowing users to browse menus, place orders, and make secure payments.",
      keyFeatures: [
        "Designed a responsive user interface using HTML, CSS, and JavaScript",
        "Implemented dynamic food menu with ordering functionality",
        "Integrated payment gateway API for secure online transactions",
        // "Enabled users to place and track food orders in real-time",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Payment Gateway API",
      ],
      image: food,
      links: {
        github: "https://github.com/SandeepKumarChappa/Chat-application",
        // live: "",
      },
    },
    {
      title: "Online Examination System",
      category: "minor",
      duration: "June 2023",
      description:
        "A full-stack web application enabling teachers to create exams and students to attend them online with instant result evaluation.",
      keyFeatures: [
        "Developed secure login system for both students and teachers with role-based access",
        "Enabled teachers to create and manage question papers dynamically",
        "Allowed students to attempt exams online and view results instantly",
        // "Built with a scalable MERN stack architecture for smooth performance and data handling",
      ],
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
        "CSS"
      ],
      image: exam, // Add the image import
      links: {
        github: "https://github.com/SandeepKumarChappa/Online-Examination-System", // Add your actual GitHub link
        // live: "", // Add live demo link if available
      },
    },
    {
      title: "Car Rental Management",
      category: "minor",
      duration: "Aug 2024",
      description:
        "A web-based application designed to streamline the process of renting cars online, managing vehicle availability, bookings, and user data efficiently.",
      keyFeatures: [
        "Implemented secure user and admin login system with role-based access",
        "Enabled users to browse available cars and make online bookings",
        "Allowed admins to manage car listings and rental transactions",
        // "Designed a responsive UI for seamless experience across devices"
      ],
      technologies: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "XAMPP",
        "PHPMyAdmin"
      ],
      image: car, // Replace with actual image reference if available
      links: {
        github: "https://github.com/SandeepKumarChappa/Car-Rental-Management",
        // live: "",
      },
    },

    {
      title: "Hospital Management System",
      category: "major",
      duration: "Feb 2024",
      description:
        "A web-based application designed to digitize hospital operations by allowing doctors to manage appointments and patients to view doctor availability and book slots online.",
      keyFeatures: [
        "Developed separate login systems for doctors and patients with secure authentication",
        "Enabled doctors to view and manage patient appointments online",
        "Allowed patients to check doctor availability and book appointments",
        // "Built a responsive and user-friendly interface for smooth access across devices"
      ],
      technologies: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "XAMPP",
        "PHPMyAdmin"
      ],
      image: hospital, // Replace with actual image reference if available
      links: {
        github: "https://github.com/SandeepKumarChappa/Hospital-Management-System",
        // live: "",
      },
    },
    {
      title: "Salon Management System",
      category: "minor",
      duration: "Aug 2024",
      description:
        "A web-based system designed to simplify salon operations, allowing customers to book appointments online and salon staff to manage schedules efficiently.",
      keyFeatures: [
        "Implemented secure login system for customers and salon staff",
        // "Enabled customers to view available services and book appointments based on stylist availability",
        "Allowed salon staff to manage bookings, view schedules, and update service slots",
        "Designed a responsive UI to ensure smooth experience across all devices"
      ],
      technologies: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "XAMPP",
        "PHPMyAdmin"
      ],
      image: salon, // Replace with actual image reference if available
      links: {
        github: "https://github.com/SandeepKumarChappa/Saloon-Management-System",
        // live: "",
      },
    },
    
  ];

  const filters = [
    { key: "major", label: "Major Projects" },
    { key: "minor", label: "Minor Projects" },
  ];

  const filteredProjects = projects.filter(
    (project) => project.category === activeFilter
  );

  const handleScrollClick = () => {
    const contactSection = document.getElementById("coding-profiles");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${
                activeFilter === filter.key ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              className={`project-card ${project.category}`}
              key={index}
              style={{ "--i": index }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      <i className="fab fa-github"></i>
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="duration">
                    <i className="far fa-calendar-alt"></i>
                    {project.duration}
                  </span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="key-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.keyFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span className="tech-tag" key={idx}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div
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
      </div>
    </section>
  );
}

export default Projects;
