import React from 'react';
import { Fade } from 'react-reveal';
import { techStack } from '../data';
import sitting from '../images/Fresh Folk - Alone Time.png';

function Skills() {
    return (
        <div className='skillsContainer text-center main' id='skills'>
            <div className='d-md-flex justify-content-center align-items-center skillsDiv'>
            <Fade left duration={1500}>
                <div className='d-lg-flex skillsText'>
                        <div>
                        <p className="mb-1 text-uppercase text-white fs-3 fw-light projTitle">
                            {techStack.title}
                        </p>
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
                    <div className='skillsImgContainer skillsImgDiv'>
                        <img src={sitting} alt="Sitting Avatar" className='skillsImg' />
                    </div>
                </Fade>
            </div>                
        </div>
    )
}

export default Skills
