import React from 'react';
import logohome from '../assets/Logos/logohome.png';
import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <NavLink to='Home' className="navbar-brand" routerLink="">
          <img src={logohome} alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to='home' className="nav-link" aria-current="page" routerLink="" routerLinkActive="active">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='game' className="nav-link" routerLink="game" routerLinkActive="active">
                GAME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='eshop' className="nav-link" routerLink="eshop" routerLinkActive="active">
                ESHOP
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='compte' className="nav-link" routerLink="compte" routerLinkActive="active">
                MON COMPTE
              </NavLink>
            </li>
            <li className="nav-item">
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
