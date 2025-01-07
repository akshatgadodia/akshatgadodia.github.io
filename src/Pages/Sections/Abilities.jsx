import React from "react";
import "../Stylesheets/Abilities.css";
import { SkillsData } from "../../Data/AbilitiesData.js";
import DisplayAbility from "../Components/DisplayAbility.jsx";
import SectionHeading from "../Components/SectionHeading.jsx";

const Abilities = () => {
  return (
    <div className="abilities" id="abilities">
      <SectionHeading
        heading="Abilities"
        quote="“Life without knowledge is death in disguise.”"
        quoteBy=" - Talib Kweli"
      />
      {SkillsData.map((item, itemIdx) => {
        return (
          <>
            <h3>{item.section}</h3>
            <div className="abilities-tab-div">
              {item.skills.map((skill, skillIdx) => {
                return (
                  <DisplayAbility
                    key={itemIdx + "" + skillIdx}
                    name={skill.name}
                    rating={skill.rating}
                  />
                );
              })}
            </div>
            {itemIdx !== SkillsData.length - 1 && (
              <hr className="abilities-divider-line" />
            )}
          </>
        );
      })}
    </div>
  );
};

export default Abilities;
