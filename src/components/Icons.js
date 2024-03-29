import React, { useEffect } from "react";
import { useRef } from "react";

import "../css/Icons.css";

function Icons() {
  const containerRefIcon = useRef(null);
  const containerRefIcons = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [containerRefIcon]);

  function handleScroll() {

    if (containerRefIcons.current) {
      const rect = containerRefIcons.current.getBoundingClientRect();
      if (rect.top < window.innerHeight / 1) {
        containerRefIcons.current.classList.add("animateContainer");
      }
    }

    const reactBar = document.querySelector(".reactBar");
    if (reactBar) {
      const reactBarRect = reactBar.getBoundingClientRect();
      if (reactBarRect.top < window.innerHeight / 1.3) {
        reactBar.classList.add("fillReactBar");
      }
    }
    const cssBar = document.querySelector(".cssBar");
    if (cssBar) {
      const cssBarRect = cssBar.getBoundingClientRect();
      if (cssBarRect.top < window.innerHeight / 1.3) {
        cssBar.classList.add("fillCssBar");
      }
    }

    const htmlBar = document.querySelector(".htmlBar");
    if (htmlBar) {
      const htmlBarRect = htmlBar.getBoundingClientRect();
      if (htmlBarRect.top < window.innerHeight / 1.3) {
        htmlBar.classList.add("fillHtmlBar");
      }
    }

    const jsBar = document.querySelector(".jsBar");
    if (jsBar) {
      const jsBarRect = jsBar.getBoundingClientRect();
      if (jsBarRect.top < window.innerHeight / 1.3) {
        jsBar.classList.add("fillJsBar");
      }
    }

    const mongoBar = document.querySelector(".mongoBar");
    if (mongoBar) {
      const mongoBarRect = mongoBar.getBoundingClientRect();
      if (mongoBarRect.top < window.innerHeight / 1.3) {
        mongoBar.classList.add("fillMongoBar");
      }
    }

    const mysqlBar = document.querySelector(".mysqlBar");
    if (mysqlBar) {
      const mysqlBarRect = mysqlBar.getBoundingClientRect();
      if (mysqlBarRect.top < window.innerHeight / 1.3) {
        mysqlBar.classList.add("fillMysqlBar");
      }
    }
  }

  return (
    <div className="iconContainer" ref={containerRefIcons}>
      <div className="iconBox One">
        <i className="devicon-javascript-plain colored icon"></i>
        <div className="barBackground">
          <div className="jsBar" />
        </div>
      </div>
      <div className="iconBox">
        <i className="devicon-react-original-wordmark colored icon"></i>
        <div className="barBackground">
          <div className="reactBar" ref={containerRefIcon} />
        </div>
      </div>
      <div className="iconBox">
        <i className="devicon-css3-plain-wordmark colored icon"></i>
        <div className="barBackground">
          <div className="cssBar" />
        </div>
      </div>
      <div className="iconBox">
        <i className="devicon-html5-plain-wordmark colored icon"></i>
        <div className="barBackground">
          <div className="htmlBar" />
        </div>
      </div>
      <div className="iconBox">
        <i className="devicon-mongodb-plain-wordmark colored icon"></i>
        <div className="barBackground">
          <div className="mongoBar" />
        </div>
      </div>
      <div className="iconBox Last">
        <i className="devicon-mysql-plain-wordmark icon" style={{color:"white"}}></i>
        <div className="barBackground">
          <div className="mysqlBar" />
        </div>
      </div>
    </div>
  );
}

export default Icons;
