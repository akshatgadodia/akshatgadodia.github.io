import React, { useState } from "react";
import { Image } from 'antd';
import "./Stylesheets/DisplayAchievement.css";

const DisplayAchievement = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="achievement-individual-div">
      <div className="achievement-individual-div-image-container">
        {props.image !== undefined && (
          <img
            src="/images/AchievementIcon.png"
            alt="Achievement Icon"
            onClick={() => {
              setVisible(true)
            }}
            title="View Achievement"
            style={{ cursor: "pointer" }}
          />
        )}
        {props.image === undefined && (
          <img src="/images/AchievementIcon.png" alt="Achievement Icon" />
        )}
      </div>
      <div className="achievement-individual-div-text-container">
        {props.name}
      </div>
      <Image
        width={0}
        style={{
          display: 'none',
        }}
        src={props.image}
        preview={{
          visible,
          scaleStep: 0.5,
          src: props.image,
          onVisibleChange: (value) => {
            setVisible(value);
          },
        }}
      />
    </div>
  );
};

export default DisplayAchievement;
