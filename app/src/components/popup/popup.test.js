import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './Popup';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Popup />, div);
  ReactDOM.unmountComponentAtNode(div);
});