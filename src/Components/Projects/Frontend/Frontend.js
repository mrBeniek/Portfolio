import React from 'react';
import ProjectTile from '../ProjectTile';
import project1vid from '../../../Assets/Random Quote Generator.mp4';
import project2vid from '../../../Assets/Pomodoro.mp4';
import project3vid from '../../../Assets/Calculator.mp4';
import project4vid from '../../../Assets/Technical.mp4';

const Frontend = () => {
  return (
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
  )
}

export default Frontend
