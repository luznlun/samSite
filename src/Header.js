import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  handleLangChange(){
    if(this.props.current ==='en'){
      this.props.switchLang('ch');
    }
    else{
      this.props.switchLang('en');
    }
  }

  render() {
    return (
      <nav className="navbar navbar-ct-blue" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#gsdk">Company name</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="#gsdk" >{this.props.data.header.iphonerepair}</a></li>
              <li><a href="#gsdk">{this.props.data.header.ipadrepair}</a></li>
              <li><a href="#gsdk">{this.props.data.header.pricing}</a></li>
              <li><a href="#gsdk">{this.props.data.header.aboutus}</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <button className="btn btn-default btn-round" onClick={this.handleLangChange.bind(this)}>简体中文</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
