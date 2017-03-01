import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Ad from './Ad';
import Footer from './Footer';
import json from '../lang.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: json.en,
      current: 'en'
    };
  }

  switchLang(lang){
    if(lang==='en'){
      this.state = {
        lang: json.en,
        current: 'en'
      };
    }else{
      this.state = {
        lang: json.ch,
        current: 'ch'
      }
    }

  }
  render() {
    console.log("*****",this.state.current)
    return (
      <div>
        <Header data={this.state.lang} current={this.state.current} switchLang={this.switchLang.bind(this)}/>
        <Ad/>
        <Footer/>
      </div>
    );
  }
}

export default App;
