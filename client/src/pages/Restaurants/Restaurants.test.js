import React from 'react';
import ReactDOM from 'react-dom';
import Restaurants from './Restaurants';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Restaurants />, div);
  ReactDOM.unmountComponentAtNode(div);
});
