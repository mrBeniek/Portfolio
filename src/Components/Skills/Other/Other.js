import React from 'react';
import SkillsTile from '../SkillsTile';
import gitimg from '../../../Assets/git.png';
import jiraimg from '../../../Assets/jira.png';

const Other = () => {
  return (
    <div className="skills-coding-row">
      <SkillsTile
        imgSrc={gitimg}
        imgAlt={"Logo GITa"}
        tileTitle={"GIT"}
      />
      <SkillsTile
        imgSrc={jiraimg}
        imgAlt={"Logo Jiry"}
        tileTitle={"Jira"}
      />
    </div>
  )
}

export default Other