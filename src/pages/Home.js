import React from "react";
import "../styles/Home.css";
import { userMain, greeting, catch_attention, skills } from "../data/data";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";


function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>
          {greeting} <span className="name">{userMain.name}</span>
        </h2>
        <div className="prompt">
          <p>{catch_attention}</p>
          <a
            href="https://www.linkedin.com/in/sushilkr23"
            target="_blank"
            rel="noreferrer"
          >
            <EmailIcon />
          </a>
          <a
            href="https://github.com/sushblock"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/sushilkr23"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
  
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          {skills.map((skill, id) => (
            <li className="item" key={id}>
              <h2>{skill.name}</h2>
              <span>{skill.level}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Home;
