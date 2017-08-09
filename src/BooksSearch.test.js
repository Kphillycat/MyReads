import React from 'react';
import BooksSearch from './BooksSearch';
import { shallow } from 'enzyme';

describe('BooksSearch Component - ', () => {
  const testProps = {
    shelfBooks: [{
      authors: ['Testy McTestFace'],
      shelf: 'read',
      title: 'Test Title'
    }],
    handleCategoryChange: () => {}
  };

  it('renders the component ', () => {
    const booksSearchShallow = shallow(<BooksSearch {...testProps} />);
    expect(booksSearchShallow.length).toEqual(1);
  });

  it('links back to all books page', () => {
    const booksSearchShallow = shallow(<BooksSearch {...testProps} />);
    expect(booksSearchShallow.find('Link').prop('to')).toEqual('/');
  });
});
