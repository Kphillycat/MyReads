import React from 'react';
import Book from './Book';
import { mount } from 'enzyme';

describe('Book Component - ', () => {
  const testProps = {
    bookDetail: {
      authors: ['Testy McTestFace'],
      shelf: 'read',
      title: 'Test Title'
    },
    handleCategoryChange: () => {}
  };

  it('renders the component ', () => {
    const bookShallow = mount(<Book {...testProps}/>);
    expect(bookShallow.length).toEqual(1);
  });

  it('passes the correct props to the component ', () => {
    const bookShallow = mount(
      <Book {...testProps} />
    );
    expect(bookShallow.props().bookDetail).toBe(testProps.bookDetail);
  });

});
