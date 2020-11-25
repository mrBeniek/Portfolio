import React from 'react';
import ProjectTile from '../ProjectTile';
import modalData1 from '../../../Constants/QuoteGeneratorData';
import modalData2 from '../../../Constants/PomodoroClockData';
import modalData3 from '../../../Constants/CalculatorData';
import modalData4 from '../../../Constants/TechnicalData';
import project1vid from '../../../Assets/Random Quote Generator.mp4';
import project2vid from '../../../Assets/Pomodoro.mp4';
import project3vid from '../../../Assets/Calculator.mp4';
import project4vid from '../../../Assets/Technical.mp4';


const Frontend = () => {
  return (
    <div id="projects-cont">
      <div className="projects-row">
        <ProjectTile
          title={"GENERATOR CYTATÓW"}
          vid={project1vid}
          modalData={modalData1}
        />
        <ProjectTile 
          title={"ZEGAR POMODORO"}
          vid={project2vid}
          modalData={modalData2}
        />
      </div>
      <div className="projects-row">
        <ProjectTile
          title={"KALKULATOR"}
          vid={project3vid}
          modalData={modalData3}
        />
        <ProjectTile
          title={"DOKUMENTACJA TECHNICZNA"}
          vid={project4vid}
          modalData={modalData4}
        />
      </div>
    </div>
  )
}

export default Frontend
