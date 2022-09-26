import React from 'react';
import ReactDOM from 'react-dom';
import ListBox from './ListBox';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});