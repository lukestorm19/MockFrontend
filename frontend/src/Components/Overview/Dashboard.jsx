import React, { Component } from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

import Chart from '../charts/Chart';
import Counter from '../Counter/Counter'
import ExceptionReport from '../Report/ExceptionReport';
import Dropdown from '../DropDown/Dropdown';
import Home from '../Home/Home';
const Style ={
  backgroundColor: "#ffffff",
}
class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={Style}>
              
              <Dropdown/>
              <Counter/>
              <Chart/>
            </div>
       
         );
    }
}
 
export default Dashboard;