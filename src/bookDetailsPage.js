import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  './bookdetailspage.css' 

function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://softwium.com/api/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data))
      .catch(error => console.error('Error fetching book details:', error));
  }, [id]);

  return (
    <div className="book-details-container">
      {book ? (
        <div className="book-details">
          <h1>{book.title}</h1>
          <p>ISBN: {book.isbn}</p>
          <p>Page Count: {book.pageCount}</p>
          <p>Authors: {book.authors.join(', ')}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BookDetailsPage;
