import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-mobile">
      <div className="dropdown">
        <button className="dropbtn">Menu
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
