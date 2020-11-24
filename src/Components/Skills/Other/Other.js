import React from 'react';
import SkillsTile from '../SkillsTile';
import gitimg from '../../Assets/git.png';

const Other = () => {
  return (
    <div className="skills-coding-row">
      <SkillsTile
        imgSrc={gitimg}
        imgAlt={"Logo GITa"}
        tileTitle={"GIT"}
      />
    </div>
  )
}

export default Other


