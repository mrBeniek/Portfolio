import React from 'react';
import { Component } from 'react';
import project4vid from '../Assets/Technical.mp4';
export class ProjectFour extends Component {
  handleProjectOn = () => {
    this.props.handleProject("four");
    console.log(this.props.projectStatus);
  };
  render() {
    const ADD_BLUR = this.props.projectStatus === "four" ? "add-blur" : null;
    const REMOVE_OPACITY = this.props.projectStatus === "four" ? { opacity: 1 } : null;
    return (<div id="project-four" className="projects-tile">
      <video id="project-four-video" autoPlay muted loop onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff} className={ADD_BLUR}>
        <source src={project4vid} type="video/mp4" />
      </video>
      <div className="projects-hidden-cont">
        <div className="project-label" style={REMOVE_OPACITY} onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff}>DOKUMENTACJA TECHNICZNA</div>
        <div className="projects-li-cont" style={REMOVE_OPACITY} onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff}>
          <ul>
            <li>Wykonana wyłącznie z użyciem HTML5 i CSS3</li>
            <li>Animowane buttony w navbarze</li>
            <li>Tabelka zrobiona wykorzystując grida</li>
            <li>W pełni responsywna</li>
          </ul>

        </div>
        <div className="projects-button-cont">
          <a href="#" className="projects-button" style={REMOVE_OPACITY} onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff}>DEMO</a>
          <a href="#" className="projects-button" style={REMOVE_OPACITY} onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff}>KOD ŹRÓDŁOWY</a>
        </div>
      </div>
    </div>);
  }
}
