import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";
import pic from "../assets/profilepic.jpg";
import cpCertification from "../assets/CodepathCertification.png";
import udemyCert from "../assets/UdemyWebDevelopmentBootcampCertification.jpg";
import machineLearningCert from "../assets/machinelearningcert.jpeg";
import resume from "../assets/RosendoVasquezNewResume.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDocker,
  faPython,
  faJava,
  faJs,
  faReact,
  faPhp,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faServer,
  faDatabase,
  faCloud,
  faRobot,
  faBrain,
  faNetworkWired,
  faCertificate,
  faTerminal,
  faFlask,
  faCubes,
  faCodeBranch,
  faLink,
  faSearch,
  faChartLine,
  faProjectDiagram,
  faCogs,
  faFilter,
  faPlug,
  faShieldAlt,
  faLaptopCode,
  faGraduationCap,
  faFileAlt,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      image: machineLearningCert,
      title: "Machine Learning Certification",
      link: "https://coursera.org/verify/specialization/J96QB03SXKQ9",
      linkText: "View on Coursera",
    },
    {
      image: udemyCert,
      title: "Udemy Web Development Bootcamp",
      link: "https://www.udemy.com/certificate/UC-81d1ec37-5a28-440d-80fc-6098eedbff15/",
      linkText: "View on Udemy",
    },
    {
      image: cpCertification,
      title: "Codepath Cybersecurity Certification",
      link: "https://www.codepath.org/courses/cybersecurity",
      linkText: "View on Codepath",
    },
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCert(null);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  const skillCategories = [
    {
      title: "Technical Stack",
      icon: faCode,
      skills: [
        { name: "Python", icon: faPython },
        { name: "Java", icon: faJava },
        { name: "JavaScript", icon: faJs },
        { name: "SQL", icon: faDatabase },
        { name: "Bash", icon: faTerminal },
        { name: "PHP", icon: faPhp },
        { name: "FastAPI", icon: faServer },
        { name: "Spring Boot", icon: faServer },
        { name: "Flask", icon: faFlask },
        { name: "ReactJS", icon: faReact },
        { name: "Pydantic", icon: faCode },
      ],
    },
    {
      title: "Data & Infrastructure",
      icon: faCloud,
      skills: [
        { name: "SingleStore", icon: faDatabase },
        { name: "MySQL", icon: faDatabase },
        { name: "MongoDB", icon: faDatabase },
        { name: "S3", icon: faCloud },
        { name: "Docker", icon: faDocker },
        { name: "Kubernetes", icon: faCubes },
        { name: "PCF", icon: faCloud },
        { name: "CI/CD", icon: faCodeBranch },
        { name: "Git", icon: faGitAlt },
        { name: "JupyterHub", icon: faLaptopCode },
      ],
    },
    {
      title: "AI/ML",
      icon: faRobot,
      skills: [
        { name: "LangGraph", icon: faProjectDiagram },
        { name: "LangChain", icon: faLink },
        { name: "Crawl4AI", icon: faSearch },
        { name: "MCP", icon: faPlug },
        { name: "RAG Pipelines", icon: faNetworkWired },
        { name: "Vector Embeddings", icon: faBrain },
        { name: "Vector Search", icon: faSearch },
        { name: "Model Evaluations", icon: faChartLine },
      ],
    },
    {
      title: "Core Competencies",
      icon: faCogs,
      skills: [
        { name: "Knowledge Graphs", icon: faProjectDiagram },
        { name: "System Design", icon: faNetworkWired },
        { name: "Data Preprocessing", icon: faFilter },
        { name: "RESTful APIs", icon: faPlug },
      ],
    },
    {
      title: "Certificates",
      icon: faCertificate,
      skills: [
        { name: "Codepath Cybersecurity", icon: faShieldAlt },
        { name: "Web Development Bootcamp", icon: faLaptopCode },
        { name: "Machine Learning Specialization", icon: faGraduationCap },
      ],
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <span className="greeting">Hello, my name is</span>
            <h1 className="name">Rosendo Vasquez II</h1>
            <div className="role">
              <span>And I'm a </span>
              <span className="typewriter">
                <Typewriter
                  options={{
                    strings: ["Web Developer", "Software Developer", "AI Engineer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <p className="tagline">
              A software developer with a passion for learning and creating.
            </p>
            <div className="cta-section">
              <a
                href="https://github.com/rvasquez25/"
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>View GitHub</span>
              </a>
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="resume-btn"
              >
                <FontAwesomeIcon icon={faFileAlt} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src={pic} alt="Rosendo Vasquez II" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="section-header">
          <h2>Skills & Expertise</h2>
          <p>
            Full-stack developer with experience in building applications,
            AI pipelines, and infrastructure. Currently working at{" "}
            <span className="highlight">Dell</span> as a Software Engineer.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <div className="category-header">
                <FontAwesomeIcon icon={category.icon} className="category-icon" />
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-tag" key={skillIndex}>
                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications">
        <div className="section-header">
          <h2>Certificates</h2>
          <p className="cert-hint">Click on a certification to view full size</p>
        </div>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div
              className="cert-card"
              key={index}
              onClick={() => openModal(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openModal(cert)}
              aria-label={`View ${cert.title}`}
            >
              <img src={cert.image} alt={cert.title} />
              <div className="cert-overlay">
                <span>Click to view</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalOpen && selectedCert && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>
            <h3 className="modal-title">{selectedCert.title}</h3>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="modal-image"
            />
            <a
              href={selectedCert.link}
              target="_blank"
              rel="noreferrer"
              className="modal-link"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              <span>{selectedCert.linkText}</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;