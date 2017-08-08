import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow } from 'enzyme';

/**
 This course is not designed to teach Test Driven Development.
 Feel free to use this file to test your application, but it
 is not required.
**/


it('renders without crashing', () => {
  const appShallow = shallow(<App />);
  expect(appShallow.length).toBe(1);
})
