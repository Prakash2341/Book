import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import  './Bookspage.css' 

function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://softwium.com/api/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="books-container"> 
      <h1 className="books-heading">Books Store</h1> 
      <ul className="books-list"> 
        {books.map(book => (
          <li className="book-item" key={book.id}> 
            <Link className="book-link" to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksPage;
