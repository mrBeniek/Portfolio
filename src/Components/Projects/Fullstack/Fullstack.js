import React from 'react';
import ProjectTile from '../ProjectTile';
import project1img from '../../../Assets/Happy Hour thumb.png'
import project1vid from '../../../Assets/Happy Hour.mp4';
import modalData from '../../../Constants/HappyHourData'

const Fullstack = () => {
  return (
    <div id="projects-cont">
      <div className="projects-row">
        <ProjectTile
          title={"HAPPY HOUR HOTLINE"}
          tileImg={project1img}
          vid={project1vid}
          modalData={modalData}
        />
      </div>
    </div>
  )
}

export default Fullstack