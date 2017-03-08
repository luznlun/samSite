import React, { Component } from 'react';
import Header from '../Header/Header';
import Ad from '../Ad/Ad';

import Footer from '../Footer/Footer';
import json from '../../../lang.json';
let actions = require('../../Action/actions');
let ReactRedux = require('react-redux');



class Pricing extends Component {
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
          <div className="panel-group" id="accordion">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-target="#collapseOne" href="#collapseOne" data-toggle="gsdk-collapse" className="">
                    {content.header.iphonerepair}
                  </a>
                </h4>
              </div>
              <div id="collapseOne" className="panel-collapse collapse gsdk-collapse" style={{"height":"0px"}}>
                <div className="panel-body">
                  <div className="col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                    <div className="table-responsive">
                    <table className="table table-shopping">
                        <thead>
                            <tr>
                                <th className="text-center"></th>
                                <th>{content.pricing.product}</th>
                                <th className="th-description">{content.pricing.description}</th>
                                <th className="text-right">{content.pricing.price}</th>
                                <th className="text-right">{content.pricing.warranty}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="img-container">
                                        <img style={{"width":"100px"}} src="../ip7cr.jpg" alt="..."/>
                                    </div>
                                </td>
                                <td className="td-name">
                                    Iphone 7 cracked screen
                                </td>
                                <td>
                                    <p>Screen Front Glass Replacement(Screen Cracked, but still display and responsive to touch)</p>
                                </td>

                                <td className="td-number">
                                    <small>$</small>100
                                </td>
                                <td className="td-number">
                                    1 year
                                </td>
                            </tr>
                            <tr>
                                 <td>
                                    <div className="img-container">
                                        <img style={{"width":"100px"}} src="/ip7chport.jpg" alt="..."/>
                                    </div>
                                </td>
                                <td className="td-name">
                                    Iphone 7 Charging port
                                </td>
                                <td>
                                    Charging Port（unable to charge or connect to computer)
                                </td>

                                <td className="td-number">

                                </td>
                                <td className="td-number">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="img-container">
                                        <img style={{"width":"100px"}} src="/ip7batt.jpg" alt="..."/>
                                    </div>
                                </td>
                                <td className="td-name">
                                    Iphone 7 Battery Replacement
                                </td>
                                <td>
                                    Battery Replacement(battery draining to quickly)
                                </td>

                                <td className="td-number">

                                </td>
                                <td className="td-number"></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="img-container">
                                        <img style={{"width":"100px"}} src="/ip7pb.jpg" alt="..."/>
                                    </div>
                                </td>
                                <td className="td-name">
                                    Iphone 7 Power Button
                                </td>
                                <td>
                                  Power/Lock button
                                </td>
                                <td className="td-number">
                                </td>
                                <td className="td-number">
                                </td>
                            </tr>
                            <tr>
                                 <td>
                                    <div className="img-container">
                                        <img style={{"width":"100px"}} src="/ip7camf.jpg" alt="..."/>
                                    </div>
                                </td>
                                <td className="td-name">
                                    Iphone 7 Front Camera
                                </td>
                                <td>Front Camera</td>
                                <td className="td-number">
                                </td>
                                <td className="td-number">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-target="#collapseTwo" href="#collapseTwo" data-toggle="gsdk-collapse" className="">
                    Ipad
                  </a>
                </h4>
              </div>
              <div id="collapseTwo" className="panel-collapse collapse gsdk-collapse" style={{"height":"0px"}}>
                <div className="panel-body">
                  Something
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-target="#collapseThree" href="#collapseTwo" data-toggle="gsdk-collapse" className="">
                    Some phone
                  </a>
                </h4>
              </div>
              <div id="collapseThree" className="panel-collapse collapse gsdk-collapse" style={{"height":"0px"}}>
                <div className="panel-body">
                  Something
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer content={content}/>
      </div>
    );
  }
}

module.exports = ReactRedux.connect(
  (state) => ({content: state.content}),
  (dispatch) => ({switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))})
)(Pricing);
