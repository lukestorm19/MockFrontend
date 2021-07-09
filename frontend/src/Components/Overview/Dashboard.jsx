import React, { Component } from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

import Chart from '../charts/Chart';
import Counter from '../Counter/Counter'
import ExceptionReport from '../Report/ExceptionReport';

const Style ={
  backgroundColor: "#ffffff",
}
class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={Style}>
              
              <Counter/>
              <Chart/>
            </div>
       
         );
    }
}
 
export default Dashboard;