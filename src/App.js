import React, { useState } from 'react';
import AsmenineInformacija from './components/AsmenineInformacija.js';
import Kontaktai from './components/Kontaktai.js';
import Gebejimai from './components/Gebejimai.js';
import Projektai from './components/Projektai.js';
import Footer from './components/Footer.js';
import './styles/App.css';
import './styles/button.css';
import { SiJavascript, SiReact, SiNodedotjs, SiMysql, SiMicrosoftexcel, SiMicrosoftword, SiWordpress } from 'react-icons/si';
import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

function App() {
  const [rodytiKontaktus, nustatytiRodytiKontaktus] = useState(false); // Būsena, ar rodyti Kontaktus
  const [rodytiGebejimus, nustatytiRodytiGebejimus] = useState(false); // Būsena, ar rodyti Gebėjimus

  const asmuo = {
    vardas: 'Laurynas Sabutis',
    nuotrauka: '/nuotrauka/photo.jpg',
    apie: [
      'Motyvuotas ir atsakingas specialistas.',
      'Turiu 2 metų patirtį programinės įrangos kūrimo srityje.',
      'Man patinka spręsti sudėtingas problemas.'
    ],
    kontaktai: {
      elpastas: 'laurynas.sabutis@stud.ktmc.lt',
      telefonas: '+370 600 00000',
      socialiniai: [
        { pavadinimas: 'LinkedIn', url: 'https://www.linkedin.com/in/jonas', ikona: <FaLinkedin /> },
        { pavadinimas: 'GitHub', url: 'https://github.com/LaurynasSabutis', ikona: <FaGithub /> },
        { pavadinimas: 'Discord', url: 'https://discord.com/jonas', ikona: <FaDiscord /> }
      ]
    },
    gebejimai: [
      { pavadinimas: 'JavaScript', ikona: <SiJavascript /> },
      { pavadinimas: 'React', ikona: <SiReact /> },
      { pavadinimas: 'Node.js', ikona: <SiNodedotjs /> },
      { pavadinimas: 'WordPress', ikona: <SiWordpress /> },
      { pavadinimas: 'MySQL', ikona: <SiMysql /> },
      { pavadinimas: 'Microsoft Excel', ikona: <SiMicrosoftexcel /> },
      { pavadinimas: 'Microsoft Word', ikona: <SiMicrosoftword /> }
    ],
    projektai: [
      {
        pavadinimas: 'E-parduotuvė',
        nuotraukos: ['/kelias/į/nuotrauka1.jpg', '/kelias/į/nuotrauka2.jpg'],
        aprasymas: 'Sukurtas pilnas e-parduotuvės sprendimas su React ir Node.js.',
        nuorodos: [
          { pavadinimas: 'Gyvai', url: 'https://eparduotuve.com' },
          { pavadinimas: 'GitHub', url: 'https://github.com/jonas/eparduotuve' }
        ]
      },
      {
        pavadinimas: 'Portfolio svetainė',
        nuotraukos: ['/kelias/į/nuotrauka3.jpg'],
        aprasymas: 'Asmeninės svetainės sukūrimas naudojant React.',
        nuorodos: [
          { pavadinimas: 'GitHub', url: 'https://github.com/jonas/portfolio' }
        ]
      }
    ]
  };

  // Determine background color for the list container
  const listBackgroundColor = rodytiKontaktus || rodytiGebejimus ? '#e7f3ff' : 'transparent'; // Adjust as needed

  return (
    <div>
      <div className="konteineris"> {/* Main container */}
        <AsmenineInformacija vardas={asmuo.vardas} nuotrauka={asmuo.nuotrauka} apie={asmuo.apie} />
        
        <div className="perjungimo-konteineris">
          <button onClick={() => nustatytiRodytiKontaktus(!rodytiKontaktus)}>
            {rodytiKontaktus ? 'Slėpti Kontaktus' : 'Rodyti Kontaktus'}
          </button>
          <button onClick={() => nustatytiRodytiGebejimus(!rodytiGebejimus)}>
            {rodytiGebejimus ? 'Slėpti Gebėjimus' : 'Rodyti Gebėjimus'}
          </button>
        </div>

      <div className='horizontalus-konteineris'>
        <div className="turinio-konteineris" style={{ backgroundColor: listBackgroundColor }}>
          <div className="list-content">
            {rodytiKontaktus && <Kontaktai kontaktai={asmuo.kontaktai} />}
            {rodytiGebejimus && <Gebejimai gebejimai={asmuo.gebejimai} />}
          </div>
        </div>
      </div>
        
        
        <Projektai projektai={asmuo.projektai} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
