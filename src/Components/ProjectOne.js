import React from 'react';
import { Component } from 'react';
import project1vid from '../Assets/Random Quote Generator.mp4';

export class ProjectOne extends Component {
  handleProjectOn = () => {
    this.props.handleProject("one");
    console.log(this.props.projectStatus);
  };
  render() {
    const ADD_BLUR = this.props.projectStatus === "one" ? "add-blur" : null;
    const REMOVE_OPACITY = this.props.projectStatus === "one" ? { opacity: 1 } : null;
    return (<div id="project-one" className="projects-tile">
      <video id="project-one-video" autoPlay muted loop onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff} className={ADD_BLUR}>
        <source src={project1vid} type="video/mp4" />
      </video>
      <div className="projects-hidden-cont">

        <div className="project-label" style={REMOVE_OPACITY} onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff}>GENERATOR CYTATÓW</div>
        <div className="projects-li-cont" style={REMOVE_OPACITY} onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff}>
          <ul>
            <li>Losowy kolor co każdy cytat</li>
            <li>Specjalny algorytm dający efekt "losowania" cytatu</li>
            <li>Fetchowana zewnętrzna baza danych</li>
            <li>Możliwość tweetowania cytatów</li>
          </ul>

        </div>
        <div className="projects-button-cont">
          <a href="https://vigilant-jackson-000aba.netlify.com/" target="_blank" rel="noopener noreferrer" className="projects-button" style={REMOVE_OPACITY} onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff}>DEMO</a>
          <a href="https://github.com/mrBeniek/Random-Quote-Generator" target="_blank" rel="noopener noreferrer" className="projects-button" style={REMOVE_OPACITY} onMouseEnter={this.handleProjectOn} onMouseLeave={this.props.handleProjectOff}>KOD ŹRÓDŁOWY</a>
        </div>
      </div>

    </div>);
  }
}
