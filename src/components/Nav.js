import React from 'react';

function Nav() {
    return (
        <div className='navigationBar'>
            <h1>Kae Benton</h1>

           <div className='navMenu'>
                <ul className='navItems'>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
           </div>
        </div>
    )
}

export default Nav
