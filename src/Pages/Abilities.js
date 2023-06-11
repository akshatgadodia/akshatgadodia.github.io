import React from "react";
import "./Stylesheets/Abilities.css";
import { SkillsData, LanguagesData, ToolsData } from "../Data/AbilitiesData.js";
import DisplayAbility from "./Components/DisplayAbility";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import SectionHeading from "./Components/SectionHeading";

const Abilities = () => {
  const stars = (a) => {
    var list = [];
    var i;
    for (i = 0; i < a; i++) {
      list.push(<StarIcon key={i} fontSize="small" />);
    }
    for (i = 0; i < 5 - a; i++) {
      list.push(<StarOutlineIcon key={a + i} fontSize="small" />);
    }
    return list;
  };

  return (
    <div className="abilities" id="abilities">
      <SectionHeading
        heading="Abilities"
        quote="“Life without knowledge is death in disguise.”"
        quoteBy=" - Talib Kweli"
      />
      <h4>Skills</h4>
      <div className="abilities-tab-div">
        {SkillsData.map((item, index) => {
          return (
            <DisplayAbility
              key={"A" + index}
              name={item.name}
              rating={stars(item.rating)}
            />
          );
        })}
      </div>
      <hr />
      <h4>Languages</h4>
      <div className="abilities-tab-div">
        {LanguagesData.map((item, index) => {
          return (
            <DisplayAbility
              key={"B" + index}
              name={item.name}
              rating={stars(item.rating)}
            />
          );
        })}
      </div>
      <hr />
      <h4>Tools</h4>
      <div className="abilities-tab-div">
        {ToolsData.map((item, index) => {
          return (
            <DisplayAbility
              key={"C" + index}
              name={item.name}
              rating={stars(item.rating)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Abilities;
