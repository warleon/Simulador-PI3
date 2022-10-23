import React from 'react';
import ReactDOM from 'react-dom';
import CountButton from './CountButton';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CountButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});