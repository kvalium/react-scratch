import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles.scss';

import App from './App';

const rootDiv = document.createElement('div');
rootDiv.id = 'root';
document.getElementsByTagName('body')[0].appendChild(rootDiv);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
