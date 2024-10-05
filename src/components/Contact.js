import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Import icons
import '../styles/Contact.css';

function Contact({ contacts }) {
  return (
    <div className="contacts">
      <p>
        <FaEnvelope /> {/* Email icon */}
        <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
      </p>
      <p>
        <FaPhone /> {/* Phone icon */}
        {contacts.phone}
      </p>
      <div>
        {contacts.social.map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
            {social.icon} {social.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;

