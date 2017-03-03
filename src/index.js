import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
const Provider = require('react-redux').Provider;
const createStore = require('redux').createStore;
const content = require('./Action/reducer');

const store = createStore(content);

ReactDOM.render(
  <Provider {... { store }}>
    <App />
  </Provider>,
  document.getElementById('root')
);
