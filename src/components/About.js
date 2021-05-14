import React from "react";
import { Fade } from 'react-reveal';
import { about } from "../data";
import SocialMedia from "./SocialMedia";

function About() {
  return (
    <section className="aboutContainer" id="about">

      <Fade top>
      <div className="text-white aboutDescDiv">
              <h2 className="h2 text-center fw-bold aboutText aboutTitle">{about.title}</h2>
              <br></br>
              <p className="aboutSubtitle">{about.subtitle}</p>
              <p className="aboutText">{about.description}</p>
              <p className="aboutText">{about.desc2}</p>
              <SocialMedia />
        </div>
    </Fade>
    </section>
  );
}

export default About;
