import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notfound from './Notfound';
import Parking from './Parking';
import Pricing from './Pricing';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
const Provider = require('react-redux').Provider;
const createStore = require('redux').createStore;
const content = require('./Action/reducer');

const store = createStore(content);

ReactDOM.render(
  <Provider {... { store }}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/parking" component={Parking}/>
      <Route path="/pricing" component={Pricing}/>
      <Route path="*" component={Notfound}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
