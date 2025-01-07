import React, { useState, useEffect } from "react";
import "../Stylesheets/AboutMePage.css";
import ProfileImage from "../../Resources/ProfileImage.png";
import SectionHeading from "../Components/SectionHeading";

const AboutMePage = () => {
  const [age, setAge] = useState(23);

  useEffect(() => {
    const calculateAge = (birthDate) => {
      const today = new Date();
      const birth = new Date(birthDate);
      let age = today.getFullYear() - birth.getFullYear();
      const monthDiff = today.getMonth() - birth.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
      }
      return age;
    };

    const birthDate = "2001-03-04";
    setAge(calculateAge(birthDate));
  }, []);

  return (
    <div className="about-me" id="profile">
      <SectionHeading
        heading="Profile"
        quote="Where creativity meets code — that's my world as a web developer."
      />
      <div className="about-me-tab-div">
        <div>
          <h2>About Me</h2>
          <p className="about-me-paragraph">
            I am a passionate full-stack web and mobile developer based in Jaipur
            with a strong background in computer science and engineering. As a
            Software Engineer with around two years of experience, I specialize
            in backend development using Django, API design, and system
            performance optimization. Proficient in HTML, CSS, JavaScript,
            React, and Databases, I thrive on creating exceptional user
            experiences and delivering scalable solutions. Recognized for
            outstanding performance, I am a proactive problem-solver dedicated
            to continuous learning and staying ahead of technology trends.
          </p>
        </div>
        <div className="about-me-image-div">
          <img src={ProfileImage} alt="Akshat Gadodia" />
        </div>
        <div>
          <h2>Details</h2>
          <div className="about-me-details">
            <div>
              <b>Name:</b>
              Akshat Gadodia
            </div>
            <div>
              <b>Age:</b>
              {age}{" "}
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
