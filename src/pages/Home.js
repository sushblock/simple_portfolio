import React from "react";
import "../styles/Home.css";
import { userMain, greeting, catch_attention, skills } from "../data/data";
import { Link } from "react-router-dom";

import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

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
            href="https://github.com/sushblock"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/sushilkr23" target="_blank" rel="noreferrer">
            <ImLinkedin />
          </a>
          <Link
            to="#"
            onClick={() =>
              (window.location = "mailto:sushilstudy2013@gmail.com")
            }
          >
            <MdOutlineEmail />
          </Link>
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
