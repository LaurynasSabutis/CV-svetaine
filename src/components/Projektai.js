import React from 'react';
import '../styles/Projektai.css';

function Projektai({ projektai }) {
  return (
    <div className="projektai">
      <h2>Darbai</h2>
      {projektai.map((projektas, index) => (
        <div key={index} className="projektas">
          <h3>{projektas.pavadinimas}</h3>
          <div className="projektas-nuotrauka">
            <img src={projektas.nuotrauka} alt={`Projektas ${projektas.pavadinimas}`} />
          </div>
          <p>{projektas.aprasymas}</p>
          <div className="projektas-nuorodos">
            {projektas.nuorodos.map((nuoroda, idx) => (
              <a key={idx} href={nuoroda.url} target="_blank" rel="noopener noreferrer">{nuoroda.pavadinimas}</a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projektai;
