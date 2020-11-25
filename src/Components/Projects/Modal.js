import React from 'react';
import { Modal as AntdModal } from 'antd';

const Modal = ({visible, showModal, vid, modalText}) => {
  return (
    
    <React.Fragment>
      <AntdModal
        footer={null}
        visible={visible}
        onCancel={showModal}
        centered={true}
        width={1000}
        style={{color: "white"}}
      >
        <div className="modal-cont">
        
        <video
            autoPlay muted loop
            className="modal-video"
          >
            <source src={vid} type="video/mp4" />
          </video>
        
          
          <div>
            {modalText}
          </div>
        </div>
        <div className="projects-button-cont">
           <a 
            href="https://vigilant-jackson-000aba.netlify.com/"
            target="_blank" 
            rel="noopener noreferrer" 
            className="projects-button" 
          >
            DEMO
          </a>
          <a 
            href="https://github.com/mrBeniek/Random-Quote-Generator" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="projects-button"
          >
            KOD ŹRÓDŁOWY
          </a>
        </div>
      </AntdModal>
    </React.Fragment>
    
  )
}

export default Modal