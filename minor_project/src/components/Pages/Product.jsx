import React, { useContext } from 'react';
import './Featuredbooks.css';
import book1 from '../../assets/Books/book-1.jpeg';
import book2 from '../../assets/Books/book-2.jpeg';
import book3 from '../../assets/Books/book-3.jpeg';
import { ThemeContext } from '../../context/light_dark'; // adjust path if needed
import Footer from './Footer';
import './Product.css';

const Featuredbooks = () => {
  const { theme } = useContext(ThemeContext); // get current theme

  return (
  <div>
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
      <div className="book-title2">
        <h1>Programming Books</h1>
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

      </div>
      <div className="book-title3">
        <h1>Novels books</h1>
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
      </div>
      <div className="book-title4">
        <h1>Academic and Text Books</h1>
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
      
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default Featuredbooks;
