import './Navbar.scss';
import React from 'react';

export const Navbar = () => {
    return (
      <div id="navbar-cont">
        <div id="navbar-menu-cont">
          <a className="navbar-button" href="#projects">Projekty</a>
          <a className="navbar-button" href="#skills">Umiejętności</a>
          <a className="navbar-button" href="#contact">Kontakt</a>
        </div>
      </div>
    );
}