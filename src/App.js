import React, { useState } from 'react';
import PersonInfo from './components/PersonInfo';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles/App.css';
import { SiJavascript, SiReact, SiNodedotjs, SiMysql, SiMicrosoftexcel, SiMicrosoftword, SiWordpress } from 'react-icons/si';
import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

function App() {
  const [showContact, setShowContact] = useState(false); // State for Contact visibility
  const [showSkills, setShowSkills] = useState(false); // State for Skills visibility

  const person = {
    name: 'Laurynas Sabutis',
    photo: '/photo/photo.jpg',
    about: [
      'Motyvuotas ir atsakingas specialistas.',
      'Turiu 5 metų patirtį programinės įrangos kūrimo srityje.',
      'Man patinka spręsti sudėtingas problemas.'
    ],
    contacts: {
      email: 'laurynas.sabutis@stud.ktmc.lt',
      phone: '+370 600 00000',
      social: [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jonas', icon: <FaLinkedin /> },
        { name: 'GitHub', url: 'https://github.com/LaurynasSabutis', icon: <FaGithub /> },
        { name: 'Discord', url: 'https://discord.com/jonas', icon: <FaDiscord /> }
      ]
    },
    skills: [
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'WordPress', icon: <SiWordpress /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Microsoft Excel', icon: <SiMicrosoftexcel /> },
      { name: 'Microsoft Word', icon: <SiMicrosoftword /> }
    ],
    projects: [
      {
        name: 'E-parduotuvė',
        images: ['/path/to/image1.jpg', '/path/to/image2.jpg'],
        description: 'Sukurtas pilnas e-parduotuvės sprendimas su React ir Node.js.',
        links: [
          { name: 'Live', url: 'https://eparduotuve.com' },
          { name: 'GitHub', url: 'https://github.com/jonas/eparduotuve' }
        ]
      },
      {
        name: 'Portfolio svetainė',
        images: ['/path/to/image3.jpg'],
        description: 'Asmeninės svetainės sukūrimas naudojant React.',
        links: [
          { name: 'GitHub', url: 'https://github.com/jonas/portfolio' }
        ]
      }
    ]
  };

  return (
    <div>
      <div className="container">
        <PersonInfo name={person.name} photo={person.photo} about={person.about} />
        
        <div className="toggle-container"> {/* Container for buttons */}
          <button onClick={() => setShowContact(!showContact)}>
            {showContact ? 'Hide Contact' : 'Show Contact'}
          </button>
          <button onClick={() => setShowSkills(!showSkills)}>
            {showSkills ? 'Hide Skills' : 'Show Skills'}
          </button>
        </div>

        <div className="content-container"> {/* Wraps the Contact and Skills sections */}
          {showContact && <Contact contacts={person.contacts} />}
          {showSkills && <Skills skills={person.skills} />}
        </div>
        
        <Projects projects={person.projects} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
