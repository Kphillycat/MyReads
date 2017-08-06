import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class ListBooks extends Component {
  state = {
    books: []
  }

  allowedCategories = ["currentlyReading", "wantToRead", "read"];

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
  }

  /**
  * @description Updates the bookshelf via API and re-render
  *
  */
  updateBookShelfs = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
      // Move the window to the top to indicate the update
      window.scrollTo(0,0);
    });
  }

  handleCategoryChange = (shelf, book) => {
    if(this.allowedCategories.indexOf(shelf) === -1) {
      return;
    }

    BooksAPI.update(book, shelf).then((books) => {
      // Trigger a API call and re-render if update is successful
      this.updateBookShelfs();
    })
  }

  render() {
    let bookCategories = {
      "currentlyReading": [],
      "wantToRead": [],
      "read": []
    }

    // Create categories object to make it easier to build the grid
    this.state.books.forEach((book) => {
      bookCategories[book.shelf].push(book);
    });

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
                        handleCategoryChange={this.handleCategoryChange} />
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
                        handleCategoryChange={this.handleCategoryChange} />
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
                        handleCategoryChange={this.handleCategoryChange} />
                    </li>
                  )}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/"
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
