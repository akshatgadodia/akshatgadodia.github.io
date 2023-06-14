import React from "react";
import "./Stylesheets/Experience.css";
import SectionHeading from "./Components/SectionHeading";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <SectionHeading
        heading="Experience"
        quote="“All the world’s a stage, and all the men and women merely players.”"
        quoteBy=" - William Shakespeare"
      />
      <div className="experience-container"></div>
    </div>
  );
};

export default Experience;
