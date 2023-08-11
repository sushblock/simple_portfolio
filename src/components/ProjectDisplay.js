import React from "react";
import "../styles/ProjectDisplay.css";
import { useParams } from "react-router-dom";
import { projectList } from "../data/data";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = projectList[id - 1];

  return (
    <div className="project">
      <div className="section">
        <h1>{project.application.name}</h1>
        <p>{project.application.description}</p>
        <a href={project.website_url} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt={project.projName} />
        </a>
      </div>
      <div className="section">
        <h2>Features:</h2>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Tools and Technologies:</h2>
        <ul>
          {Object.entries(project.toolsAndTechnologies).map(
            ([tool, description], index) => (
              <li key={index}>
                <strong>{tool}:</strong> {description}
              </li>
            )
          )}
        </ul>
      </div>

      <div className="section">
        <h2>Accomplishments:</h2>
        <ul>
          {project.accomplishments.map((accomplishment, index) => (
            <li key={index}>{accomplishment}</li>
          ))}
        </ul>
      </div>

      <div className="project-links">
        <a href={project.github_url} target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href={project.website_url} target="_blank" rel="noreferrer">
          <CgWebsite />
        </a>
      </div>
    </div>
  );
};

export default ProjectDisplay;
