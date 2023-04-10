import React from "react";
import "../styles/ProjectDisplay.css";
import { useParams } from "react-router-dom";
import { projectList } from "../data/data";

const ProjectDisplay = () => {
  const { id } = useParams();

  const project = projectList[id - 1];

  return (
    <div className="project">
      <h1>{project.projName}</h1>
      <img src={project.image} alt={project.projName} />
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDisplay;
