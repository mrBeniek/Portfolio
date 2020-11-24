import React from 'react';
import './_app.scss';
import { Navbar } from './Components/Navbar/Navbar';
import { Intro } from './Components/Intro/Intro';
import { Projects } from './Components/Projects/Projects';
import { Skills } from './Components/Skills/Skills';
import { Contact } from './Components/Contact/Contact';


  class App extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     projectStatus: null,
    //   }
    // }

    componentDidMount() {
      window.addEventListener("scroll", () => {
        const NAVBAR_HIDDEN = document.getElementById("navbar-cont")
        if(window.scrollY > 600) {
          NAVBAR_HIDDEN.style.top = "0";
        } else {
          NAVBAR_HIDDEN.style.top = "-150px"
        }
        
      })
  
    }

    componentWillUnmount() {
      window.removeEventListener("scroll");
    }

    // handleProject = (status) => {
    //   this.setState ({
    //     projectStatus: status
    //   })
    // }

    // handleProjectOff = () => {
    //   this.setState ({
    //     projectStatus: null
    //   })
    // }
    
    render() {
      return (<div>
          <Navbar />
          <Intro />
          <Projects 
          //  projectStatus={this.state.projectStatus}
          //  handleProject={this.handleProject}
          //  handleProjectOff={this.handleProjectOff}
           />
          <Skills />
          <Contact />
        </div>);
    }
  
  }

  export default App;


