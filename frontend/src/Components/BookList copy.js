import React, { useState, useEffect } from 'react'
import '../Styles/booklist.css'
import { API_URL } from '../API'
import axios from 'axios'

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        console.log(res.data)
        setBooks(res.data)
      })
      .catch(err => console.log(err))
  }, []);

  const filteredBooks = books.filter(book => {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleAddFavorite = (book) => {
    setFavorites([...favorites, book]);
  }

  return (
    <div>
      <div className='d-flex justify-content-center'>
        <input
          type='text'
          placeholder='Search books'
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
      </div>
      <div className='book-list'>
        {filteredBooks.length ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book">
              <div><h4>{book.title}</h4></div>
              <div><img src={book.image_url} alt="#" /></div>
              <button className='btn-dark' onClick={() => handleAddFavorite(book)}>Tambahkan ke favorit</button>
            </div>
          ))
        ) : (
          <div className='text-center'>Data tidak ada</div>
        )}
      </div>
      
    </div>
  )
}

export default BookList
