import React from 'react';

const SkillsTile = ({imgSrc, imgAlt, tileTitle}) => {
  return (
    <div className="skills-coding-panel">
      <div className="coding-icon-cont">
        <img
          className="coding-icon"
          src={imgSrc} 
          alt={imgAlt}
        />
      </div>   
      <div className="coding-label">
        {tileTitle}
      </div>
    </div>
  )
}

export default SkillsTile