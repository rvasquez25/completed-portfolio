import React from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";
import pic from "../assets/newProfilePic.jpg";
import cpCertification from "../assets/CodepathCertification.png";
import udemyCert from "../assets/UdemyWebDevelopmentBootcampCertification.jpg"
import video from "../assets/homeVideo4.mp4";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import homeBg from "../assets/homeBackgroundPic.jpg"

function Home() {
  return (
    <div className="home">
      <div className="overlay">
        <video src={video} autoPlay loop muted />
        {/* <img src={homeBg} alt="Missing Imagery" ></img> */}
      </div>
      {/* <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }} className = "flex-container"> */}
      <div className="about">
        <div class="about-content">
          {/* <div className="overlay"></div> */}
          {/* <video src={video} autoPlay loop muted> */}
          <div class="column left">
            <div className="text-1"> Hello, my name is</div>
            <div className="name">Rosendo Vasquez II</div>
            <div className="text-1">
              And I'm a{" "}
              <span >
              {/* <span style={{ display: "inline-block" }}> */}
                <Typewriter
                  options={{
                    strings: ["Web Developer", "Software Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <div className="prompt">
              <p>
                A software developer with a passion for learning and creating.
              </p>
              <p>Click "
                <a href="https://github.com/rvasquez25/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                 " icons to access respective github repositories :)
              </p>
            </div>
          </div>
          <div class="column right">
            <div className="homeImage">
              <img
                src={pic}
                alt="Missing Imagery"
              ></img>
            </div>
          </div>
          {/* </video> */}
        </div>
      </div>
      {/* </div> */}
      <div className="skills">
        <h1> Skills</h1>
        <div class="skills-content">
          <div className="column left">
            <div className="text">My Experience.</div>
            <p>
              I've began taking an interest in Computer Science before I started college in the Summer of 2019.
              The first language I learned is Python by watching videos on basic coding and data structures from
              a youtuber named Corey Schafer. At UTEP, I've completed my first three years which have taught me more
              in-depth about C, Java, and Python through courses such as <span>Data Structures</span>, <span>Computer Security</span>, <span>Software Vulnerabilties</span>
              , <span>Computer Architecture</span>, <span>Theory of OS</span>, <span>Software Engineering I & II</span>, <span>Database Management</span> and <span>Computer Networks</span>. 
              I'm currently interning for <span>Dell</span> as a Software Development Intern who assists in back-end development. I began my
              web/software development journey in October 2021 for <span>SPS ARS - Aerial Remote Sensing</span> and have been continuously growing
              to better myself as a professional.
            </p>
            <a
              href="https://youtu.be/dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>ReactJS</span>
                <span>Beginner</span>
              </div>
              <div class="line react"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>NodeJS</span>
                <span>Intermediate</span>
              </div>
              <div class="line node"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>API Integration</span>
                <span>Intermediate</span>
              </div>
              <div class="line api"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Database Management</span>
                <span>Intermediate</span>
              </div>
              <div class="line db"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span>Beginner</span>
              </div>
              <div class="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>CSS</span>
                <span>Beginner</span>
              </div>
              <div class="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Javascript</span>
                <span>Beginner</span>
              </div>
              <div class="line js"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Python</span>
                <span>Intermediate</span>
              </div>
              <div class="line python"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>C</span>
                <span>Intermediate</span>
              </div>
              <div class="line c"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Java</span>
                <span>Intermediate</span>
              </div>
              <div class="line java"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="certifications">
        <h1>Certifications</h1>
        <img src={cpCertification} alt=""></img>
      </div>
      <div className="udemyCert">
        <img src={udemyCert} alt = ""></img>
      </div>
    </div>
  );
}

export default Home;
