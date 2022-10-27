import React from "react";
import twitterIcon from "../images/Twitter Icon.png";
import facebookIcon from "../images/Facebook Icon.png";
import instagramIcon from "../images/Instagram Icon.png";
import githubIcon from "../images/GitHub Icon.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="buttons">
        <a className="buttons--twitter" href="https://twitter.com/nudfik">
          <img src={twitterIcon}></img>
        </a>
        <a
          className="buttons--facebook"
          href="https://www.facebook.com/marten.jalakas.5"
        >
          <img src={facebookIcon}></img>
        </a>
        <a className="buttons--instagram">
          <img src={instagramIcon}></img>
        </a>
        <a className="buttons--github" href="https://github.com/nuf1k">
          <img src={githubIcon}></img>
        </a>
      </div>
    </footer>
  );
}
