import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <NavLink to="/admin">Connexion</NavLink>
      </div>
    </footer>
  );
}
