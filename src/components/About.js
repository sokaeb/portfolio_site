import React from "react";
import { about } from "../data";
import SocialMedia from "./SocialMedia";

function About() {
  return (
    <section className="aboutContainer" id="about">

      <div className="text-white aboutDescDiv">
              <h2 className="h2 text-center fw-bold aboutText aboutTitle">{about.title}</h2>
              <br></br>
              {/* <p className="aboutText">{about.subTitle}</p> */}
              <p className="aboutText">{about.description}</p>
              <p className="aboutText">{about.desc2}</p>
              <SocialMedia />
        </div>
    </section>
  );
}

export default About;
