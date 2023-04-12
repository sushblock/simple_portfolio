import React from "react";
import "../styles/Footer.css";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/sushilkr23"
          target="_blank"
          rel="noreferrer"
        >
          <ImLinkedin />
        </a>
        <a href="https://github.com/sushblock" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      <p>&copy;2023 Sushil Portfolio Website</p>
    </div>
  );
}

export default Footer;
