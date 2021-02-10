import React from 'react';
import { projects } from '../data';

function Projects() {
    return (
        <div className='projectsContainer' id='projects'>
            <div className='projects'>
                {projects.map((proj) => {
                    return (
                        <div>
                            <h3>{proj.name}</h3>
                            <p>{proj.about}</p>
                            <p>{proj.techStack}</p>
                        </div>
                    )}
                )}
            </div>
        </div>
    )
}

export default Projects
