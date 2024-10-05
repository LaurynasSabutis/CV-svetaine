import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Importuoja ikonas
import '../styles/Kontaktai.css';

function Kontaktai({ kontaktai }) {
  return (
    <div className="kontaktai">
      <p>
        <FaEnvelope />
        <a href={`mailto:${kontaktai.elpastas}`}>{kontaktai.elpastas}</a>
      </p>
      <p>
        <FaPhone />
        {kontaktai.telefonas}
      </p>
      <div>
        {kontaktai.socialiniai.map((socialinis, index) => (
          <a key={index} href={socialinis.url} target="_blank" rel="noopener noreferrer">
            {socialinis.ikona} {socialinis.pavadinimas}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Kontaktai;
