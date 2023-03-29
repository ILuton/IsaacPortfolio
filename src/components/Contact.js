import React from "react";
import "../css/Contact.css";
import Form from "./Form";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import back from "../images/back.png";

function Contact() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="contactContainer" id="Contact">
      <div className="contactFormContainer">
      <h1 className="contactTitle">Contact Me</h1>
      <Form />
      </div>
      <div onClick={handleClick} className="contactBottom">
        <img onClick={handleClick} className="back" src={back} alt=""/>
        <h4>Back To Top</h4>
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
