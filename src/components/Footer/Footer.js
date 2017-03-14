import React, { Component } from 'react';
import { Link } from 'react-router'
import $ from 'jquery';

// var Yelp = require('yelp');
var oauthSignature = require('oauth-signature');
var n = require('nonce')();
var request = require('request');
var qs = require('querystring');
var _ = require('lodash');

var yelp = require('node-yelp');

// var yelp = new Yelp({
//   consumer_key: '53Fk-70GCjVzZVyXEH0avQ',
//   consumer_secret: 'Qvmca553bAh2wnfHt8hla6jr4Ls',
//   token: 'Tfx-YcWPXNeME7AF5Wsdeq6lvPIRugBv',
//   token_secret: 'sUIlbk7wEe_q6IMgizCVO6myjs8',
// });

var client = yelp.createClient({
  oauth: {
    "consumer_key": '53Fk-70GCjVzZVyXEH0avQ',
    "consumer_secret": 'Qvmca553bAh2wnfHt8hla6jr4Ls',
    "token": 'Tfx-YcWPXNeME7AF5Wsdeq6lvPIRugBv',
    "token_secret": 'sUIlbk7wEe_q6IMgizCVO6myjs8',
  },
});

var callBack= function(error, response, body){
  console.log("***",error)
  console.log("***",response)
  console.log("***",body)

}


//
// var request_yelp = function(set_parameters, callback) {
//
//   /* The type of request */
//   var httpMethod = 'GET';
//
//   /* The url we are using for the request */
//   var url = 'http://api.yelp.com/v2/buniness';
//
//   /* We can setup default parameters here */
//   var default_parameters = {
//     location: 'San+Francisco',
//     sort: '2'
//   };
//
//   /* We set the require parameters here */
//   var required_parameters = {
//     oauth_consumer_key : "53Fk-70GCjVzZVyXEH0avQ",
//     oauth_token : 'Tfx-YcWPXNeME7AF5Wsdeq6lvPIRugBv',
//     oauth_nonce : n(),
//     oauth_timestamp : n().toString().substr(0,10),
//     oauth_signature_method : 'HMAC-SHA1',
//     oauth_version : '1.0'
//   };
//
//   /* We combine all the parameters in order of importance */
//   var parameters = _.assign(default_parameters, set_parameters, required_parameters);
//
//   /* We set our secrets here */
//   var consumerSecret = 'Qvmca553bAh2wnfHt8hla6jr4Ls';
//   var tokenSecret = 'sUIlbk7wEe_q6IMgizCVO6myjs8';
//
//   /* Then we call Yelp's Oauth 1.0a server, and it returns a signature */
//   /* Note: This signature is only good for 300 seconds after the oauth_timestamp */
//   var signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});
//
//   /* We add the signature to the list of paramters */
//   parameters.oauth_signature = signature;
//
//   /* Then we turn the paramters object, to a query string */
//   var paramURL = qs.stringify(parameters);
//
//   /* Add the query string to the url */
//   var apiURL = url+'?'+paramURL;
//
//   /* Then we use request to send make the API Request */
//   request(apiURL, function(error, response, body){
//     return callback(error, response, body);
//   });
//
// };

function Welcome() {
  client.business("bonjour-professional-iphone-ipad-repair-and-electronic-center-san-francisco", {
    cc: "US"
  }).then(function (data) {
    console.log("***data: ",data);
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
