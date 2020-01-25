import React from 'react';
import { Component } from 'react';
export class Menu extends Component {
  render() {
    return (<div id="menu-cont">
      <a className="button-std" href="#projects">Projekty</a>
      <a className="button-std" href="#skills">Umiejętności</a>
      <a className="button-std" href="#contact">Kontakt</a>
    </div>);
  }
}
