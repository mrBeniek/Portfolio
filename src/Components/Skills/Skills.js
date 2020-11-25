import './Skills.scss';
import React, {useState} from 'react';
import Dropdown from '../Common/Dropdown';
import Frontend from './Frontend/Frontend';
import Backend from './Backend/Backend';
import Other from './Other/Other';

export const Skills = () => {

  const [dropState, setDropState] = useState('frontend');
  
    return (
      <div id="skills-main-cont">
        <div className="label-cont">
          <div id="skills">UMIEJĘTNOŚCI</div>
        </div>
        <Dropdown
          dropState={dropState}
          setDropState={setDropState}
          menuArray={['FRONT-END', 'BACK-END', 'INNE']}
        />
        <div id="skills-cont">
          <div id="skills-coding-cont">
            {dropState === 'FRONT-END'
              ? <Frontend />
              : dropState === 'BACK-END'
              ? <Backend />
              : <Other />
            }
            
          </div>
        </div>
      </div>
    );
}
