import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Jonas Jonaitis. Visos teisės saugomos.</p>
    </footer>
  );
}

export default Footer;
