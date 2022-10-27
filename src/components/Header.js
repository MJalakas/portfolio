import React from "react";
import email from "../images/email.png";
import linkedin from "../images/linkedin.png";

export default function Header() {
  return (
    <div className="header">
      <div className="titles-wrapper">
        <h1 className="name">Marten Jalakas</h1>
        <h2 className="profession">Frontend Developer</h2>
        <a className="website" href="https://martencode.ee">
          martencode.ee
        </a>
      </div>
      <div className="buttons-wrapper">
        <a href="mailto:marten@jalakas.ee">
          <img className="email-logo" alt="Email logo" src={email}></img>
        </a>
        <a href="https://www.linkedin.com/in/martenjalakas/">
          <img
            className="linkedin-logo"
            alt="Linkedin logo"
            src={linkedin}
          ></img>
        </a>
      </div>
    </div>
  );
}
