import React, { useState, useEffect } from 'react';
import SocialMedia from './SocialMedia';
import resume from "../images/resume.pdf";


function Contact() {
  // const [isMoble, setMoble] = useState(window.innerWidth < 768);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 2360);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 2360);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

    return (
      <div className='mb-5 text-center contactsContainer' id='contact'>
          <SocialMedia />

          {isDesktop ? (
                  <>
                      <button type="button" class="btn btn-lg text-white resumeBtn" data-bs-toggle="modal" data-bs-target="#resume">
                      View Resume
                      </button>
                      <div class="modal fade" id="resume" tabindex="-1" aria-labelledby="viewResume" aria-hidden="true">
                      <div class="modal-dialog modal-xl modal-fullscreen-xl-down">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <div>
                            <object type="application/pdf" data={resume} width="1000" height="600"><a href="https://docs.google.com/document/d/12AB_ZTF-1NR98qcF7Ak_qb6mJsWtQPcSGn2BB479UcU/edit?usp=sharing" target="_blank" rel="noreferrer">View Resume</a></object>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    </>
          ) : (
            <a href="https://docs.google.com/document/d/1yK4UfMK_mfvT1kJh4YxrDBm7B3NQXlvELI-3Qiut_Js/edit?usp=sharing" target="_blank" rel="noreferrer"><button type="button" class="btn btn-lg text-white resumeBtn" data-bs-target="#resume">
            View Resume
          </button></a>
          )}

      </div>
    )
}

export default Contact
