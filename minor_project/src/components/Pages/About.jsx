import React from 'react'
import './About.css'
import aboutImage from '../../assets/nav-logo.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Welcome to our bookstore! We are passionate about sharing stories and
          knowledge with the world. Our carefully selected collection ranges
          from timeless classics to modern bestsellers. Explore, learn, and grow with us!
        </p>
      </div>
      <div className="about-misson">
        
      </div>
    </div>
  )
}

export default About