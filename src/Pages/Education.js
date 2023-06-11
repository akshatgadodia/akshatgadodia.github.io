import React from "react";
import "./Stylesheets/Education.css";
import EducationData from "../Data/EducationData.js";
import { Timeline } from "antd";

const Education = () => {
  const CustomDot = () => <div className="education-dot"></div>;

  return (
    <div className="education" id="education">
      <h1>Education</h1>
      “Protons give an atom its identity, electrons its personality.”
      <br /> - Bill Bryson, A short history of nearly everything
      <hr />
      <div className="education-timeline-container">
        <Timeline className="education-timeline">
        {EducationData.map((item, index) => {
        return (
          <Timeline.Item
            className="education-timeline-item"
            dot={<CustomDot />}
            color="white"
            key={index}
          >
            <h3>{item.date}</h3>
            <p>{item.institute}</p>
            <p>{item.course}</p>
            <p>{item.details}</p>
          </Timeline.Item>
        );
      })}
        </Timeline>
      </div>
     
    </div>
  );
};
export default Education;
