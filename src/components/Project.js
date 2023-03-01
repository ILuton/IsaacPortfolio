import React, { useState, useEffect } from "react";
import { useRef } from "react";
import "../css/Projects.css";
import "../css/Popup.css";
import Stop from "../images/stop.png";
import Top from "../images/top.png";
import Devise from "../images/devise.png";
import Zen from "../images/zen.png";

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


  return (
    <div className={name}>
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
    },
  ];

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
      if (rect.top < window.innerHeight / 1.5) {
        const children = containerRefProjects.current.children;
        for (let i = 0; i < children.length; i++) {
          children[i].classList.add("animateProjectOne");
         
        }
      }
    }
  }

  return (
    <div id="Work" className="workPage">
      <h1 className="aboutTitle">My Work</h1>
      <div className="workContainer" ref={containerRefProjects}>
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
