import React from 'react';
import ListBooks from './ListBooks';
import { shallow } from 'enzyme';

describe('ListBooks Component - ', () => {
  const testProps = {
    bookCategories: {
      "currentlyReading": [],
      "wantToRead": [],
      "read": []
    },
    handleCategoryChange: () => {}
  };

  it('renders the component ', () => {
    const listBooksShallow = shallow(<ListBooks {...testProps} />);
    expect(listBooksShallow.length).toEqual(1);
  });

  it('links back to all books page', () => {
    const listBooksShallow = shallow(<ListBooks {...testProps} />);
    expect(listBooksShallow.find('Link').prop('to')).toEqual('/search');
  });
});
