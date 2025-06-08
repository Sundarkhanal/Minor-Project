import React from 'react'
import './Featuredbooks.css'
import book1 from '../../assets/Books/book-1.jpeg';
import book2 from '../../assets/Books/book-2.jpeg';
import book3 from '../../assets/Books/book-3.jpeg';


const Featuredbooks = () => {
  return (
    <section className='featured-books'>
        <h1>Featured Books</h1>
        <div className='book-grid'>
            <div className='book-card'>
                <img src={book1} alt="Book 1" />
                <h4>Book Title 1</h4>
            </div>
            <div className='book-card'>
                <img src={book2} alt="Book 1" />
                <h4>Book Title 1</h4>
            </div>
            <div className='book-card'>
                <img src={book3} alt="Book 1" />
                <h4>Book Title 1</h4>
            </div>
            
            <div className='book-card'>
                <img src={book3} alt="Book 1" />
                <h4>Book Title 1</h4>
            </div>

        </div>

    </section>
  )
}

export default Featuredbooks