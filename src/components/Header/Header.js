import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router'


class Header extends Component {

  render() {
    let switchLanguage = this.props.switchLanguage;
    let content = this.props.content;
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
            <Link to={'/'}><div className="navbar-brand">Company name</div></Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to={'/iphone'}>{content.header.iphonerepair}</Link></li>
              <li><Link to={'/ipad'}>{content.header.ipadrepair}</Link></li>
              <li><Link to={'/pricing'}>{content.header.pricing}</Link></li>
              <li><Link to={'/aboutus'}>{content.header.aboutus}</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <button className="btn btn-default btn-round" onClick={switchLanguage.bind(this,content.switch.target)}>{content.switch.lang}</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
