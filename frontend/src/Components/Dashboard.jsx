import React, { Component } from 'react';
import Exception from './Exception';
import Header from './Header';
import Navbar from './Navbar';
import Filter from './Filter';
import Chart from './charts/Chart';
import Counter from './Counter/Counter'
import ExceptionReport from './ExceptionReport/ExceptionReport';

class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
             <ExceptionReport />
            </div>
       
         );
    }
}
 
export default Dashboard;