import React from 'react';
import '../assets/Projects.css'

const Projects = () => {
  return (
    <div className="projects">
      <h1>Past Projects</h1>
      <div className="project-list">
        <div className="project">
          <h2>Project Title</h2>
          <p>Project description goes here.</p>
        </div>
        {/* Repeat for more projects */}
      </div>
    </div>
  );
}

export default Projects;
