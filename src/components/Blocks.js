import React, { useEffect } from "react";
import { useRef } from "react";
import "../css/Block.css";

import Responsive from "../images/responsive.png";

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
      if (rect.top < window.innerHeight / 1.5) {
        const children = containerRef.current.children;
        for (let i = 0; i < children.length; i++) {
          if (i % 2 !== 1) {
            children[i].classList.add("animate");
          }
        }
      }
    }
  }

  return (
    <div className="blockContainer" ref={containerRef}>
      <div className="block block1">
        <h1 className="blockTitle">Responsive</h1>
      </div>
      <div className="blockInfo">
        <img className="aboutImage" src={Responsive} alt="" />
        <p className="test">text here</p>
      </div>

      <div className="block block2">
        <h1>Intuitive</h1>
      </div>
      <div className="block block3">
        <h1>Fast</h1>
      </div>
      <div className="block block4">
        <h1>Fun</h1>
      </div>
    </div>
  );
}

export default Blocks;
