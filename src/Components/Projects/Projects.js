import './Projects.scss';
import React from 'react';
import { ProjectFour } from "./ProjectFour";
import { ProjectThree } from "./ProjectThree";
import { ProjectTwo } from "./ProjectTwo";
import { ProjectOne } from "./ProjectOne";

export const Projects = (props) => {
    return (
      <div id="projects-main-cont">
        <div className="label-cont label-first-cont">
          <div id="projects">PROJEKTY</div>
        </div>
        <div id="projects-cont">
          <div className="projects-row">
            <ProjectOne projectStatus={props.projectStatus} handleProject={props.handleProject} handleProjectOff={props.handleProjectOff} />
            <ProjectTwo projectStatus={props.projectStatus} handleProject={props.handleProject} handleProjectOff={props.handleProjectOff} />
          </div>
          <div className="projects-row">
            <ProjectThree projectStatus={props.projectStatus} handleProject={props.handleProject} handleProjectOff={props.handleProjectOff} />
            <ProjectFour projectStatus={props.projectStatus} handleProject={props.handleProject} handleProjectOff={props.handleProjectOff} />
          </div>
        </div>
      </div>
    ); 
}