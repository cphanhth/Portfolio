import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project">
        <h2>Budget Tracker</h2>
        <p>
          A React-based web application that allows users to track and manage their expenses efficiently
        </p>
        <a href="https://github.com/sophie-mcm/Final-Project-Catalyst">https://github.com/sophie-mcm/Final-Project-Catalyst</a>
      </div>
      <div className="project">
        <h2>Portfolio Website</h2>
        <p>
          Designed and developed my own portfolio website to showcase my work and achievements
        </p>
        <a href="https://github.com/cphanhth/Portfolio">https://github.com/cphanhth/Portfolio</a>
      </div>
    </div>
  );
};

export default Projects;