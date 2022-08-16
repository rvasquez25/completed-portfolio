import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Project.css";
// import video2 from "../assets/homeVideo4.mp4";


function Projects() {
  return (
    <div className="projects">
      {/* <div className="overlay">
        <video src={video2} autoPlay loop muted />
      </div> */}
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
