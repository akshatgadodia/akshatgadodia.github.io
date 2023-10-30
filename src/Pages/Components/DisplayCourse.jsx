import React, {useState} from "react";
import "./Stylesheets/DisplayCourse.css";

const DisplayCourse = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="certification-individual-div">
      <div className="certification-individual-div-image-container">
        {(props.link !== undefined) && <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          aria-label="certificate link"
        >
          <img src="/images/CertificateIcon.png" alt="Certification Icon" />
        </a>}
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
        {props.image === undefined && props.link === undefined && (
          <img src="/images/CertificateIcon.png" alt="Certification Icon" />
        )}
      </div>
      <div className="certification-individual-div-text-container">
        {props.name}
      </div>
    </div>
  );
};

export default DisplayCourse;
