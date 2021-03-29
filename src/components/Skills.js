import React from 'react';
import { Fade } from 'react-reveal';
import { techStack } from '../data';
import sitting from '../images/Fresh Folk - Alone Time.png';

function Skills() {
    return (
        <section className='skillsContainer text-center' id='skills'>
            <div className='d-md-flex justify-content-center align-items-center skillsDiv'>
            <Fade left duration={1500}>
                <div className='d-lg-flex skillsText'>
                        <div>
                            <h2 className="mb-1 text-uppercase fs-3 fw-light sectionTitle">
                                {techStack.title}
                            <hr></hr>
                            </h2>
                            <ul className='skillIcons'>
                                {techStack.skills.map((skill, i) => {
                                    if(!skill.backend) {
                                    return (
                                            <li
                                                key={i}
                                                className="software-skill-inline skillItems"
                                                name={skill.techName}
                                            >
                                                <i className={skill.fontAwesomeName}>{skill.techIcon}</i>
                                                <p>{skill.techName}</p>
                                            </li>
                                            )
                                        } else {
                                            return (
                                               
                                                <li
                                                    key={i}
                                                    className="software-skill-inline skillItems"
                                                    name={skill.techName}
                                                >
                                                    <i className={skill.fontAwesomeName}>{skill.techIcon}</i>
                                                    <p>{skill.techName}</p>
                                                </li>
                                               
                                                )
                                        }
                                })}
                            </ul>
                        </div>
                    </div>
                </Fade>

                <Fade right duration={1000}>
                    <div className='skillsImgDiv'>
                        <img src={sitting} alt="Sitting Avatar" className='skillsImg avatar' />
                    </div>
                </Fade>
            </div>                
        </section>
    )
}

export default Skills
