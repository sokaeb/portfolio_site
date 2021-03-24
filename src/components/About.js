import React from "react";
import { about } from "../data";
import SocialMedia from "./SocialMedia";
import avatar from "../images/Fresh Folk - Walking.png";

function About() {
  return (
    <div className="aboutContainer" id="about">
      <div className="row justify-content-center align-items-center">

        <div className="col-sm-6 col-md-3 mt-sm-5 order-2 order-md-2 order-lg-1 text-center aboutImgDiv">
                  <img
                      src={avatar}
                      alt="Walking Avatar"
                      className="bg-transparent aboutImg avatar"
                    />
        </div>

        <div className="col-sm-12 col-md-9 order-1 order-md-1 order-lg-2 mt-sm-5 pt-3 aboutDiv">
          <div className="row justify-content-center">
            <div className="col-10 text-white aboutDescDiv">
              <h2 className="h2 fw-bold aboutText aboutTitle">{about.title}</h2>
              <br></br>
              <p className="aboutText">{about.subTitle}</p>
              <p className="aboutText">{about.description}</p>
              <p className="aboutText">{about.desc2}</p>
              <SocialMedia />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
