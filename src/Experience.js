import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience">
      <h1>Experience</h1>
      <div className="job">
        <h2>First-Year Liaison</h2>
        <p>ColorStack Yale, Fall 2024 - Present</p>
        <ul>
          <li>Promote events connecting underrepresented students with tech industry resources</li>
          <li>Organize workshops and networking sessions to foster diversity in computer science</li>
          <li>Increase program engagement and attendance through effective communication and outreach</li>
        </ul>
      </div>
      <div className="job">
        <h2>Catalyst Program Mentee</h2>
        <p>Yale Computer Society, Fall 2024</p>
        <ul>
          <li>Participated in a flipped-classroom program to learn web development through projects and problem sets</li>
          <li>Co-designed and built a budget tracker website using React.js, allowing users to track expenses and visualize spending habits</li>
          <li>Delivered a functional final product showcased to program mentors, demonstrating teamwork and technical skills</li>
        </ul>
      </div>
      <div className="job">
        <h2>Glass Research Intern</h2>
        <p>Kennesaw State University Department of Physics, Fall 2023</p>
        <ul>
          <li>Analyzed the nucleation of lithium disilicate during crystallization via differential thermal analysis</li>
          <li>Conducted physics research 12 hours/week at the Kennesaw State University Glass Laboratory</li>
          <li>Conceived ways to more accurately analyze the nucleation of glasses, presented these findings for my peers at Wheeler Magnet and during Yale Engineering and Science Weekend</li>
        </ul>
      </div>
      <div className="job">
        <h2>Quantum Computation and Science Writing Scholar</h2>
        <p>MIT Introduction to Technology, Engineering, and Science Semester, Summer 2023 - Fall 2023</p>
        <ul>
          <li>1 of 230 selected from an applicant pool of over 2700</li>
          <li>Took a science writing course and a quantum computation that was tested on Caltech undergraduate students</li>
          <li>Presented project on superdense coding algorithm at virtual symposium, wrote article about superconducting qubits and quantum materials, for which I interviewed researchers at MIT and Yale</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
