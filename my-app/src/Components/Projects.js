import React from 'react';
import { Component } from 'react';
import { ProjectFour } from "./ProjectFour";
import { ProjectThree } from "./ProjectThree";
import { ProjectTwo } from "./ProjectTwo";
import { ProjectOne } from "./ProjectOne";

export class Projects extends Component {
  render() {
    return (<div id="projects-main-cont">
      <div className="label-cont">
        <div id="projects">PROJEKTY</div>
      </div>
      <div id="projects-cont">
        <div className="projects-row">
          <ProjectOne projectStatus={this.props.projectStatus} handleProject={this.props.handleProject} handleProjectOff={this.props.handleProjectOff} />
          <ProjectTwo projectStatus={this.props.projectStatus} handleProject={this.props.handleProject} handleProjectOff={this.props.handleProjectOff} />
        </div>
        <div className="projects-row">
          <ProjectThree projectStatus={this.props.projectStatus} handleProject={this.props.handleProject} handleProjectOff={this.props.handleProjectOff} />
          <ProjectFour projectStatus={this.props.projectStatus} handleProject={this.props.handleProject} handleProjectOff={this.props.handleProjectOff} />
        </div>

      </div>
    </div>);
  }
}
