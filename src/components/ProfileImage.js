import React from "react";
import profilePic from "../images/profile-pic.jpg";

export default function ProfileImage() {
  return (
    <img src={profilePic} alt="This is Marten" className="profile-pic"></img>
  );
}
