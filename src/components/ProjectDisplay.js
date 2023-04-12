import React from "react";
import "../styles/ProjectDisplay.css";
import { useParams } from "react-router-dom";
import { projectList } from "../data/data";
import { BsGithub } from "react-icons/bs";

const ProjectDisplay = () => {
  const { id } = useParams();

  const project = projectList[id - 1];

  return (
    <div className="project">
      <h1>{project.projName}</h1>
      <img src={project.image} alt={project.projName} />
      <p><h2>Reason</h2>{project.reason}</p>
      <p><h2>Tools</h2>{project.tools}</p>
      <p><h2>Platform</h2>{project.platform}</p>
      <p><h2>Description</h2>{project.description}</p>
      <a
            href={project.github_url}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
    </div>
  );
};

export default ProjectDisplay;
