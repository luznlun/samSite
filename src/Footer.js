import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="primary-title" style={{"color":"#d32323"}}>FIND US ON YELP</h2>
            <img className="col-md-12" src="/o.jpg"></img>
            <p><a className="btn btn-secondary" href="https://www.yelp.com/biz/bonjour-professional-iphone-ipad-repair-and-electronic-center-san-francisco?adjust_creative=hWC8vHA1xGldI4IJnfcLKQ&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hWC8vHA1xGldI4IJnfcLKQ" role="button">View details »</a></p>
          </div>
          <div className="col-md-4">
            <h2>MAP</h2>
            <iframe className="col-md-12" width="600" height="450" frameBorder="0" style={{border:"0"}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJUSGv8WWHhYARMREszDov4lM&key=AIzaSyBIphdq8aiWRDeafRSJ12WV2wpi0H5-Zbw" allowFullScreen></iframe>
          </div>
          <div className="col-md-4">
            <h2 style={{"color":"#8ec641"}}>FREE PARKING</h2>
            <img className="col-md-12" src="/parking-small.jpg"></img>
            <p><a className="btn btn-secondary" href="/parking" role="button">View details »</a></p>
          </div>
        </div>
        <hr/>
        <footer>
          <p>© Company 2017</p>
        </footer>
      </div>
    );
  }
}

export default Footer;
