import React from 'react'
import aboutLogo from '../../assets/nav2-logo.jpg'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (

    <div className="footer-section">
      <section className='footer-about'>
        <img src={aboutLogo} alt="footer-logo" />
        <p>Welcome to our bookstore! <br /> Discover classic and modern books to learn, grow, <br /> and enjoy every story with us.</p>
      </section>

      <section className='quick-links'>
        <h2>Quick Links</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/product">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </section>

      <section className='contact-details'>
        <h2>Contact Us</h2>
        <p><i className="fa-solid fa-phone"></i> 9861007396</p>
        <p><i className="fa-solid fa-envelope"></i> khanalpustakbhandar@gmail.com</p>
        <p><i className="fa-solid fa-location-dot"></i> Dhurkot, Gulmi</p>
      </section>

      <section className='follow-us'>
        <h2>Follow Us</h2>
        <div className="social-icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </section>
    </div>

  )
}

export default Footer