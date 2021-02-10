import React from 'react';
import avatar from '../images/Fresh Folk - Walking.png';

function About() {
    return (
        <div className='aboutContainer' id='about'>
            <div className="about">
                <div className='aboutImgContainer'>
                    <img src={avatar} alt="Walking Avatar" className="aboutImg" />
                </div>

                <div className='aboutDesc'>
                    <h3>Hello, I'm Kae.</h3>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius ipsum massa, vitae ornare dui hendrerit in. Curabitur dignissim in risus id gravida. Nunc consequat risus et lectus ultricies, sed vehicula lorem consequat. Cras blandit ligula mauris. Donec a vestibulum massa, vitae pretium nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt sapien eget libero sagittis, ut tristique sem blandit. Praesent arcu tellus, varius nec ultricies ut, interdum quis purus.</p>
                </div>
            </div>
        </div>
    )
}

export default About
