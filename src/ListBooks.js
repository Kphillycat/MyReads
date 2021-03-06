import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    bookCategories: PropTypes.object.isRequired,
    handleCategoryChange: PropTypes.func.isRequired
  }

  render() {
    const { bookCategories, handleCategoryChange } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {bookCategories["currentlyReading"].map((book) =>
                    <li key={book.id}>
                      <Book
                        bookDetail={book}
                        handleCategoryChange={handleCategoryChange} />
                    </li>
                  )}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {bookCategories["wantToRead"].map((book) =>
                    <li key={book.id}>
                      <Book
                        bookDetail={book}
                        handleCategoryChange={handleCategoryChange} />
                    </li>
                  )}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {bookCategories["read"].map((book) =>
                    <li key={book.id}>
                      <Book
                        bookDetail={book}
                        handleCategoryChange={handleCategoryChange} />
                    </li>
                  )}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
