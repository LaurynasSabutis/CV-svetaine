import React from 'react';
import PersonInfo from './components/PersonInfo';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const person = {
    name: 'Jonas Jonaitis',
    photo: '/path/to/photo.jpg',
    about: [
      'Motyvuotas ir atsakingas specialistas.',
      'Turiu 5 metų patirtį programinės įrangos kūrimo srityje.',
      'Man patinka spręsti sudėtingas problemas.'
    ],
    contacts: {
      email: 'jonas@example.com',
      phone: '+370 600 00000',
      social: [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jonas', icon: 'linkedin-icon' },
        { name: 'GitHub', url: 'https://github.com/jonas', icon: 'github-icon' }
      ]
    },
    skills: [
      { name: 'JavaScript', icon: 'js-icon' },
      { name: 'React', icon: 'react-icon' },
      { name: 'Node.js', icon: 'nodejs-icon' }
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
      <PersonInfo name={person.name} photo={person.photo} about={person.about} />
      <Contact contacts={person.contacts} />
      <Skills skills={person.skills} />
      <Projects projects={person.projects} />
      <Footer />
    </div>
  );
}

export default App;
