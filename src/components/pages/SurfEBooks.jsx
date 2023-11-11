import React, { useState, useEffect } from 'react';
import './SurfEBooks.css';
import Sidebar from '../Sidebar';
import booksData from './books.json';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import SubscribeForm from './subscribeForm';

const SurfEBooks = () => {
  const [subscribedBooks, setSubscribedBooks] = useState([]);
  const [ebooks, setEbooks] = useState(booksData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [nameSearchTerm, setNameSearchTerm] = useState('');
  const [authorSearchTerm, setAuthorSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 3;
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [dataToDownload, setDataToDownload] = useState({ id: '', name: '', supervisor: '' });

  const handleSubscribe = (book) => {
    // Add the subscribed book to the list
    setShowSubscribeModal(true);
    


    setSubscribedBooks([...subscribedBooks, book]);
    
    const updatedEbooks = ebooks.map(ebook => {
      if (ebook.id === book.id) {
        return { ...ebook, subscribed: true };
      }
      return ebook;
    });
    setEbooks(updatedEbooks);
  
    // Store the updated subscription status in localStorage
    localStorage.setItem('ebooks', JSON.stringify(updatedEbooks));
  
    setShowSubscribeModal(true);
    setDataToDownload({ ...dataToDownload, bookName: book.title ,bookId:book.id});
  };

  useEffect(() => {
    const storedEbooks = JSON.parse(localStorage.getItem('ebooks'));
  
    if (storedEbooks) {
      setEbooks(storedEbooks);
    }
  
    
  }, []);
  

  const handleSaveForm = (formData) => {
    setDataToDownload(formData);
    
  };

  const handleTwoActions = (formData) => {
    handleSaveForm(formData);
    handleDownloadForm();
  };

  const handleDownloadForm = () => {
    const jsonData = JSON.stringify(dataToDownload);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'subscriptionData.json';
    a.click();
    URL.revokeObjectURL(url);
  };
  

  const filterEbooks = () => {
    return ebooks.filter(ebook => selectedCategory === 'All' || ebook.category === selectedCategory);
  };

  const filterBooksByName = () => {
    return filterEbooks().filter(ebook =>
      ebook.title.toLowerCase().includes(nameSearchTerm.toLowerCase())
    );
  };

  const filterBooksByAuthor = () => {
    return filterEbooks().filter(ebook =>
      ebook.author.toLowerCase().includes(authorSearchTerm.toLowerCase())
    );
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, nameSearchTerm, authorSearchTerm]);

  const totalPages = Math.ceil(nameSearchTerm ? filterBooksByName().length : filterBooksByAuthor().length);
  const getPreviewPath = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+/g, '')
      .replace(/^-+|-+$/g, '');
  };
  

  const renderBooks = (filteredBooks) => {
    // const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
    return currentBooks.map((ebook) => (
      <div className="ebook-card" key={ebook.id}>
        <div className="book-image">
          <img src={ebook.imageUrl} alt={ebook.title} />
        </div>
        <div className="book-details">
          <h3>{ebook.title}</h3>
          <p>Author: {ebook.author}</p>
          <p>Category: {ebook.category}</p>
          <div className="card-actions ">
            <Link className="btn btn-light m-1" to={`/previews/${getPreviewPath(ebook.title)}`}>Preview</Link>
            {ebook.subscribed ? (
  <button className="btn btn-success m-1" disabled>
    Subscribed
  </button>
) : (
  <button
    className="btn btn-success m-1"
    onClick={() => handleSubscribe(ebook)}
  >
    Subscribe
  </button>
)}

          </div>
        </div>
      </div>
    ));
  };
  

  return (
    
    <div className="ok">
    <div className="ebook">
    

      <Sidebar/>
      <div className="ebook-container">
      <div className="upperbox">
        <h2>Surf E-Books</h2>
        <div className="filters">
          <div className="filter">
            <label>Filter by Category:</label>
            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
              <option value="All">All</option>
              <option value="Romance">Romance</option>
              <option value="Fantasy">Fantasy</option>
            </select>
          </div>
        </div>
        <div className="search-bars">
          <div className="search-bar">
            <label>Search by Name:</label>
            <input
              type="text"
              placeholder="Search by Name"
              value={nameSearchTerm}
              onChange={e => setNameSearchTerm(e.target.value)}
            />
          </div>
          <div className="search-bar">
            <label>Search by Author:</label>
            <input
              type="text"
              placeholder="Search by Author"
              value={authorSearchTerm}
              onChange={e => setAuthorSearchTerm(e.target.value)}
            />
          </div>
        </div>
        </div>
        <div className="ebook-list">
          {nameSearchTerm
            ? renderBooks(filterBooksByName())
            : renderBooks(filterBooksByAuthor())}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <Modal show={showSubscribeModal} onHide={() => setShowSubscribeModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Subscribe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SubscribeForm onSave={handleTwoActions} bookName={dataToDownload.bookName} bookId={dataToDownload.bookId} />
          </Modal.Body>
        </Modal>
      </div>
    </div>
    </div>
  );
};

export default SurfEBooks;

