// src/components/Navbar/Navbar.jsx

import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/nav-logo.png';
import searchLight from '../../assets/search-w.png';
import searchDark from '../../assets/search-b.png';
import toggleLight from '../../assets/night.png';
import toggleDark from '../../assets/day.png';
import { useTheme } from '../../context/light_dark';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" className='logo' />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/product">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className='search-box'>
        <input type="text" placeholder='Search' />
        <img
          src={theme === 'light' ? searchLight : searchDark}
          alt="search"
          className='search-icon'
        />
      </div>

      <img
        onClick={setTheme}
        src={theme === 'light' ? toggleLight : toggleDark}
        alt="toggle"
        className='toggle-icon'
      />
    </div>
  );
};

export default Navbar;
