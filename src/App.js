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
  const [rodytiKontaktus, nustatytiRodytiKontaktus] = useState(false);
  const [rodytiGebejimus, nustatytiRodytiGebejimus] = useState(false);

  const asmuo = {
    vardas: 'Laurynas Sabutis',
    nuotrauka: 'assets/veidasphoto.jpg',
    apie: [
      'Motyvuotas ir atsakingas specialistas.',
      'Turiu 2 metų patirtį programinės įrangos kūrimo srityje.',
      'Man patinka spręsti sudėtingas problemas.'
    ],
    kontaktai: {
      elpastas: 'laurynas.sabutis@stud.ktmc.lt',
      telefonas: '+370 600 00000',
      socialiniai: [
        { pavadinimas: 'LinkedIn', url: 'https://www.linkedin.com', ikona: <FaLinkedin /> },
        { pavadinimas: 'GitHub', url: 'https://github.com/LaurynasSabutis', ikona: <FaGithub /> },
        { pavadinimas: 'Discord', url: 'https://discord.com', ikona: <FaDiscord /> }
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
        pavadinimas: 'Įvairios užduotys',
        nuotrauka: '/assets/nuotrauka.png', 
        aprasymas: 'Įvairios užduotys darytos su html, css ir js.',
        nuorodos: [
          { pavadinimas: 'Atsiskaityti darbai', url: 'https://github.com/LaurynasSabutis/AtsiskaitomiejiDarbai' }
        ]
      },
    ]
  };

  const listBackgroundColor = rodytiKontaktus || rodytiGebejimus ? '#e7f3ff' : 'transparent';

  return (
    <div>
      <div className="konteineris">
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
          <div className="list-box">
            {rodytiKontaktus && <div className="kontaktai-list"><Kontaktai kontaktai={asmuo.kontaktai} /></div>}
            {rodytiGebejimus && <div className="gebejimai-list"><Gebejimai gebejimai={asmuo.gebejimai} /></div>}
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
