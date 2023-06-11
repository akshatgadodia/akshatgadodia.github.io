import React from "react";
import DisplayTechnology from "./DisplayTechnology";
import "../Stylesheets/Projects.css";
import Button from "react-bootstrap/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const DisplayProjects = props => {
  return (
    <div className="display-projects-div">
      <h3>
        {props.name}
      </h3>
      <br />
      {props.details}
      <br />
      <br />
      <div className="display-projects-technology-div">
        {props.technology.map((item, index) => {
          return <DisplayTechnology key={index} name={item} />;
        })}
      </div>
      <br />
      <div className="display-projects-link-div">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <Button variant="outline-primary">
            Explore <ArrowRightAltIcon />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default DisplayProjects;
