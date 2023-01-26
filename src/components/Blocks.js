import React, { useEffect } from "react";
import { useRef } from "react";

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
          children[i].classList.add("animate");
        }
      }
    }
  }

  return (
    <div className="blockContainer" ref={containerRef}>
      <div className="block block1">Block 1</div>
      <div className="block block2">Block 2</div>
      <div className="block block3">Block 3</div>
      {/* and so on for each block */}
    </div>
  );
}

export default Blocks;
