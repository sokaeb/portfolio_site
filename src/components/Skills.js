import React from 'react';
import { techStack } from '../data';
import sitting from '../images/Fresh Folk - Alone Time.png'

function Skills() {
    return (
        <div className='skillsContainer' id='skills'>
            <div className='skills'>
                {techStack.map(item => {
                    return (
                        <div>
                            <h3>{item.name}</h3>
                            <li>{item.skills.one}</li>
                            <li>{item.skills.two}</li>
                            <li>{item.skills.three}</li>
                            <li>{item.skills.four}</li>
                            <li>{item.skills.five}</li>
                        </div>
                    );
                })}

                <div className='skillsImgContainer'>
                    <img src={sitting} alt="Sitting Avatar" className='skillsImg' />
                </div>
            </div>
                
        </div>
    )
}

export default Skills
