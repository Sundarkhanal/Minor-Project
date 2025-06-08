import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/nav-logo.png'
import logo_dark from '../../assets/nav-logo.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_icon_light from '../../assets/night.png'
import toggle_icon_dark from '../../assets/day.png'

const Navbar = ({theme, setTheme}) => {
  const toggle_mode = () =>{
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <div className='navbar'>
        <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
        </ul>

        <div className='search-box'>
            <input type="text" placeholder='Search ' />
            <img src={theme == 'light' ?search_icon_light : search_icon_dark} alt="" className='search-icon' />
        </div>

        <img onClick={() => toggle_mode()} src={theme == 'light' ?toggle_icon_light : toggle_icon_dark} alt="" className='toggle-icon'/>
    </div>
  )
}

export default Navbar