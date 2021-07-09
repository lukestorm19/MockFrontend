import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Dashboard from '../Overview/Dashboard';
import ExceptionReport from '../Report/ExceptionReport';
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header/>
            <Navbar/>
            </div>
            
         );
    }
}
 
export default Home;
