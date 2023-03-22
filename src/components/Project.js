import React, { useState, useEffect } from "react";
import { useRef } from "react";
import "../css/Projects.css";
import "../css/Popup.css";
import Stop from "../images/stop.png";
import Top from "../images/top.png";
import Devise from "../images/devise.png";
import Zen from "../images/zen.png";

function Item({ name, description, techUsed, liveLink, githubLink }) {
  const [isOpen, setIsOpen] = useState(false);
  const [className, setClassName] = useState("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setClassName("animatePopup");
  };

  const imageToUse = (name) => {
    if (name === "S.T.O.P.") {
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
    <div className={`${name} projectContainer`} ref={containerRefProjects}>
      <img
        className="projectImage"
        onClick={togglePopup}
        src={imageToUse(name)}
        alt={name}
      />

      {isOpen && (
        <div className={className}>
          <div className="projectTop">
          <button onClick={togglePopup} className="close">
            &#x2716;
          </button>
          <h2>{name}</h2>
        </div>
          <p>{description}</p>
          <div>
          <p className="techUsed">Technolgies Used</p>
          <p>{techUsed}</p>
          </div>
          <div className="popupLinks">
            <a href={liveLink} target="_blank" rel="noreferrer">
              <h4>Live link</h4>
            </a>
            <a href={githubLink} target="_blank" rel="noreferrer">
              <h4>Github link</h4>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function Project() {
  const projects = [
    {
      name: "S.T.O.P.",
      description:
        "S.T.O.P. is a crowdfunding platform designed for small scientific research programs to help secure funding.",
      liveLink: "https://stop.herokuapp.com/",
      githubLink: "https://github.com/ILuton/STOP",
      technologiesUsed:
        "React, HTML, CSS, MongoDB, GraphQL, Apollo Server, JSON Web Tokens, Stripe",
    },
    {
      name: "Devise",
      description:
        "Devise is a project planning website that allows users to create/join teams and manage and organize projects.",
      liveLink: "https://devise.herokuapp.com/",
      githubLink: "https://github.com/ILuton/DEVise-",
      technologiesUsed:
        "Javascript, HTML, CSS, HandleBars, MySql, Express.js, Bcrypt",
    },
    {
      name: "Top Tech Blog",
      description:
        "Blog site for users to create posts about new and interesting technolgies and share with others",
      liveLink: "https://thawing-fortress-77603.herokuapp.com/",
      githubLink: "https://github.com/ILuton/Tech-Blog-",
      technologiesUsed:
        "Javascript, HTML, CSS, HandleBars, MySql, Express.js, Bcrypt",
    },
    {
      name: "Zen Ten",
      description:
        "Zen Ten is a meditation website where users can pair calming relaxing images of their choice with music for a set duration of the users choosing.",
      liveLink: "",
      githubLink: "",
      technologiesUsed: "Javascript, CSS, HTML, Bulma, Web API's",
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
            techUsed={projects.technologiesUsed}
            liveLink={projects.liveLink}
            githubLink={projects.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
