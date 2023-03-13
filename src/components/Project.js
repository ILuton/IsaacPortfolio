import React, { useState, useEffect } from "react";
import { useRef } from "react";
import "../css/Projects.css";
import "../css/Popup.css";
import Stop from "../images/stop.png";
import Top from "../images/top.png";
import Devise from "../images/devise.png";
import Zen from "../images/zen.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

function Item({ name, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const [className, setClassName] = useState("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setClassName("animatePopup");
  };

  const imageToUse = (name) => {
    if (name === "Stop") {
      return Stop;
    } else if (name === "Top Tech Blog") {
      return Top;
    } else if (name === "Devise") {
      return Devise;
    } else {
      return Zen;
    }
  };

  const containerRefProjects = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [containerRefProjects]);

  function handleScroll() {
    if (containerRefProjects.current) {
      const rect = containerRefProjects.current.getBoundingClientRect();
      if (rect.top < window.innerHeight / 1) {
        const children = containerRefProjects.current.children;
        for (let i = 0; i < children.length; i++) {
          children[i].classList.add("animateProject");
         
        }
      }
    }
  }


  return (
    <div className={name} ref={containerRefProjects}>
      <img
        className="projectImage"
        onClick={togglePopup}
        src={imageToUse(name)}
        alt={name}
      />

      {isOpen && (
        <div className={className}>
          <h2>{name}</h2>
          <p>{description}</p>
          <FontAwesomeIcon icon={faAngleDoubleUp} onClick={togglePopup}/>
        </div>
      )}
    </div>
  );
}

function Project() {
  const projects = [
    {
      name: "S.T.O.P.",
      description: "S.T.O.P. is a crowdfunding platform designed for small scientific research programs to help secure funding.",
      liveLink:"",
      githubLink:"",
      technologiesUsed:"",

    },
    {
      name: "Devise",
      description: "Devise is a project planning website that allows users create/join teams with coworkers to manage and orgainze all aspects of a projects in one location.",
      liveLink:"",
      githubLink:"",
      technologiesUsed:"",
    },
    {
      name: "Top Tech Blog",
      description: "Blog site for users to create posts about new and interesting technolgies and share with others",
      liveLink:"",
      githubLink:"",
      technologiesUsed:"",
    },
    {
      name: "Zen Ten",
      description: "Zen Ten is a meditation website where users can pair calming relaxing images of their choice with music for a set duration of the users choosing.",
      liveLink:"",
      githubLink:"",
      technologiesUsed:"",
    },
  ];

  return (
    <div id="Work" className="workPage">
      <h1 className="aboutTitle">My Work</h1>
      <div className="workContainer">
        {projects.map((projects, index) => (
          <Item
            key={index}
            name={projects.name}
            description={projects.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
