import React from "react";

import "../css/Icons.css";

function Icons() {
  return (
    <div className="iconContainer">
      <div className="iconBox">
        <i className="devicon-react-original-wordmark colored icon"></i>
      </div>
      <div className="iconBox">
        <i className="devicon-css3-plain-wordmark colored icon"></i>
      </div>
      <div className="iconBox">
        <i className="devicon-html5-plain-wordmark colored icon"></i>
      </div>
      <div className="iconBox">
        <i className="devicon-javascript-plain colored icon"></i>
      </div>
      <div className="iconBox">
        <i className="devicon-mongodb-plain-wordmark colored icon"></i>
      </div>
      <div className="iconBox">
        <i className="devicon-mysql-plain-wordmark colored icon"></i>
      </div>
    </div>
  );
}

export default Icons;
