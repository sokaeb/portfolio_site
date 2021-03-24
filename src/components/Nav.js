import React from 'react';
import { about } from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const bars = <FontAwesomeIcon icon={faBars} />

function Nav() {
    return (
        <nav className='navbar fixed-top navbar-expand-lg pt-2 px-4 navSection'>
            <button className="navbar-toggler mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon fs-1">{bars}</span>
            </button>

             <div className='navbar-brand text-uppercase h1 fs-3'>
                    <a className='nav-link text-white name' href='#about'>{about.name}</a>
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
