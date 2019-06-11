import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('../services/auth.js', () => ({
  login() {
    
  },
  handleAuth() {
    return Promise.resolve([]);
  }
}));

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
