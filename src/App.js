import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksSearch from './BooksSearch'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'

class BooksApp extends Component {
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
