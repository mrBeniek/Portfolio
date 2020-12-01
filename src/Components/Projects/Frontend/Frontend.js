import React from 'react';
import ProjectTile from '../ProjectTile';
import modalData1 from '../../../Constants/PomodoroClockData';
import modalData2 from '../../../Constants/QuoteGeneratorData';
import modalData3 from '../../../Constants/CalculatorData';
import modalData4 from '../../../Constants/TechnicalData';
import project1img from '../../../Assets/Pomodoro thumb.png';
import project2img from '../../../Assets/Quote Generator thumb.png';
import project3img from '../../../Assets/Calculator thumb.png';
import project4img from '../../../Assets/Technical thumb.png';
import project1vid from '../../../Assets/Pomodoro.mp4';
import project2vid from '../../../Assets/Random Quote Generator.mp4';
import project3vid from '../../../Assets/Calculator.mp4';
import project4vid from '../../../Assets/Technical.mp4';

const Frontend = () => {
  return (
    <div id="projects-cont">
      <div className="projects-row">
        <ProjectTile
          title={"ZEGAR POMODORO"}
          tileImg={project1img}
          vid={project1vid}
          modalData={modalData1}
        />
        <ProjectTile 
          title={"GENERATOR CYTATÓW"}
          tileImg={project2img}
          vid={project2vid}
          modalData={modalData2}
        />
      </div>
      <div className="projects-row">
        <ProjectTile
          title={"KALKULATOR"}
          tileImg={project3img}
          vid={project3vid}
          modalData={modalData3}
        />
        <ProjectTile
          title={"DOKUMENTACJA TECHNICZNA"}
          tileImg={project4img}
          vid={project4vid}
          modalData={modalData4}
        />
      </div>
    </div>
  )
}

export default Frontend
