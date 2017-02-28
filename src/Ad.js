import React, { Component } from 'react';
import './Ad.css';


class Ad extends Component {
  render() {
    return (
      <div className="container-fluid btnMargin" style={{"text-align": "center"}}>
        <button type="button" className="btn btn-primary">Make Appointment</button>
        <button type="button" className="btn btn-warning">VIP Appointment</button>
      </div>
    );
  }
}

export default Ad;
