import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksSearch from './BooksSearch'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

  gotoListPage = () => {
    this.setState({
      showSearchPage: false
    });
  }

  gotoSearchPage = () => {
    this.setState({
      showSearchPage: true
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksSearch />
        )} />
        <Route path='/books' render={() => (
          <ListBooks />
        )} />
      </div>
    )
  }
}

export default BooksApp
