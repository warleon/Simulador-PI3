import React from 'react';
import ReactDOM from 'react-dom';
import PriorityMatrix from './PriorityMatrix';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PriorityMatrix />, div);
  ReactDOM.unmountComponentAtNode(div);
});