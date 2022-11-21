import React from "react";
import profilePic from "../images/profile-pic.jpg";

export default function ProfileImage() {
  return (
    <div className="profile-img-wrapper">
      <img src={profilePic} alt="This is Marten" className="profile-pic"></img>
      <img
        src="https://i.paste.pics/373f53b9cbabf18ff37a67a77f43eb9e.png"
        alt="hover me"
        className="hover-me"
      ></img>
    </div>
  );
}
