import React, { useState } from 'react';
import { about } from "../data";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Nav() {
    const [ nav, setNav ] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 536) {
            setNav(true);
        } else {
            setNav(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={nav ? 'navbar navbar-expand-lg fixed-top navbar-dark navSection active' : 'navbar navbar-expand-lg fixed-top navbar-dark navSection'}>
            <button className="navbar-toggler ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

             <div className='navbar-brand text-uppercase h1 fs-3 navBrand'>
                    <a className='nav-link name' href='#about'>{about.name}</a>
            </div>
            <div className='collapse navbar-collapse justify-content-end navMenu' id='navbarNavAltMarkup'>
                <div className='navbar-nav text-uppercase fs-5 fw-light navItems'>
                    <a className='nav-link text-white p-3' href='#about'>About</a>
                    <a className='nav-link text-white p-3' href='#skills'>Skills</a>
                    <a className='nav-link text-white p-3' href='#projects'>Projects</a>
                    <a className='nav-link text-white p-3' href='#contact'>Resume</a>
                </div>
            </div>
        </nav> 
    )
}

export default Nav
