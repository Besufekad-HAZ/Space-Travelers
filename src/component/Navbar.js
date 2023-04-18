import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div>
    <header className="header">
      <nav className="nav-bar">
        <div className="logo">
          Space Travelers Hub
        </div>
        <ul>
          <li><NavLink to="/">Rockets</NavLink></li>
          <li><NavLink to="/MyProfile">My Profile</NavLink></li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Navbar;
