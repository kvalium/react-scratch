import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import './assets/styles.scss';

import App from './App';

const rootDiv = document.createElement('div');
rootDiv.id = 'root';
document.getElementsByTagName('body')[0].appendChild(rootDiv);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
