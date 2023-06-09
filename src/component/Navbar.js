import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

const Navbar = () => (
  <div>
    <header className="header">
      <nav className="nav-bar">
        <div className="pair">
          <img src={planet} alt="planet" id="icon_logo" />
          <h2 id="nav_header">Space travelers&apos; Hub</h2>
        </div>
        <ul>
          <li>
            <NavLink to="/">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/Missions"> Missions </NavLink>
          </li>
          <li>
            <NavLink to="/MyProfile"> | My Profile</NavLink>
          </li>
        </ul>
      </nav>
      <hr className="line" />
    </header>
  </div>
);

export default Navbar;
