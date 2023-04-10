import React from "react";
import "../styles/Projects.css";
import "../styles/ProjectDisplay.css";
import ProjectItem from "../components/ProjectItem";
import { projectList } from "../data/data";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projectTitle">My Personal Projects</h1>
      <div className="projectList">
        {projectList.map((item) => {
          return (
            <ProjectItem
              id={item.id}
              projectName={item.projName}
              image={item.image}              
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
