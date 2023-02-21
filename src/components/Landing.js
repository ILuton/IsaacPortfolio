import React from "react";
import "../css/Landing.css";

function Landing() {
  return (
    <div id="Home" className="landingContainer">
      <div className="landingName">
        <h1>Isaac Luton</h1>
        <h2>Full-stack Web Developer</h2>
      </div>
      <div className="landingLearnMore">
        <a className="learnMoreTitle" href="#About">
          <h3>Learn more</h3>
          <span className="arrow">&#8594;</span>
        </a>
      </div>
    </div>
  );
}

export default Landing;
