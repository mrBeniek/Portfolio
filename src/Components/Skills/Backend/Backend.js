import React from 'react';
import SkillsTile from '../SkillsTile';
import nodeimg from '../../../Assets/node.png';
import expressimg from '../../../Assets/express.png';
import mongoimg from '../../../Assets/mongo.png';
import herokuimg from '../../../Assets/heroku.png';

const Backend = () => {
  return (
    <div className="skills-coding-row">
      <SkillsTile
        imgSrc={nodeimg}
        imgAlt={"Logo NodeJS"}
        tileTitle={"NodeJS"}
      />
      <SkillsTile
        imgSrc={expressimg}
        imgAlt={"Logo ExpressJS"}
        tileTitle={"ExpressJS"}
      />
      <SkillsTile
        imgSrc={mongoimg}
        imgAlt={"Logo MongoDB"}
        tileTitle={"Mongoose"}
      />
      <SkillsTile
        imgSrc={herokuimg}
        imgAlt={"Logo Heroku"}
        tileTitle={"Heroku"}
      />
    </div>
  )
}

export default Backend