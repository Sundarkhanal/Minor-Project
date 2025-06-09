import React, { useContext } from 'react';
import './Featuredbooks.css';
import book1 from '../../assets/Books/book-1.jpeg';
import book2 from '../../assets/Books/book-2.jpeg';
import book3 from '../../assets/Books/book-3.jpeg';
import { ThemeContext } from '../../context/light_dark'; // adjust path if needed

const Featuredbooks = () => {
  const { theme } = useContext(ThemeContext); // get current theme

  return (
    <section className={`featured-books ${theme === 'dark' ? 'dark' : ''}`}>
      <h1>Featured Books</h1>
      <div className='book-grid'>
        <div className='book-card'>
          <img src={book1} alt="Book 1" />
          <h4>Book Title 1</h4>
        </div>
        <div className='book-card'>
          <img src={book2} alt="Book 2" />
          <h4>Book Title 2</h4>
        </div>
        <div className='book-card'>
          <img src={book3} alt="Book 3" />
          <h4>Book Title 3</h4>
        </div>
        <div className='book-card'>
          <img src={book3} alt="Book 4" />
          <h4>Book Title 4</h4>
        </div>
      </div>
    </section>
  );
};

export default Featuredbooks;
