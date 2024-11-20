import React from 'react';
import '../styles/Gebejimai.css';

function Gebejimai({ gebejimai }) {
  return (
    <div className="gebejimai">
      <h2>Gebėjimai</h2>
      <ul>
        {gebejimai.map((gebejimas, index) => (
          <li key={index}>
            <span className="gebejimas-ikona">{gebejimas.ikona}</span>
            {gebejimas.pavadinimas}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gebejimai;
