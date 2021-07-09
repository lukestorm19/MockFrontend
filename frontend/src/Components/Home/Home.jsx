import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Chart from '../charts/Chart';
import ExceptionReport from '../ExceptionReport/ExceptionReport';
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header/>
            <Navbar/>
            <Chart/>
            <ExceptionReport/>
            </div>
            
         );
    }
}
 
export default Home;
