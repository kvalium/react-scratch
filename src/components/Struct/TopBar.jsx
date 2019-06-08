import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import pizzaYoloLogo from '../../assets/Pizza-Yolo.png';

/**
 * TopBar component
 *
 * * CONCEPTS
 * * --------
 * * Stateless component
 * * Picture import
 * * React Router Link & NavLink (with conditional style)
 */
export default function TopBar() {
  return (
    <nav className="is-primary navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-item">
          <img src={pizzaYoloLogo} alt="" />
        </NavLink>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Accueil</Link>
          <NavLink to="/pizzas" className="navbar-item" activeClassName="selected">Nos Pizzas</NavLink>
        </div>
      </div>
    </nav>
  );
}
