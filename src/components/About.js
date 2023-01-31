import React from "react";

import "../css/About.css";
import Blocks from "./Blocks";
import Profile from "./Profile";

function About() {
  return (
    <div className="aboutContainer">
      <h1 className="aboutTitle">About</h1>
      <Profile />
      <Blocks />
      
    </div>
  );
}

export default About;
