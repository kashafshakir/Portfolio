import React from 'react';
import './Project.css';
import {Link} from "react-router-dom"
const Projects = () => {
  return (
    <div className="projects-container" style={{}}>
      {/* Modern phone frame */}
      <div className="modern-phone">
        {/* Phone screen content */}
        <div className="phone-screen">
          <div className="screen-content">
            <h1 className="project-heading">
              Explore My <span>Creative</span> Projects
            </h1>
            <p className="project-subheading">
              Discover innovative solutions and beautiful designs
            </p>
           <a href="#projectdisplay" className="view-projects-btn">View Projects</a>

          </div>
        </div>    
        {/* Phone details */}
        <div className="phone-notch"></div>
        <div className="phone-speaker"></div>
        <div className="phone-power-btn"></div>
        <div className="phone-volume-btns"></div>
      </div>
    </div>
  );
};

export default Projects;