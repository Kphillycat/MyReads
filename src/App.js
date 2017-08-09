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
  * @description Fetchs all the books via API and re-renders the component
  *
  */
  updateBookShelfs = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
      // Move the window to the top to indicate the update
      window.scrollTo(0,0);
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
