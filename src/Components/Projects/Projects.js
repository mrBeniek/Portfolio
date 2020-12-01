import './Projects.scss';
import React, {useState} from 'react';
import Dropdown from '../Common/Dropdown';
import Fullstack from './Fullstack/Fullstack';
import Frontend from './Frontend/Frontend';

export const Projects = () => {

  const [dropState, setDropState] = useState('FULL STACK');

    return (
      <div id="projects-main-cont">
        <div className="label-cont label-first-cont">
          <div id="projects">PROJEKTY</div>
        </div>
        <Dropdown 
          dropState={dropState}
          setDropState={setDropState}
          menuArray={['FULL STACK', 'FRONT-END']}
        />
        {dropState === 'FULL STACK'
          ? <Fullstack />
          : <Frontend />
        }
      </div>
    ); 
}