import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../API';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        setBooks(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const filteredBooks = books.filter(book => {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredBooks.length / itemsPerPage); i++) {
      pageNumbers.push(
        <span
          key={i}
          id={i}
          onClick={handlePageClick}
          className={i === currentPage ? "active" : null}
        >
          {i}
        </span>
      );
    }
    return pageNumbers;
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6 col-lg-4 d-flex justify-content-center'>
          <div className="form-outline mb-3 ">
            <input
              type="text"
              className="form-input"
              placeholder="Cari buku"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={searchTerm}
              onChange={event => setSearchTerm(event.target.value)}
              style={{ backgroundColor: "transparent", borderBottom: "1px solid black", width: "400px" }}
            >
            </input>
            <div className='form-line'></div>
          </div>
        </div>
      </div>
      <div className='row pt-3'>
        {currentItems.length ? (
          currentItems.map((book) => (
            <div className="col-md-6 col-lg-4 mb-3" key={book.id}>
              <div className="card bg-white cardimage">
                <img src={book.image_url} alt="#" className="card-img-top mt-4" />
                <div className="card-body">
                  <h2 className="card-title text-center pt-3">{book.title}</h2>
                  <p className="card-text text-center pt-3">{book.Quote1}</p>
                  <div className='d-flex justify-content-center'>
                    <Link to={`/book/${book.id}`} className="btn btn-warning">Lihat Detail</Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className='col text-center'>Data tidak ada</div>
        )}
      </div>
      <div className="row justify-content-center">
        <div className="col-auto">
          <div id="page-numbers">
            {renderPageNumbers()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
