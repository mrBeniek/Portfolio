import './Intro.scss';
import React from 'react';
import { Menu } from "./Menu";
import { Name } from "./Name";

export const Intro = () => {
  
    return (<div id="intro-main-cont">
      <div id="intro-cont">
        <Name />
        <Menu />
      </div>
    </div>);
  
}
