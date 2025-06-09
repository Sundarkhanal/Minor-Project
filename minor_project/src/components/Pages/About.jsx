import React from 'react'
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h1>About Us</h1>
      <p>
        Welcome to BookVerse! We’re passionate about connecting readers with stories
        that inspire, educate, and entertain.
      </p>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make books accessible and enjoyable for everyone. Whether
          you're into fiction, self-help, or textbooks, we’ve got something for you.
        </p>
      </div>

      <div className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide selection of books from various genres</li>
          <li>User-friendly interface and easy navigation</li>
          <li>Hand-picked recommendations</li>
          <li>Secure and fast checkout process</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Meet the Founder</h2>
        <p>
          BookVerse was created by a team of book lovers who wanted to make online
          book shopping a joyful experience. Our founder, Alex, believes every story
          deserves to be heard.
        </p>
      </div>
    </section>
  );
};

export default About