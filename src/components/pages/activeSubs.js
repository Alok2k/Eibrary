import React from 'react';
import booksData from './books.json'; // Import your books data


const ActiveSubscription = () => {
  // Filter the books based on the 'subscribed' property
  const subscribedBooks = booksData.filter((book) => book.subscribed);

  return (
    <div className="active-subscription">
      <h2>Active Subscriptions</h2>
      <ul>
        {subscribedBooks.map((book) => (
          <li key={book.id}>
            <div className="book-details">
              <img src={book.imageUrl} alt={book.title} />
              <div>
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Category: {book.category}</p>
                <p>Subscription Date: {book.subscriptionDate}</p>
              </div>
            </div>
            <p>{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveSubscription;
