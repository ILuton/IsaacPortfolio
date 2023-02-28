import React, { useEffect } from "react";
import { useRef } from "react";
import "../css/Block.css";

import Responsive from "../images/responsive.png";
import Intuition from "../images/intuition.png";
import Fast from "../images/fast.png";

function Blocks() {
  const containerRefOne = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [containerRefOne]);

  function handleScroll() {
    if (containerRefOne.current) {
      const rect = containerRefOne.current.getBoundingClientRect();
      if (rect.top < window.innerHeight / 1.5) {
        const children = containerRefOne.current.children;
        for (let i = 0; i < children.length; i++) {
          children[i].classList.add("animateBlock");
        }
      }
    }
  }

  return (
    <div className="blockContainer" ref={containerRefOne}>
      <div className="block block1">
        <div className="blockImageContainer">
          <img className="aboutImage" src={Responsive} alt="" />
        </div>
        <div className="blockText">
          <h3 className="blockTitle responsive">Responsive</h3>
          <p className="responsiveText">Friendly UI/UX across all devices</p>
        </div>
      </div>

      <div className="block block2">
        <div className="blockImageContainer">
          <img className="aboutImage" src={Intuition} alt="" />
        </div>
        <div className="blockText">
          <h3 className="blockTitle intuitive">Intuitive</h3>
          <p className="intuitiveText">Easy to understand and navigate</p>
        </div>
      </div>

      <div className="block block3">
        <div className="blockImageContainer">
          <img className="aboutImage" src={Fast} alt="" />
        </div>
        <div className="blockText">
          <h3 className="blockTitle fast">Fast</h3>
          <p className="fastText">Optimized for performance</p>
        </div>
      </div>
    </div>
  );
}

export default Blocks;
