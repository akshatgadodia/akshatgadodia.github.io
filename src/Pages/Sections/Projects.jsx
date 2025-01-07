import React from "react";
import ProjectData from "../../Data/ProjectData";
import "../Stylesheets/Projects.css";
import DisplayProjects from "../Components/DisplayProjects";
import SectionHeading from "../Components/SectionHeading";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <SectionHeading
        heading="Projects"
        quote="“You can do anything you set your mind to.”"
        quoteBy="- Benjamin Franklin"
      />
      {ProjectData.map((item, itemIdx) => {
        return (
          <>
            <h3 class="projects-section-header">{item.section}</h3>
            <div className={`projects-div ${item.class}`}>
              {item.projects.map((project, projectIdx) => {
                return (
                  <DisplayProjects
                    key={projectIdx}
                    name={project.name}
                    index={project.index}
                    details={project.details}
                    technology={project.technology}
                    links={project?.links}
                    contributions={project?.contributions}
                  />
                );
              })}
            </div>
            {itemIdx !== ProjectData.length - 1 && (
              <hr className="abilities-divider-line" />
            )}
          </>
        );
      })}
    </div>
  );
};

export default Projects;
