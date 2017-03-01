import React, { Component } from 'react';
import './Ad.css';


class Ad extends Component {
  render() {
    return (
      <div className="container-fluid btnMargin" style={{"textAlign": "center"}}>
        <button className="btn btn-primary btn-fill">Make Appointment</button>
        <button className="btn btn-warning btn-fill">VIP Appointment</button>
      </div>
    );
  }
}

export default Ad;
