import React from 'react';
import '../styles/PersonInfo.css';

function PersonInfo({ name, photo, about }) {
  return (
    <div className="person-info">
      <img src={photo} alt={`${name}`} />
      <h1>{name}</h1>
      <ul>
        {about.map((info, index) => (
          <li key={index}>{info}</li>
        ))}
      </ul>
    </div>
  );
}

export default PersonInfo;
