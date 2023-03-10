import { bubble as Menu } from "react-burger-menu";
import { useState } from "react";
import "../css/Hamburger.css";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

function Hamburger() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <Menu
      isOpen={menuOpen}
      onStateChange={(state) => setMenuOpen(state.isOpen)}
    >
      <a className="menu-item" href="#Home" onClick={handleItemClick}>
        Home
      </a>
      <a className="menu-item" href="#About" onClick={handleItemClick}>
        About
      </a>
      <a className="menu-item" href="#Work" onClick={handleItemClick}>
        My Work
      </a>
      <a className="menu-item" href="#Contact" onClick={handleItemClick}>
        Contact
      </a>

      <div className="burgerLinks">
        <a target="_blank" rel="noreferrer" href="https://github.com/ILuton">
          <img className="burgerGithub" src={github} alt="" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/isaacluton/"
        >
          <img className="burgerLinkedIn" src={linkedin} alt="" />
        </a>
      </div>
    </Menu>
  );
}

export default Hamburger;
