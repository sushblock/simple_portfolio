import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Projects.css'


const ProjectItem = ({image, projectName, id}) => {

  const navigate = useNavigate()

  return (
    <div className="projectItem" key={id} onClick={()=>navigate(`/project/${id}`)}>
        <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
        <h1>{projectName}</h1>
    </div>
  )
}

export default ProjectItem