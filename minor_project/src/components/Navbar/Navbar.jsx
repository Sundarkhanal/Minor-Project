// src/components/Navbar/Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/nav2-logo.jpg';
import searchLight from '../../assets/search-w.png';
import searchDark from '../../assets/search-b.png';
import toggleLight from '../../assets/night.png';
import toggleDark from '../../assets/day.png';
import { useTheme } from '../../context/light_dark';
import Login_SIgnup from '../Pages/Login_SIgnup';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [showMenu, setShwoMenu] = useState(false);
  const handleButtonToggle = () => {
    setShwoMenu(!showMenu);
  }

  const handleLoginClick = () => {
    navigate('/login-signup')
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" className='logo' />
      <nav className={showMenu ? "menu-mobile" : "menu-web"}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/product">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>


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

      <div className="login-signup">
        <button className='login' onClick={handleLoginClick}>
          Login
        </button>
      </div>
      <div className="ham-menu">
        <button onClick={handleButtonToggle}>
          <RxHamburgerMenu />
        </button>
      </div>
    </div>

  );
};

export default Navbar;
