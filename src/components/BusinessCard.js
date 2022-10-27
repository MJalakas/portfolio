import React from "react";
import MainContent from "./MainContent";
import ProfileImage from "./ProfileImage";
import Footer from "./Footer";

export default function BusinessCard() {
  return (
    <div className="business-card">
      <ProfileImage />
      <MainContent />
      <Footer />
    </div>
  );
}
