import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header height80">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <span className="col-md-1"><img src={logo} className="App-logo " alt="logo" />Company name</span>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="#">Iphone repair</a></li>
                <li><a href="#">Ipad repair</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">About us</a></li>
                <li className="dropdown hide">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right height80">
                <li>
                  <input type="checkbox"  checked data-toggle="toggle" data-size="small" data-on="English" data-off="简体中文" data-onstyle="success" data-offstyle="primary"/>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default Header;
