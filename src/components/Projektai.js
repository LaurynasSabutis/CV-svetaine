import React from 'react';
import '../styles/Projektai.css';

function Projektai({ projektai }) {
  return (
    <div className="projektai">
      <h2>Darbai</h2>
      {projektai.map((projektas, index) => (
        <div key={index} className="projektas">
          <h3>{projektas.pavadinimas}</h3>
          <div className="projektas-nuotraukos">
            {projektas.nuotraukos.map((nuotrauka, idx) => (
              <img key={idx} src={nuotrauka} alt={`Projektas ${projektas.pavadinimas}`} />
            ))}
          </div>
          <p>{projektas.aprasymas}</p>
          <ul>
            {projektas.nuorodos.map((nuoroda, idx) => (
              <li key={idx}>
                <a href={nuoroda.url} target="_blank" rel="noopener noreferrer">{nuoroda.pavadinimas}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Projektai;
