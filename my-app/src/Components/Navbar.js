import React from 'react';
import { Component } from 'react';
export class Navbar extends Component {
  render() {
    return (<div id="navbar-cont">
      
      <div id="navbar-menu-cont">
        <a className="navbar-button" href="#projects">Projekty</a>
        <a className="navbar-button" href="#skills">Umiejętności</a>
        <a className="navbar-button" href="#contact">Kontakt</a>
      </div>
    </div>);
  }
}
