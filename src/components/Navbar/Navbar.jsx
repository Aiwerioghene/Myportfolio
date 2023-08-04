import React, { useState } from 'react';
import './navbar.css';
import me from '/Users/adesuwa/Desktop/my-react-app/react-portfolio/src/assest/me.jpg';
import git from '/Users/adesuwa/Desktop/my-react-app/react-portfolio/src/assest/git.jpg';
import linkedin from '/Users/adesuwa/Desktop/my-react-app/react-portfolio/src/assest/linkedin.jpg';
import twitter from '/Users/adesuwa/Desktop/my-react-app/react-portfolio/src/assest/twitter.jpg';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo"><img src={me} alt="me" /></div>

  
      <div className={`nav-links ${showMenu ? 'show' : ''}`}>
        <ul className={`nav-dropdown ${showMenu ? 'active' : ''}`}>
          <li>
            <a href="#home" onClick={toggleMenu}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li>
            <a href="#portfolio" onClick={toggleMenu}>Portfolio</a>
          </li>
        </ul>
      </div>

      <div className="contact-logo">
        <ul>
          <li>
            <a href="https://github.com/daysuwaa" target="_blank" rel="noopener noreferrer">
              <img src={git} alt="git" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedIn" />
            </a>
          </li>
        </ul>
      </div>

      <div className="burger" onClick={toggleMenu}>
        <div className={`line1 ${showMenu ? 'active' : ''}`}></div>
        <div className={`line2 ${showMenu ? 'active' : ''}`}></div>
        <div className={`line3 ${showMenu ? 'active' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
