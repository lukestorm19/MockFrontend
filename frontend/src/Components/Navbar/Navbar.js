

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from '../Overview/Dashboard';
import ExceptionReport from '../Report/ExceptionReport';
import FilterReport from '../Report/FilterReport';
import aperture from './aperture (1).svg';
import alert from './alert-circle (1).svg';
import filter from './filter (1).svg';
import check from './check-circle (1).svg';

const headStyle={
  position: "absolute",
  width: "105px",
  height: "24px",
  left: "45px",
  top: "41px",
  fontFamily: "Roboto Mono",
  textDecoration:"none",
  fontWeight: "bold",
  fontSize: "22px",
  lineHeight: "24px",
  letterSpacing: "0.4px",
  color: "#EEEEEE",
  opacity: "0.7"


}
const navStyle={
  position: "absolute",
  width: "250px",
  height: "1000px",
  left: "-8px",
  top: "0px",
  background: "#363740",
  textDecoration:"none",
}
const itemStyle={ 
  top:"20px",  
  fontFamily: "Quicksand-Normal",
  textDecoration:"none",
  fontWeight: "normal",
  fontSize: "19px",
  lineWeight: "20px",
  letterSpacing: "0.2px",
  color: "#EEEEEE", 
  
}
const listStyle={
  textDecoration: "none",
  listStyleType: "none",
  position:"absolute",
  textAlign: "left",
  top:"100px"
}
class App extends Component {
  render() {
    return (
    <Router>
        <div>
          
          <nav style={navStyle}>
          <h3 style={headStyle} >Dashboard</h3>
          <ul  style={listStyle}>
            <li ><Link to={'/'} style={itemStyle}> <img src={aperture} style={{height:14},{width:14},{marginRight:10}}/>Overview </Link></li>
            <br></br>
            <li ><Link to={'/ExceptionReport'} style={itemStyle}><img src={alert} style={{height:14},{width:14},{marginRight:10}}/>Exception Report</Link></li>
            <br></br>
            <li><Link to={'/FilterReport'}  style={itemStyle}><img src={filter} style={{height:14},{width:14},{marginRight:10}}/>Filter Report</Link></li>
            <br></br>
            <li><Link to={''} style={itemStyle}><img src={check} style={{height:14},{width:14},{marginRight:10}}/>Processed Report</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/ExceptionReport' component={ExceptionReport} />
              <Route path='/FilterReport' component={FilterReport} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
