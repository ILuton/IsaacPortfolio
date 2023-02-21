import React, { useEffect } from "react";
import { useRef } from "react";
import "../css/Block.css";

import Responsive from "../images/responsive.png";
import Intuition from "../images/intuition.png";
import Fast from "../images/fast.png";

function Blocks() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);

  function handleScroll() {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight / 1.15) {
        const children = containerRef.current.children;
        for (let i = 0; i < children.length; i++) {
          children[i].classList.add("animate");
        }
      }
    }
  }

  return (
    <div className="blockContainer" ref={containerRef}>
      <div className="block block1">
        <div className="blockImageContainer">
          <img className="aboutImage" src={Responsive} alt="" />
        </div>
        <div className="blockText">
          <h3 className="blockTitle">Responsive</h3>
          <p className="test">Friendly UI/UX across all devices</p>
        </div>
      </div>

      <div className="block block2">
        <div className="blockImageContainer">
          <img className="aboutImage" src={Intuition} alt="" />
        </div>
        <div className="blockText">
          <h3 className="blockTitle">Intuitive</h3>
          <p className="test">Easy to understand and navigate</p>
        </div>
      </div>

      <div className="block block3">
        <div className="blockImageContainer">
          <img className="aboutImage" src={Fast} alt="" />
        </div>
        <div className="blockText">
          <h3 className="blockTitle">Fast</h3>
          <p className="test">Optimized for performance</p>
        </div>
      </div>
    </div>
  );
}

export default Blocks;
