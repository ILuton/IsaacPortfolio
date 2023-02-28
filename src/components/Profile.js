import React, { useEffect } from "react";
import "../css/Profile.css";
import { useRef } from "react";
import ProfilePic from "../images/ProfilePic.jpg";

function Profile() {
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
      if (rect.top < window.innerHeight / 1) {
        const children = containerRef.current.children;
        for (let i = 0; i < children.length; i++) {
          children[i].classList.add("animatePhoto");
        }
      }
    }
  }
  return (
    <div className="profileContainer" ref={containerRef}>
      <div className="profilePicContainer">
        <img className="profilePic" src={ProfilePic} alt="" />
      </div>
      <div className="profileText">
        <p>
          I specialize in designing responsive websites with a focus on both
          aesthetics and usability. My attention to detail ensures high-quality
          results. I'm always striving to improve my skills and keep up with the
          latest web development trends and practices.
        </p>
      </div>
    </div>
  );
}

export default Profile;
