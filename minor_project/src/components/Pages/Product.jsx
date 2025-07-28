import React, { useContext } from 'react';
import './Featuredbooks.css';
import book1 from '../../assets/Books/book-1.jpeg';
import book2 from '../../assets/Books/book-2.jpeg';
import book3 from '../../assets/Books/book-3.jpeg';
import novelbook1 from '../../assets/novel_book/novelbook1.jpeg';
import novelbook2 from '../../assets/novel_book/novelbook2.jpeg';
import novelbook3 from '../../assets/novel_book/novelbook3.jpeg';
import novelbook4 from '../../assets/novel_book/novelbook4.jpeg';
import Cbook from '../../assets/programming books/Cprogramming_book1.jpeg';
import full_stack from '../../assets/programming books/full stack.jpeg';
import java from '../../assets/programming books/java.jpeg';
import python from '../../assets/programming books/python.jpeg';
import chemistry from '../../assets/Academic_Books/Chemistry.jpeg';
import english from '../../assets/Academic_Books/English11.jpeg';
import nepali from '../../assets/Academic_Books/nepali12.jpeg';
import physics from '../../assets/Academic_Books/Physics.jpeg';


import { ThemeContext } from '../../context/light_dark';
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
            <h4>Seto Dharti</h4>
            <h3>Nrs. 200</h3>
          </div>
          <div className='book-card'>
            <img src={book2} alt="Book 2" />
            <h4>Mindset to Startup</h4>
            <h3>Nrs. 400</h3>
          </div>
          <div className='book-card'>
            <img src={book3} alt="Book 3" />
            <h4>The Startup code</h4>
            <h3>Nrs. 500</h3>
          </div>
          <div className='book-card'>
            <img src={physics} alt="Book 4" />
            <h4>Physics</h4>
            <h3>Nrs. 500</h3>
          </div>
        </div>
        <div className="book-title2">
          <h1>Programming Books</h1>
          <div className='book-grid'>
            <div className='book-card'>
              <img src={Cbook} alt="Book 1" />
              <h4>C Programming</h4>
              <h3>Nrs. 1100</h3>
            </div>
            <div className='book-card'>
              <img src={full_stack} alt="Book 2" />
              <h4>Full Stack Development</h4>
              <h3>Nrs. 1200</h3>
            </div>
            <div className='book-card'>
              <img src={java} alt="Book 3" />
              <h4>Java</h4>
              <h3>Nrs. 1300</h3>
            </div>
            <div className='book-card'>
              <img src={python} alt="Book 4" />
              <h4>Python</h4>
              <h3>Nrs. 1400</h3>
            </div>
          </div>

        </div>
        <div className="book-title3">
          <h1>Novels books</h1>
          <div className='book-grid'>
            <div className='book-card'>
              <img src={novelbook1} alt="Book 1" />
              <h4>उसले दिएको उमेर </h4>
              <h3>Nrs. 500</h3>
            </div>
            <div className='book-card'>
              <img src={novelbook2} alt="Book 2" />
              <h4>मुना मदन </h4>
              <h3>Nrs. 700</h3>
            </div>
            <div className='book-card'>
              <img src={novelbook3} alt="Book 3" />
              <h4>सेतो धर्ती</h4>
              <h3>Nrs. 900</h3>
            </div>
            <div className='book-card'>
              <img src={novelbook4} alt="Book 4" />
              <h4>इजोरिया </h4>
              <h3>Nrs. 900</h3>
            </div>
          </div>
        </div>
        <div className="book-title4">
          <h1>Academic and Text Books</h1>
          <div className='book-grid'>
            <div className='book-card'>
              <img src={chemistry} alt="Book 1" />
              <h4>Chemistry</h4>
              <h3>Nrs. 1200</h3>
            </div>
            <div className='book-card'>
              <img src={english} alt="Book 2" />
              <h4>English - 11</h4>
              <h3>Nrs. 500</h3>
            </div>
            <div className='book-card'>
              <img src={nepali} alt="Book 3" />
              <h4>Nepali - 12</h4>
              <h3>Nrs. 500</h3>
            </div>
            <div className='book-card'>
              <img src={physics} alt="Book 4" />
              <h4>Physics</h4>
              <h3>Nrs. 1300</h3>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Featuredbooks;
