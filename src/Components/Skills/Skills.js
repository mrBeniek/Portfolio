import React from 'react';
import ES6img from '../../Assets/es6.png';
import HTML5img from '../../Assets/html5.png';
import CSS3img from '../../Assets/css3.png';
import SCSSimg from '../../Assets/scss.png';
import reactimg from '../../Assets/react.png';
import reduximg from '../../Assets/redux.png';
import bootstrapimg from '../../Assets/bootstrap.png';
import gitimg from '../../Assets/git.png';

export const Skills = () => {
  
    return (<div id="skills-main-cont">
      <div className="label-cont">
        <div id="skills">UMIEJĘTNOŚCI</div>
      </div>
      <div id="skills-cont">
        <div id="skills-coding-cont">
          <div className="skills-coding-row">
            <div className="skills-coding-panel">
              <div className="coding-icon-cont">
              <img className="coding-icon" src={ES6img} alt="Logo ES6" />
              </div>
              
              <div className="coding-label">JavaScript ES6+ </div>
            </div>
            <div className="skills-coding-panel">
            <div className="coding-icon-cont">
            <img className="coding-icon" src={HTML5img} alt="Logo HTML5" />
            </div>
              
              <div className="coding-label">HTML5 </div>
            </div>
            <div className="skills-coding-panel">
            <div className="coding-icon-cont">
            <img className="coding-icon" src={CSS3img} alt="Logo CSS3" />
            </div>
              
              <div className="coding-label">CSS3 </div>
            </div>
            <div className="skills-coding-panel">
            <div className="coding-icon-cont">
            <img className="coding-icon" src={SCSSimg} alt="Logo SCSS" />
            </div>
              
              <div className="coding-label">SCSS</div>
            </div>
          </div>
          <div className="skills-coding-row">
            <div className="skills-coding-panel">
            <div className="coding-icon-cont">
            <img className="coding-icon" src={reactimg} alt="Logo Reacta" />
            </div>
              
              <div className="coding-label">React </div>
            </div>
            <div className="skills-coding-panel">
            <div className="coding-icon-cont">
            <img className="coding-icon" src={reduximg} alt="Logo Reduxa" />
            </div>
              
              <div className="coding-label">Redux </div>
            </div>
            <div className="skills-coding-panel">
            <div className="coding-icon-cont">
            <img className="coding-icon" src={bootstrapimg} alt="Logo Bootstrapa" />
            </div>
              
              <div className="coding-label">Bootstrap </div>
            </div>
            <div className="skills-coding-panel">
            <div className="coding-icon-cont">
            <img className="coding-icon" src={gitimg} alt="Logo GITa" />
            </div>
              
              <div className="coding-label">GIT </div>
            </div>
          </div>
        </div>

      </div>
    </div>);
  
}
