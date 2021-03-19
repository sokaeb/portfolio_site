import React from "react";
import { Fade } from 'react-reveal';
import { featuredProjects } from "../data";

function Projects() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="d-lg-flex flex-column pt-5" id="projects">
        <p className="container mt-5 w-25 text-uppercase text-white fs-3 fw-light projTitle">
          {featuredProjects.title}
        </p>
        <div className="d-lg-flex projects">
        
          {featuredProjects.projects.map((proj) => {
            return (
              <div className="d-flex flex-column justify-content-between me-3 mb-5 p-3 text-white projectsCard">
                <div className="projDesc">
                    <img src={proj.video} alt={proj.name} className="img-fluid rounded" />
                    <h3 className="text-center fw-bold my-3">{proj.name}</h3>
                    <p className="projText">{proj.about}</p>
                    <div className="techStackDiv">
                      <span className="projText">Tech Stack:</span>
                      <ul className="d-xl-flex flex-wrap justify-content-evenly projText">
                        {proj.stack.map((item) => {
                          return <li>{item}</li>;
                        })}
                      </ul>
                    </div>
                  </div>

                  <div className="projLinks">
                    <div className="d-flex justify-content-around projButtons">
                      <a
                        href={proj.liveSite}
                        target="_blank"
                        rel="noreferrer"
                        type="button"
                        class="btn btn-primary"
                      >
                        View Live Site
                      </a>
                      <a
                        href={proj.code}
                        target="_blank"
                        rel="noreferrer"
                        type="button"
                        class="btn btn-secondary"
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
