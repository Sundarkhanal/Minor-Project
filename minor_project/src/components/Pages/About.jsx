import React from 'react'
import './About.css'
import aboutImage from '../../assets/nav-logo.png';
import ratnaPustak from '../../assets/Book_publishers/ratna-pustak.png';
import bpbPublishers from '../../assets/Book_publishers/bpb-publishers.png';
import finePrint from '../../assets/Book_publishers/fineprint publishers.jpeg';
import pearson from '../../assets/Book_publishers/pearson.png';


const About = () => {
  return (
    <>
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
    </div>
    <div className="about-misson-vison">
      <div className="about-misson">
        <h2>Our Mission</h2>
        <p>To make reading easy and enjoyable by offering a wide range of quality books at affordable prices.</p>
      </div>
      <div className="about-vision">
        <h2>Our Vision</h2>
        <p>To be a favorite online bookshop that inspires learning and a love for reading.</p>
      </div>
    </div>
    <div className="our-partners">
      <h1 className="partners-title">Our Partners</h1>
      <div className="ratna-pustak">
        <img src={ratnaPustak} alt="ratna-pustak image" />
        <h2>Ratna Pustak Publishers</h2>
      </div>
      <div className="bpb-publishers">
        <img src={bpbPublishers} alt="" />
        <h2>BPB Publishers</h2>
      </div>
      <div className="pearson">
        <img src={pearson} alt="" />
        <h2>Pearson Publishers</h2>
      </div>
      <div className="fine-print">
        <img src={finePrint} alt="" />
        <h2>Fineprint Publishers</h2>
      </div>
    </div>
    
    </>
  )
}

export default About