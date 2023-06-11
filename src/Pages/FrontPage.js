import React from "react";
import "./Stylesheets/FrontPage.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { TypeAnimation } from "react-type-animation";

const FrontPage = () => {
  return (
    <div id="home-page">
      <div className="context">
        Hello I'm
        <h1>Akshat Gadodia</h1>
        <TypeAnimation
          sequence={[
            "Full Stack Web Developer",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Mobile Developer",
            1000,
          ]}
          wrapper="span"
          speed={10}
          repeat={Infinity}
        />
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="navigation-button">
        <a href="#About-Me-Page">
          <ArrowCircleRightIcon fontSize="large" />
        </a>
      </div>
      <div className="navigation-bar-button">
        <a href="#About-Me-Page">
          <ArrowDownwardIcon
            fontSize="large"
            className="navigation-bar-button-link"
          />
        </a>
      </div>
    </div>
  );
};

export default FrontPage;
