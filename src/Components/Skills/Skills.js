import './Skills.scss';
import React from 'react';
import Frontend from './Frontend/Frontend';

export const Skills = () => {
  
    return (
      <div id="skills-main-cont">
        <div className="label-cont">
          <div id="skills">UMIEJĘTNOŚCI</div>
        </div>
        <div id="skills-cont">
          <div id="skills-coding-cont">
            <Frontend />
          </div>
        </div>
      </div>
    );
}
