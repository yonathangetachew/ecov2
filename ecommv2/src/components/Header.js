import React from 'react';
import './Header.css';
import logo from '../img/luxury-logo.jpeg';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src ={logo} alt="" />
      </div>
      <ul className="navbar">

        <li><Link to="/index"> Home</Link></li>
        <li><Link to="/contact"> Contact</Link></li>
        <li><Link to="/shop"> Shop</Link></li>
      </ul>
      <div className="contactButton">
        <i className="fa fa-bird"></i>
        <li><Link className="contact-btn" to="/contact"> Connect</Link></li>

      </div>
    </header>
  );
};

export default Header;
