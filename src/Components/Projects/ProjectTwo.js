import React from 'react';
import { Component } from 'react';
import project2vid from '../../Assets/Pomodoro.mp4';

export class ProjectTwo extends Component {
  handleProjectOn = () => {
    this.props.handleProject("two");
    console.log(this.props.projectStatus);
  };
  render() {
    const ADD_BLUR = this.props.projectStatus === "two" ? "add-blur" : null;
    const REMOVE_OPACITY = this.props.projectStatus === "two" ? { opacity: 1 } : null;
    return (<div id="project-two" className="projects-tile">
      <video id="project-two-video" autoPlay loop muted onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff} className={ADD_BLUR}>
        <source src={project2vid} type="video/mp4" />
      </video>
      <div className="projects-hidden-cont">
        <div className="project-label" style={REMOVE_OPACITY} onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff}>ZEGAR POMODORO</div>
        <div className="projects-li-cont" style={REMOVE_OPACITY} onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff}>
          <ul>
            <li>Zegar organizujący pracę</li>
            <li>Manualne ustalanie czasu pracy i przerwy</li>
            <li>Specjalny dźwięk informujący o przerwie</li>
            <li>Możliwość pauzy</li>
          </ul>

        </div>
        <div className="projects-button-cont">
          <a href="https://mystifying-khorana-f31461.netlify.com" target="_blank" rel="noopener noreferrer" className="projects-button"  style={REMOVE_OPACITY} onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff}>DEMO</a>
          <a href="https://github.com/mrBeniek/Pomodoro-Clock" target="_blank" rel="noopener noreferrer" className="projects-button"  style={REMOVE_OPACITY} onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff}>KOD ŹRÓDŁOWY</a>
        </div>
      </div>
    </div>);
  }
}
