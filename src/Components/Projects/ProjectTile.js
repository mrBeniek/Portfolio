import React, {useState} from 'react';

const ProjectTile = ({title, vid}) => {

  const [projectStatus, setProjectStatus] = useState(null);

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
    <div id="project-one" className="projects-tile">
      <video
        autoPlay muted loop
        onMouseEnter={handleProjectOn}
        onMouseLeave={handleProjectOff}
        className={ADD_BLUR}
      >
        <source src={vid} type="video/mp4" />
      </video>
      <div className="projects-hidden-cont">
        <div 
          className="project-title" 
          style={REMOVE_OPACITY} 
          onMouseEnter={handleProjectOn} 
          onMouseLeave={handleProjectOff}
        >
          {title}
        </div>
      </div>
    </div>
  );
}

export default ProjectTile