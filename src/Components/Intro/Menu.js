import './Menu.scss';
import React from 'react';

export const Menu = () => {
    return (
      <div id="menu-cont">
        <a className="button-std" href="#projects">Projekty</a>
        <a className="button-std" href="#skills">Umiejętności</a>
        <a className="button-std" href="#contact">Kontakt</a>
      </div>
    );
}