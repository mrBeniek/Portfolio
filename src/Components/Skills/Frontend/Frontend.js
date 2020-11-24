import React from 'react';
import SkillsTile from '../SkillsTile';
import ES6img from '../../../Assets/es6.png';
import HTML5img from '../../../Assets/html5.png';
import CSS3img from '../../../Assets/css3.png';
import SCSSimg from '../../../Assets/scss.png';
import reactimg from '../../../Assets/react.png';
import reduximg from '../../../Assets/redux.png';
import bootstrapimg from '../../../Assets/bootstrap.png';

const Frontend = () => {
  return (
    <React.Fragment>
      <div className="skills-coding-row">
        <SkillsTile
          imgSrc={ES6img}
          imgAlt={"Logo ES6"}
          tileTitle={"JavaScript ES6+"}
        />
        <SkillsTile
          imgSrc={HTML5img}
          imgAlt={"Logo HTML5"}
          tileTitle={"HTML5"}
        />
        <SkillsTile
          imgSrc={CSS3img}
          imgAlt={"Logo CSS3"}
          tileTitle={"CSS3"}
        />
        <SkillsTile
          imgSrc={SCSSimg}
          imgAlt={"Logo SCSS"}
          tileTitle={"SCSS"}
        />
      </div>
      <div className="skills-coding-row">
        <SkillsTile
          imgSrc={reactimg}
          imgAlt={"Logo ReactJS"}
          tileTitle={"ReactJS"}
        />
        <SkillsTile
          imgSrc={reduximg}
          imgAlt={"Logo Redux"}
          tileTitle={"Redux"}
        />
        <SkillsTile
          imgSrc={bootstrapimg}
          imgAlt={"Logo antdesign"}
          tileTitle={"antdesign"}
        />
      </div>
    </React.Fragment>
  )
}

export default Frontend