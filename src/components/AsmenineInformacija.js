import React from 'react';
import '../styles/AsmenineInformacija.css';

function AsmenineInformacija({ vardas, nuotrauka, apie }) {
  return (
    <div className="informacija">
      <img src={nuotrauka} alt={vardas} className="profilio-nuotrauka" />
      <h1>{vardas}</h1>
      <ul>
        {apie.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AsmenineInformacija;
