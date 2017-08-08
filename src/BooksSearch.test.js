import React from 'react';
import BooksSearch from './BooksSearch';
import { shallow } from 'enzyme';

describe('BooksSearch Component - ', () => {
  it('renders the component ', () => {
    const booksSearchShallow = shallow(<BooksSearch />);
    expect(booksSearchShallow.length).toEqual(1);
  });

  it('links back to all books page', () => {
    const booksSearchShallow = shallow(<BooksSearch />);
    expect(booksSearchShallow.find('Link').prop('to')).toEqual('/books');
  });
});
