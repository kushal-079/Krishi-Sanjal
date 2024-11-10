import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';


const Navbar = () => {
  return (
    <div className="nav">
      <div className="navbar">
        <div className="logo">
        <img src={ assets.logo } alt="Logo" />
        </div>
        <div className="list">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">My Products</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Sales Analytics</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar