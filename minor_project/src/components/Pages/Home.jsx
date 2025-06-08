import React from 'react'
import './Home.css'
import heroImg from '../../assets/Books/Book-hero.jpg';
import Featuredbooks from './Featuredbooks';



const Home = () => {
  return (
    <>
    <section className='home' id='home'>
        <div className='home-content'>
            <div className='content'>
                <h2>Best place to <br />Find your Favourite <br />Books</h2>
            </div>

            <img src={heroImg} alt="Hero-book" />
        </div>
    </section>
    
    {/* // featured book section */}
    <Featuredbooks />
    </>
    
  )
}

export default Home