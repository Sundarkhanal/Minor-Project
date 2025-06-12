import React, {useContext} from 'react'
import './Popular_this_week.css'
import { ThemeContext } from '../../context/light_dark';
import book1 from "../../assets/Books/popular1.jpeg";
import book2 from "../../assets/Books/popular2.jpeg";
import book3 from "../../assets/Books/popular3.jpeg";
import book4 from "../../assets/Books/popular4.jpeg";


const Popular_this_week = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <section className={`popular-this-week ${theme === 'dark' ? 'dark' : ''}`}>
        <h1>Popular This Week</h1>
        <div className='book-grid'>
            <div className='book-card'>
                <img src={book1} alt="Book " />
                <h4>Book title</h4>
            </div>
            <div className='book-card'>
                <img src={book2} alt="Book " />
                <h4>Book title</h4>
            </div>
            <div className='book-card'>
                <img src={book3} alt="Book " />
                <h4>Book title</h4>
            </div>
            <div className='book-card'>
                <img src={book4} alt="Book " />
                <h4>Book title</h4>
            </div>
            
        </div>
    </section>
  );
};

export default Popular_this_week