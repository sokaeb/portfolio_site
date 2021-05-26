import React from "react";
import { Fade } from 'react-reveal';
import { featuredProjects } from "../data";

function Projects() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <section className="pt-5 projDiv" id="projects">
          <h2 className="mt-5 text-uppercase text-center fs-3 fw-light sectionTitle projsTitle">
            {featuredProjects.title}
          <hr></hr>
          </h2>

          <div className='container projContainer'>
            <div className='row'>
              
                {featuredProjects.projects.map((proj) => {
                  return (
                    <div className='col-md-6 col-lg-4 cardDiv'>
                        <div className='card medium'>
                          <div className='card-image'>
                            <img className='img fluid rounded projImg' src={proj.video} alt={proj.name} />
                           {/* <video className='img fluid rounded projImg' autoplay loop muted playsInline>
                              <source src={proj.video} type='video/mp4' />
                              Your browser does not support the video tag.
                             </video> */}
                          </div>
                          <div className='card-body'>
                            <h3 className='card-title text-center'>{proj.name}</h3>
                            <p className='card-text'>{proj.about}</p>
                          </div>

                          <div className='techStackDiv'>
                            <div>
                              <h4>
                                  Technologies Used
                              </h4>
                                <div>
                                  <ul className="d-flex flex-wrap justify-content-evenly projText">
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
                        </div>
                  )
                })}
              
            </div>
          </div>

        </section>
    </Fade>
  );
}

export default Projects;
