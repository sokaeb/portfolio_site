import React from "react";
import { about } from "../data";
import SocialMedia from "./SocialMedia";
import avatar from "../images/Fresh Folk - Walking.png";

function About() {
  return (
    <div className="container aboutContainer" id="about">
      <div className="row justify-content-center align-items-center">

        <div className="col-sm-4 col-md-4 mt-sm-5 order-2 order-md-1 text-center aboutImgDiv">
                  <img
                      src={avatar}
                      alt="Walking Avatar"
                      className="bg-transparent aboutImg"
                    />
        </div>

        <div className="col-md-8 order-1 order-md-2 mt-sm-5 pt-3 aboutDiv">
          <div className="row justify-content-center">
            <div className="col-10 text-white">
              <h2 className="h2 fw-bold aboutText aboutTitle">{about.title}</h2>
              <br></br>
              <p className="aboutText">{about.subTitle}</p>
              <p className="aboutText">{about.description}</p>
              <p className="aboutText">{about.desc2}</p>
              {/* <p className="aboutText">{about.desc3}</p> */}
              <SocialMedia />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
