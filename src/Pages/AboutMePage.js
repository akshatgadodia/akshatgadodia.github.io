import React from "react";
import "./Stylesheets/AboutMePage.css";
import ProfileImage from "../Resources/ProfileImage.png";

const AboutMePage = () => {
  return (
    <div className="about-me" id="profile">
      <h1>Profile</h1>
      I'm a creative web and mobile developer
      <hr />
      <div className="about-me-tab-div">
        <div>
          <h2>About Me</h2>
          <br />
          <p className="about-me-paragraph">
            I'm a full stack web and mobile developer who lives in Jaipur City.
            I’m a forever learner with academic foundation in computer science
            engineering. I constantly keep myself updated with latest design and
            technology trends.
          </p>
        </div>
        <div className="about-me-image-div">
          <img src={ProfileImage} alt="Akshat Gadodia Image" />
        </div>
        <div>
          <h2>Details</h2>
          <br />
          <div className="about-me-details">
            <div>
              <b>Name:</b>
              Akshat Gadodia
            </div>
            <div>
              <b>Age:</b>
              22{" "}
            </div>
            <div>
              <b>Location:</b>
            </div>
            Jaipur, Rajasthan, India <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
