import React from 'react';
import cvlogo from '../Assets/cvlogo.png';
import gmaillogo from '../Assets/gmaillogo.png';
import githublogo from '../Assets/githublogo.png'
import linkedinlogo from '../Assets/linkedinlogo.png'


export const Contact = () => {
  
    return (<div id="contact-main-cont">
      <div className="label-cont">
        <div id="contact">KONTAKT</div>
      </div>
      <div id="contact-cont">
        <a className="contact-panel" href='../Assets/CV - Tomasz Karpeta.pdf' download>
          <img className="contact-icon" src={cvlogo} alt="Logo CV" />
          <div>CV</div>
        </a>
        <a className="contact-panel" href="mailto:tomasz.karpeta@gmail.com" target="_top">
          <img className="contact-icon" src={gmaillogo} alt="Logo Gmaila" />
          <div>E-mail</div>
        </a>
        <a  className="contact-panel" href="https://github.com/mrBeniek?tab=repositories" target="_blank" rel="noopener noreferrer" >
          <img className="contact-icon" src={githublogo} alt="Logo GitHuba" />
          <div>GitHub</div>
        </a>
        <a className="contact-panel" href="https://linkedin.com/in/tomasz-karpeta-a03299171" target="_blank" rel="noopener noreferrer" >
          <img className="contact-icon" src={linkedinlogo} alt="Logo LinkedIn" />
          <div>LinkedIn</div>
        </a>
      </div>
    </div>);
  
}
