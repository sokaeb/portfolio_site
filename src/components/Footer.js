import React from 'react';
import { Fade } from 'react-reveal';

function Footer() {
    return (
        <div className='mt-2 p-5 text-center fs-4 text-white footerContainer' id='footer'>
            <Fade right duration={1000}>
                <p>Thanks for visiting!</p>
            </Fade>
        </div>
    )
}

export default Footer
