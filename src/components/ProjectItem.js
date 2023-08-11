import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Projects.css";

const ProjectItem = ({ image, projectName, id, projectDescription }) => {
  const navigate = useNavigate();

  return (
    <div
      className="projectItem"
      key={id}
      onClick={() => navigate(`/project/${id}`)}
    >
      <div id="projectImage" className="bgImage">
        <img src={image} alt={projectName} />
        <h1>{projectName}</h1>
        <p>{projectDescription}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
