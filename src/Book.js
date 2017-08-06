import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    bookDetail: PropTypes.object.isRequired,
    handleCategoryChange: PropTypes.func.isRequired
  }

  render() {
    const { bookDetail, handleCategoryChange } = this.props;
    // Check that authors is an array before iterating.
    bookDetail.authors = bookDetail.authors || [];

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={
            {
              width: 128,
              height: 193,
              backgroundImage: 'url(' + bookDetail.imageLinks.smallThumbnail + ')'
            }}>
          </div>
          <div className="book-shelf-changer">
            <select
                value={bookDetail.shelf}
                onChange={(event) => handleCategoryChange(event.target.value, bookDetail)}
              >
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{bookDetail.title}</div>
        {
          bookDetail.authors.map((author, idx) =>
            <div className="book-authors" key={idx}>
              {author}
              </div>
          )
        }
      </div>
    )
  }
}

export default Book
