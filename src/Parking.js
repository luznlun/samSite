import React, { Component } from 'react';
import Header from './Header';
import Ad from './Ad';

import Footer from './Footer';
import json from '../lang.json';
let actions = require('./Action/actions');
let ReactRedux = require('react-redux');



class Parking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: json.en,
      current: 'en'
    };
  }

  render() {
    const content = this.props.content;
    const switchLanguage = this.props.switchLanguage;

    return (
      <div>
        <Header content={content} switchLanguage={switchLanguage}/>
        <Ad content={content}/>
        <div className="container ">
          <img src="/parking.jpg" className="col-xs-12 col-sm-12 col-md-12"role="presentation"></img>
        </div>
        <Footer content={content}/>
      </div>
    );
  }
}

module.exports = ReactRedux.connect(
  (state) => ({content: state.content}),
  (dispatch) => ({switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))})
)(Parking);
