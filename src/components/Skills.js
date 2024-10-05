import React from 'react';

function Skills({ skills }) {
  return (
    <div className="skills">
      <h2>Gebėjimai</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <img src={`/path/to/icons/${skill.icon}.png`} alt={`${skill.name}`} /> {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
