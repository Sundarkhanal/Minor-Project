import React from 'react';
import './Home.css';
import heroImg from '../../assets/Books/Book-hero.jpg';
import Featuredbooks from './Featuredbooks';
import { useTheme } from '../../context/light_dark';
import Popular_this_week from './Popular_this_week';
import Footer from './Footer';

const Home = () => {
  const { theme } = useTheme();

  return (
    <>
      <section className={`home ${theme}`} id='home'>
        <div className='home-content'>
          <div className='content'>
            <h2>Best place to <br />Find your Favourite <br />Books</h2>
          </div>
          <img src={heroImg} alt="Hero-book" />
        </div>
      </section>
      <Featuredbooks />
      <Popular_this_week />
      <Footer />
    </>
  );
};

export default Home;