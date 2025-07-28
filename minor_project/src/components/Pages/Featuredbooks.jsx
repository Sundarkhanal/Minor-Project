import React, { useContext } from 'react';
import './Featuredbooks.css';
import book1 from '../../assets/Books/book-1.jpeg';
import book2 from '../../assets/Books/book-2.jpeg';
import book3 from '../../assets/Books/book-3.jpeg';
import physics from '../../assets/Academic_Books/Physics.jpeg';
import full_stack from '../../assets/programming books/full stack.jpeg';
import { ThemeContext } from '../../context/light_dark';
const Featuredbooks = () => {
  const { theme } = useContext(ThemeContext); // get current theme

  return (
    <section className={`featured-books ${theme === 'dark' ? 'dark' : ''}`}>
      <h1>Featured Books</h1>
      <div className='book-grid'>
        <div className='book-card'>
          <img src={book1} alt="Book 1" />
          <h4>Seto Dharti</h4>
          <h3>Nrs. 200</h3>
        </div>
        <div className='book-card'>
          <img src={full_stack} alt="Book 2" />
          <h4>Full Stack Development</h4>
          <h3>Nrs. 1100</h3>

        </div>
        <div className='book-card'>
          <img src={book3} alt="Book 3" />
          <h4>The Start-Up code</h4>
          <h3>Nrs. 200</h3>
        </div>
        <div className='book-card'>
          <img src={physics} alt="Book 4" />
          <h4>Physics</h4>
          <h3>Nrs. 1200</h3>
        </div>
      </div>
    </section>
  );
};

export default Featuredbooks;
