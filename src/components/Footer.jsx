import React from 'react';
import { Link } from 'react-router-dom';

/**
 * App Footer
 *
 * * CONCEPTS
 * * --------
 * * Stateless component
 * * React Router Link usage
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <Link to="/admin">Connexion</Link>
      </div>
    </footer>
  );
}
