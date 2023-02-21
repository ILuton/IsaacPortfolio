import React from "react";
import "../css/Profile.css";
import ProfilePic from "../images/ProfilePic.jpg";

function Profile() {
  return (
    <div className="profileContainer">
      <div className="profilePicContainer">
        <img className="profilePic" src={ProfilePic} alt="" />
      </div>
      <div className="profileText">
        <p>
          Hello, my name is Isaac Luton and I'm a talented web developer with 2
          years of experience designing and developing websites. My expertise
          lies in creating responsive web designs that not only look visually
          appealing but also provide an exceptional user experience. I have a
          keen eye for detail and am committed to ensuring that every project I
          work on meets the highest standards of quality and functionality. I am
          constantly seeking to learn and grow as a web developer by staying
          up-to-date with the latest trends and best practices in web
          development.
        </p>
      </div>
    </div>
  );
}

export default Profile;
