import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {/* <div className="logo">
            <a href="/">
            Portfo<span>lio.</span>
            </a>
        </div> */}
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/Projects"> Projects </Link>
        <Link to="/Experience"> Experience </Link>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Navbar;
