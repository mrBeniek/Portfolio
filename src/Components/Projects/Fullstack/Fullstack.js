import React from 'react';
import ProjectTile from '../ProjectTile';
import project1vid from '../../../Assets/Random Quote Generator.mp4';

const modalText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec aliquet lorem. Mauris ligula urna, auctor nec nunc nec, mollis sollicitudin elit. Ut id lobortis ipsum. Cras in risus aliquam, lacinia ex a, commodo lectus. Sed aliquet, diam et lacinia iaculis, risus elit efficitur nisi, porta molestie felis erat quis lorem. Maecenas rhoncus est diam, id lobortis est sagittis eu. Phasellus ornare dui lectus, eu dapibus felis aliquet ut. Praesent ut egestas sapien, in varius ipsum. "

const Fullstack = () => {
  return (
    <div id="projects-cont">
      <div className="projects-row">
        <ProjectTile
          title={"HAPPY HOUR HOTLINE"}
          vid={project1vid}
          modalText={modalText}
        />
      </div>
    </div>
  )
}

export default Fullstack