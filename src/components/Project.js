import React, { useState } from "react";
import "../css/Projects.css";
import "../css/Popup.css";
import Stop from "../images/stop.png";
import Top from "../images/top.png";
import Devise from "../images/devise.png";
import Zen from "../images/zen.png";

function Item({ name, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const [className, setClassName] = useState('');

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setClassName("animatePopup")

  };

  const imageToUse = (name) => {
   if (name === "Stop") {
    return Stop
   } else if (name === "Top Tech Blog") {
    return Top
   } else if (name === "Devise") {
    return Devise
   } else {
    return Zen
   }
   }

  return (
    <div className="project">
      <img className="projectImage" onClick={togglePopup} src={imageToUse(name)} alt={name} />

      {isOpen && (
        <div className={className}>
          <h2>{name}</h2>
          <p>{description}</p>
          <button onClick={togglePopup}>Close</button>
        </div>
      )}
    </div>
  );
}

function Project() {
  const projects = [
    {
      name: "Stop",
      description: "test",
    },
    {
      name: "Devise",
      description: "test2",
    },
    {
      name: "Top Tech Blog",
      description: "test3",
    },
    {
      name: "Zen Ten",
      description: "test4",
    }]
    

  return (
    <div id="Work" className="workPage">
      <div className="workPageTitleContainer">
        <h1 className="workPageTitle">My Work</h1>
      </div>
      <div className="workContainer">
        {projects.map((projects, index) => (
          <Item key={index} name={projects.name} description={projects.description}/>
        ))}
      </div>
    </div>
  );
}

export default Project;
