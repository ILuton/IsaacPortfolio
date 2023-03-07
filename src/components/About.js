import React from "react";

import "../css/About.css";
import Blocks from "./Blocks";
import Profile from "./Profile";
import Icons from "./Icons";

function About() {
  return (
    <div className="aboutContainer" id="About">
      <h1 className="aboutTitle">
        About
      </h1>
      <Profile />
      <Blocks />
      <Icons />
    </div>
  );
}

export default About;
