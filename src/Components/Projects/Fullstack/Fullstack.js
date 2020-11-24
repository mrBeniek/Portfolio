import React from 'react';
import ProjectTile from '../ProjectTile';
import project1vid from '../../../Assets/Random Quote Generator.mp4';

const Fullstack = () => {
  return (
    <div id="projects-cont">
      <div className="projects-row">
        <ProjectTile
          title={"HAPPY HOUR HOTLINE"}
          vid={project1vid}
        />
      </div>
    </div>
  )
}

export default Fullstack