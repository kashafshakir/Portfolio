import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareJs, faNode } from '@fortawesome/free-brands-svg-icons';
import './Skills.css'; 

const Skills = () => {
  useEffect(() => {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  return (
    <div className="skills-section">
      {/* Subtle background texture */}
      <div className="skills-bg-texture"></div>

      <div className="container skills-container-wrapper">
        {/* About Me Header */}
        <div className="skills-header">
          <h1 className="abt-heading">
            <span className="hand-wave">👋</span>
            Hello everyone, Kashaf here.
          </h1>

          <p className="abtme-paragraph">
            I'm not just a developer — I'm a builder of ideas, a lover of clean code, and a firm believer that good design is just as important as good logic. 
            I thrive on crafting digital experiences that feel as smooth as they look. 
            From turning static mockups into interactive realities to solving tough bugs with quiet confidence, 
            I'm always in pursuit of that perfect blend of creativity and code. Welcome to my world — let's create something awesome.
          </p>
        </div>

        {/* Skills Section */}
        <div className="section-header">
          <div className="section-divider"></div>
          
          <h2 className="section-title">
            <span className="section-title-decoration left"></span>
            My Palette of Programming Languages
            <span className="section-title-decoration right"></span>
          </h2>
          
          <div className="section-divider"></div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {[
            { name: 'C', icon: '/Images/c-programming-icon-free-png (1).webp' },
            { name: 'C++', icon: '/Images/cpp_icon.jpg' },
            { name: 'HTML5', icon: '/Images/Other-html-5-icon.png' },
            { name: 'CSS', icon: '/Images/css-3-icon.png' },
            { name: 'JavaScript', icon: faSquareJs, color: '#F7DF1E' },
            { name: 'React', icon: '/Images/react_icon.png' },
            { name: 'Node.js', icon: faNode, color: '#68A063' },
            { name: 'Oracle', icon: '/Images/Oracle-Symbol.png' },
            { name: 'MongoDB', icon: '/Images/mongodb.svg' },
            { name: 'MySQL', icon: '/Images/database-mysql.avif' }
          ].map((skill, index) => (
            <div 
              key={index} 
              className="skill-item"
              style={skill.color ? { '--icon-color': skill.color } : {}}
            >
              {typeof skill.icon === 'string' ? (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skill-icon"
                />
              ) : (
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="skill-icon"
                />
              )}
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
