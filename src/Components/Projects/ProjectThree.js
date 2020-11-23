import React from 'react';
import { Component } from 'react';
import project3vid from '../../Assets/Calculator.mp4';

export class ProjectThree extends Component {
  handleProjectOn = () => {
    this.props.handleProject("three");
    console.log(this.props.projectStatus);
  };
  render() {
    const ADD_BLUR = this.props.projectStatus === "three" ? "add-blur" : null;
    const REMOVE_OPACITY = this.props.projectStatus === "three" ? { opacity: 1 } : null;
    return (<div id="project-three" className="projects-tile">
         <video id="project-three-video" autoPlay muted loop onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff} className={ADD_BLUR}>
        <source src={project3vid} type="video/mp4" />
      </video>
      <div className="projects-hidden-cont">
        <div className="project-label" style={REMOVE_OPACITY} onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff}>KALKULATOR</div>
        <div className="projects-li-cont" style={REMOVE_OPACITY} onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff}>
          <ul>
            <li>Zachowana kolejność wykonywania działań</li>
            <li>Możliwość działań na liczbach ujemnych</li>
            <li>Bez użycia funkcji eval()</li>
            <li>Prawidłowe obliczenia na cyfrach dziesiętnych</li>
          </ul>

        </div>
        <div className="projects-button-cont">
          <a href="https://determined-saha-924fbd.netlify.com/" target="_blank" rel="noopener noreferrer" className="projects-button" style={REMOVE_OPACITY} onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff}>DEMO</a>
          <a href="https://github.com/mrBeniek/Calculator" target="_blank" rel="noopener noreferrer" className="projects-button" style={REMOVE_OPACITY} onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff}>KOD ŹRÓDŁOWY</a>
        </div>
      </div>
    </div>);
  }
}
