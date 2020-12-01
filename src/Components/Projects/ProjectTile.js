import React, {useState} from 'react';
import Modal from './Modal';

const ProjectTile = ({title, tileImg, vid, modalData}) => {

  const [projectStatus, setProjectStatus] = useState(null);
  const [visible, changeVisible] = useState(false);

  const showModal = () => {
    if (visible) {changeVisible(false)}
    else {changeVisible(true)}
  };

  const handleProjectOn = () => {
    setProjectStatus(true);
    console.log(projectStatus);
  };

  const handleProjectOff = () => {
    setProjectStatus(null);
  }

  const ADD_BLUR = projectStatus ? "project-video add-blur" : "project-video";
  const REMOVE_OPACITY = projectStatus && { opacity: 1 };

  return (
    <div 
      id="project-one"
      className="projects-tile"
    >
      <Modal
        visible={visible}
        showModal={showModal}
        vid={vid}
        modalData={modalData}
      />
      <img
        src={tileImg}
        alt={title}
        autoPlay muted loop
        onClick={showModal}
        onMouseEnter={handleProjectOn}
        onMouseLeave={handleProjectOff}
        className={ADD_BLUR}
      />
        
      <div className="projects-hidden-cont">
        <div 
          className="project-title" 
          style={REMOVE_OPACITY} 
          onMouseEnter={handleProjectOn} 
          onMouseLeave={handleProjectOff}
          onClick={showModal}
        >
          {title}
        </div>
      </div>
    </div>
  );
}

export default ProjectTile