import { bubble as Menu } from 'react-burger-menu'
import { useState } from 'react'
import "../css/Hamburger.css"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"

function Hamburger() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Menu isOpen={menuOpen} onStateChange={(state) => setMenuOpen(state.isOpen)}>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="work" className="menu-item" href="/work">My Work</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
      <div className='burgerLinks'>
      <a href='./'><img className="burgerGithub" src={github} alt=""/></a>
      <a href='./'><img className="burgerLinkedIn"src={linkedin} alt=""/></a>
      </div>
    </Menu>
  );
}

export default Hamburger
