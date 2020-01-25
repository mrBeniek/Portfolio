import React from 'react';
import { Component } from 'react';
import { Menu } from "./Menu";
import { Navbar } from "./Navbar";
import { Name } from "./Name";
export class Intro extends Component {
  render() {
    return (<div id="intro-main-cont">
      <div id="intro-cont">
        <Name />
        <Menu />
      </div>
    </div>);
  }
}
