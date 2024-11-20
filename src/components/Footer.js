import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Laurynas Sabutis. Visos teisės saugomos.</p>
    </footer>
  );
}

export default Footer;
