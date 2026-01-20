import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (expandNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [expandNavbar]);

  // Close menu on window resize (if resizing to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && expandNavbar) {
        setExpandNavbar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [expandNavbar]);

  return (
    <nav
      className={`navbar ${expandNavbar ? "open" : ""} ${scrolled ? "scrolled" : ""}`}
    >
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" onClick={() => setExpandNavbar(false)}>
            RV
          </Link>
        </div>

        <button
          className="toggle-button"
          onClick={() => setExpandNavbar((prev) => !prev)}
          aria-label={expandNavbar ? "Close menu" : "Open menu"}
          aria-expanded={expandNavbar}
        >
          <FontAwesomeIcon icon={expandNavbar ? faXmark : faBars} />
        </button>

        <div className={`nav-links ${expandNavbar ? "active" : ""}`}>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={() => setExpandNavbar(false)}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
            onClick={() => setExpandNavbar(false)}
          >
            Projects
          </Link>
          <Link
            to="/experience"
            className={location.pathname === "/experience" ? "active" : ""}
            onClick={() => setExpandNavbar(false)}
          >
            Experience
          </Link>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`nav-overlay ${expandNavbar ? "active" : ""}`}
          onClick={() => setExpandNavbar(false)}
        />
      </div>
    </nav>
  );
}

export default Navbar;