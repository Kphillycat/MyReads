import React from 'react';
import ListBooks from './ListBooks';
import { shallow } from 'enzyme';

describe('ListBooks Component - ', () => {
  it('renders the component ', () => {
    const listBooksShallow = shallow(<ListBooks />);
    expect(listBooksShallow.length).toEqual(1);
  });

  it('links back to all books page', () => {
    const listBooksShallow = shallow(<ListBooks />);
    expect(listBooksShallow.find('Link').prop('to')).toEqual('/');
  });
});
