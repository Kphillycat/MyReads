import React, { Component } from 'react'
import './App.css'
import BooksSearch from './BooksSearch'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
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
  * @description Updates the bookshelf on the backend via API and re-renders the component
  * @param shelf {String} - Name of shelf
  * @param book {Object} - Includes ID of Book
  *
  */
  handleCategoryChange = (shelf, book) => {
    if(this.allowedCategories.indexOf(shelf) === -1) {
      return;
    }

    if(book.shelf !== shelf) {
      // Update shelf via API
      BooksAPI.update(book, shelf).then((books) => {
        book.shelf = shelf;

        // Now update current state by moving book to the shelf
        // Remove the current book and then
        // append it back to the state with new shelf
        this.setState({
          books: this.state.books.filter(
              (curBook) => curBook.id !== book.id).concat([book])
        })
      });
    }
  }

  render() {
    let bookCategories = {
      "currentlyReading": [],
      "wantToRead": [],
      "read": []
    };

    // Create categories object to make it easier to build the grid
    this.state.books.forEach((book) => {
      bookCategories[book.shelf].push(book);
    });

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks bookCategories={bookCategories} handleCategoryChange={this.handleCategoryChange} />
        )} />
        <Route path='/search' render={() => (
          <BooksSearch shelfBooks={this.state.books} handleCategoryChange={this.handleCategoryChange} />
        )} />
      </div>
    )
  }
}

export default BooksApp
