import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './Calendar';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calendar />, div);
  ReactDOM.unmountComponentAtNode(div);
});