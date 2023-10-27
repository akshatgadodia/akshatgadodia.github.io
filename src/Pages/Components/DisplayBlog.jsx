import React, { useState } from "react";
import DisplayTechnology from "./DisplayTechnology";
import "./Stylesheets/DisplayBlog.css";
import CallMadeIcon from "@mui/icons-material/CallMade";

const DisplayBlog = (props) => {
  return (
    <>
      <div className="display-blogs-div">
        <div className="display-blogs-main-div">
          <h3 className="display-blogs-div-title">{props.title}</h3>
        </div>
        <a href={props.link} className="display-blogs-div-link" target="_blank" title="Click to Read Blog">Read Blog on Medium <CallMadeIcon fontSize="10px" /></a>
        <div className="display-blogs-technology-div">
          {props.categories.map((item, index) => {
            return <DisplayTechnology key={index} name={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayBlog;
