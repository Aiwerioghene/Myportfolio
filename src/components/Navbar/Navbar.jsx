import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className={`nav-links ${showMenu ? 'show' : ''}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
