import React from "react";
import "../css/Contact.css";
import Form from "./Form";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

function Contact() {
  return (
    <div className="contactContainer" id="Contact">
      <h1 className="contactTitle">Contact Me</h1>
      <Form />
      <div className="contactBottom">
        <div className="contactLinks">
        <a target="_blank" rel="noreferrer" href="https://github.com/ILuton">
          <img className="contactGithub" src={github} alt="" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/isaacluton/"
        >
          <img className="contactLinkedin" src={linkedin} alt="" />
        </a>
        </div>
        <p>Isaac Luton &copy;2023</p>
      </div>
    </div>
  );
}

export default Contact;
