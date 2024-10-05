import React from 'react';
import '../styles/AsmenineInformacija.css';

function AsmenineInformacija({ vardas, nuotrauka, apie }) {
  return (
    <div className="asmenine-informacija">
      <img src={nuotrauka} alt={`${vardas}`} />
      <h1>{vardas}</h1>
      <ul>
        {apie.map((informacija, index) => (
          <li key={index}>{informacija}</li>
        ))}
      </ul>
    </div>
  );
}

export default AsmenineInformacija;
