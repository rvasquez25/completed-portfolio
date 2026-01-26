import React from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/Footer.css";
import resume from "../assets/RosendosResume.pdf";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* <Link to="/" className="footer-brand">
          RV
        </Link> */}

        {/* <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
        </div> */}

        <div className="socialMedia">
          <a
            href="https://github.com/rvasquez25/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/rosendo-vasquez-113212249"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            aria-label="Resume"
          >
            <FontAwesomeIcon icon={faFileAlt} />
          </a>
        </div>

        <div className="footer-divider"></div>

        <p>
          &copy; {currentYear} Rosendo Vasquez II. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;