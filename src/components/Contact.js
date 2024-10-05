import React from 'react';

function Contact({ contacts }) {
  return (
    <div className="contact-info">
      <h2>Kontaktai</h2>
      <p><strong>El. paštas:</strong> <a href={`mailto:${contacts.email}`}>{contacts.email}</a></p>
      <p><strong>Telefonas:</strong> {contacts.phone}</p>
      <ul>
        {contacts.social.map((social, index) => (
          <li key={index}>
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              <img src={`/path/to/icons/${social.icon}.png`} alt={`${social.name}`} /> {social.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
