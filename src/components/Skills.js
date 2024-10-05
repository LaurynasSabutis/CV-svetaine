import React from 'react';
import '../styles/Skills.css';

function Skills({ skills }) {
  return (
    <div className="skills">
      <h2>Gebėjimai</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <span className="skill-icon">{skill.icon}</span>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
