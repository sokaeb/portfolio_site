import React from "react";
import { Fade } from 'react-reveal';
import { featuredProjects } from "../data";

function Projects() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="d-lg-flex flex-column pt-5 projDiv" id="projects">
          <p className="mt-5 text-uppercase text-white text-center fs-3 fw-light sectionTitle">
            {featuredProjects.title}
          </p>
          <div className="d-flex flex-column projects mobile">
          
            {featuredProjects.projects.map((proj) => {
              return (
                <div className="d-flex flex-column justify-content-between me-3 mb-5 p-3 text-white projectsCard">

                  <div className="d-flex projDetailDiv">
                      <div className="projImgDiv mobile">
                        <img src={proj.video} alt={proj.name} className="img-fluid rounded projImg" />
                      </div>

                      <div className="projDescDiv mobile">
                        <h3 className="text-center fw-bold my-3">{proj.name}</h3>
                        <p className="projText">{proj.about}</p>

                       
                        <div className="techStackDiv">
                          <span className="projText">Tech Stack:</span>
                          <ul className="projText">
                            {proj.stack.map((item) => {
                              return <li>{item}</li>;
                            })}
                          </ul>
                        </div>

                      </div>
                    </div>

                    <div className="projLinks mobile">
                      <div className="d-flex justify-content-around projButtons">
                        <a
                          href={proj.liveSite}
                          target="_blank"
                          rel="noreferrer"
                          type="button"
                          className="btn btn-primary"
                        >
                          View Live Site
                        </a>
                        <a
                          href={proj.code}
                          target="_blank"
                          rel="noreferrer"
                          type="button"
                          className="btn btn-secondary"
                        >
                          View Code
                        </a>
                      </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
    </Fade>
  );
}

export default Projects;
