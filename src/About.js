import React from 'react';
import './About.css';
import picture from './images/picture.jpg';
import linkedin from './images/linkedin.webp';
import html from './images/html.png';
import css from './images/css.png';
import javascript from './images/java-script.png';
import react from './images/react.png';
import node from './images/node-js.png';
import c from './images/c++.png';
import java from './images/java.png';
import python from './images/python.png';



const About = () => {
  return (
    <div className="about">
      <div className="top">
        <ul>
          <li>
            <img src={picture} width="450px" alt="Me in France"></img>
          </li>
          <li>
            <div>
              <h1>About Me</h1>
              <a href="https://linkedin.com/in/christianphanhthourath">
                <img src={linkedin} width="40px" height="40px" alt="Linkedin logo"></img>
              </a>
            </div>
            <p>
            Hello! I am a freshman at Yale University intending to major in computer science. Coming from a half-Puerto Rican, half-Laotian background, I seek to be a role model for students from underrepresented minorities. By pursuing an education and career in STEM, I want to show how it's possible to succeed academically and to change the world regardless of where you come from.
            <br></br><br></br>
            I've also played the cello for ten years, and aside from playing music, I'm passionate about making music education more accessible to underserved populations. I understand what it's like to not be able to afford cello lessons, so I have taught hours and hours of free lessons and have worked to expand the music nonprofit offering these lessons.
            <br></br><br></br>
            When I'm not pursuing these goals, I enjoy creating content, trying things outside of my comfort zone, and forming meaningful connections with others.
            </p>
          </li>
        </ul>    
        </div>
      <br></br>
      <div className="education">
        <h1>Education</h1>
        <ul>
          <li>
            <h2>Yale University</h2>
            <p>Bachelor's in Computer Science, 2028</p>
            <p>GPA: 3.93/4.0</p>
          </li>
          <li>
            <h2>Wheeler High School</h2>
            <p>High School Diploma, 2024</p>
            <p>GPA: 4.697/4.0</p>
          </li>
        </ul>
      </div>
      <div className="skills">
        <h1>Skills</h1>  
        <ul>
          <li>
            <img src={html} width="30px" height="30px" alt="HTML logo"></img>
            <h3>HTML</h3>
          </li>
          <li>
            <img src={css} width="30px" height="30px" alt="CSS logo"></img>
            <h3>CSS</h3>
          </li>
          <li>
            <img src={javascript} width="30px" height="30px" alt="Javascript logo"></img>
            <h3>JavaScript</h3>
          </li>
          <li>
            <img src={react} width="30px" height="30px" alt="React logo"></img>
            <h3>React</h3>
          </li>
        </ul>
        <ul>
          <li>
          <img src={node} width="30px" height="30px" alt="Node.js logo"></img>
            <h3>Node.js</h3>
          </li>
          <li>
            <img src={c} width="30px" height="30px" alt="C++ logo"></img>
            <h3>C/C++</h3>
          </li>
          <li>
            <img src={java} width="30px" height="30px" alt="Java logo"></img>
            <h3>Java</h3>
          </li>
          <li>
            <img src={python} width="30px" height="30px" alt="Python logo"></img>
            <h3>Python</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;