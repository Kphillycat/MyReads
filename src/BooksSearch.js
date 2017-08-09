import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import _ from 'lodash'
import Book from './Book'
import PropTypes from 'prop-types'

class BooksSearch extends Component {
  static propTypes = {
    shelfBooks: PropTypes.array.isRequired,
    handleCategoryChange: PropTypes.func.isRequired
  }

  state = {
    books: []
  }

  allowedCategories = ["currentlyReading", "wantToRead", "read"];

  /**
  * @description Updates the state based on search term via API
  * @param searchTerm {String}
  *
  */
  handleSearch = (searchTerm, shelfBooks) => {
    if(!searchTerm) {
      this.setState({ books: [] });
      return;
    }
    // TODO: Add a debounce
    BooksAPI.search(searchTerm, 20).then((books) => {
      if(!books.error) {
        // TODO: Create quicker way to search current shelf by bookId
        // Sync the shelf for each book returned from the search with the current shelf
        books.forEach((book, bookIndex) => {
          for(let idx = 0; idx < shelfBooks.length; idx++) {
            if(book.id === shelfBooks[idx].id) {
              book.shelf = shelfBooks[idx].shelf;
              break;
            } else {
              book.shelf = "none";
            }
          }
        });

        this.setState({ books });
      }
    });
  }

  render () {
    const { shelfBooks, handleCategoryChange } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */
            }
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.handleSearch(event.target.value, shelfBooks)}
              />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) =>
              <li key={book.id}>
                <Book
                  bookDetail={book}
                  handleCategoryChange={handleCategoryChange}
                  />
              </li>
            )}
          </ol>
        </div>
      </div>
    )
  }

}

export default BooksSearch
