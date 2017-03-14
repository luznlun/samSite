import React, { Component } from 'react';
import { Link } from 'react-router'
import $ from 'jquery';

var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: '53Fk-70GCjVzZVyXEH0avQ',
  consumer_secret: 'Qvmca553bAh2wnfHt8hla6jr4Ls',
  token: 'Tfx-YcWPXNeME7AF5Wsdeq6lvPIRugBv',
  token_secret: 'sUIlbk7wEe_q6IMgizCVO6myjs8',
});

function Welcome(){
  // See http://www.yelp.com/developers/documentation/v2/search_api
  yelp.search({ term: 'food', location: 'Montreal' })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err);
  });

  // See http://www.yelp.com/developers/documentation/v2/business
  yelp.business('yelp-san-francisco')
    .then(console.log)
    .catch(console.error);

  yelp.phoneSearch({ phone: '+15555555555' })
    .then(console.log)
    .catch(console.error);

  // A callback based API is also available:
  yelp.business('yelp-san-francisco', function(err, data) {
    if (err) return console.log(err);
    console.log(data);
  });
}


class Footer extends Component {

  componentDidMount(){
    Welcome()
  }




  render() {
    let content = this.props.content;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="primary-title" style={{"color":"#d32323"}}>{content.footer.findusonyelp}</h2>
            <img className="col-xs-12 col-md-12" src="/o.jpg" role="presentation"></img>
            <p><a className="btn btn-danger" href="https://www.yelp.com/biz/bonjour-professional-iphone-ipad-repair-and-electronic-center-san-francisco?adjust_creative=hWC8vHA1xGldI4IJnfcLKQ&utm_campaign=yelp_api&utm_medium=api_v2_business&utm_source=hWC8vHA1xGldI4IJnfcLKQ" role="button">{content.footer.detail} »</a></p>
          </div>
          <div className="col-md-4">
            <h2 style={{"color":"#619de5"}}>{content.footer.map}</h2>
            <iframe className="col-xs-12 col-md-12" height="300" frameBorder="0" style={{border:"0"}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJUSGv8WWHhYARMREszDov4lM&key=AIzaSyBIphdq8aiWRDeafRSJ12WV2wpi0H5-Zbw" allowFullScreen></iframe>
          </div>
          <div className="col-md-4">
            <h2 style={{"color":"rgb(101, 158, 203)"}}>{content.footer.freeparking}</h2>
            <img className="col-xs-12 col-sm-12 col-md-12" src="/download.jpeg" role="presentation"></img>
            <p><Link to={'/parking'}><button className="btn btn-primary" role="button">{content.footer.detail} »</button></Link></p>
          </div>
        </div>
        <hr/>
        <footer>
          <p>© GFC IPhone IPad Repair 2017</p>
        </footer>
      </div>
    );
  }
}

export default Footer;
