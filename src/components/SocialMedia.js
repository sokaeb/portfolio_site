import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle, faMedium } from '@fortawesome/free-brands-svg-icons';
import { socialMedia } from "../data";


const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const gmail = <FontAwesomeIcon icon={faGoogle} />
const medium = <FontAwesomeIcon icon={faMedium} />

function SocialMedia() {
  return (
    <div className="socialMedia">
      {socialMedia.github ? (
        <a
          href={socialMedia.github}
          className="icon-button githubIcon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github">{github}</i>
          <span></span>
        </a>
      ) : null}

      {socialMedia.linkedin ? (
        <a
          href={socialMedia.linkedin}
          className="icon-button linkedinIcon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in">{linkedin}</i>
          <span></span>
        </a>
      ) : null}

      {socialMedia.gmail ? (
        <a
          href={`mailto:${socialMedia.gmail}`}
          className="icon-button gmailIcon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-google">{gmail}</i>
          <span></span>
        </a>
      ) : null}

{socialMedia.medium ? (
        <a
          href={socialMedia.medium}
          className="icon-button mediumIcon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-medium-m">{medium}</i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}

export default SocialMedia;
