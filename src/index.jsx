import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles.scss';

import App from './App';

const rootDiv = document.createElement('div');
rootDiv.id = 'root';
document.getElementsByTagName('body')[0].appendChild(rootDiv);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
