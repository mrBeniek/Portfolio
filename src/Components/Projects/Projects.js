import './Projects.scss';
import React, {useState} from 'react';
import Dropdown from './Dropdown';
import ProjectTile from './ProjectTile';
import project1vid from '../../Assets/Random Quote Generator.mp4';
import project2vid from '../../Assets/Pomodoro.mp4';
import project3vid from '../../Assets/Calculator.mp4';
import project4vid from '../../Assets/Technical.mp4';

export const Projects = () => {

  const [dropState, setDropState] = useState('full');

    return (
      <div id="projects-main-cont">
        <div className="label-cont label-first-cont">
          <div id="projects">PROJEKTY</div>
        </div>

        <Dropdown 
          dropState={dropState}
          setDropState={setDropState}
          menuArray={['fullstack', 'frontend']}
        />
        <div id="projects-cont">
          <div className="projects-row">
            <ProjectTile
              title={"GENERATOR CYTATÓW"}
              vid={project1vid}
            />
            <ProjectTile 
              title={"ZEGAR POMODORO"}
              vid={project2vid}
            />
          </div>
          <div className="projects-row">
            <ProjectTile
              title={"KALKULATOR"}
              vid={project3vid}
            />
            <ProjectTile
              title={"DOKUMENTACJA TECHNICZNA"}
              vid={project4vid}
            />
          </div>
        </div>
      </div>
    ); 
}