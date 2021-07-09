import React, { Component } from 'react';
import App from "./App";
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
class ExceptionReport extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header/>
            
            <App/>
            </div>
            
         );
    }
}
 
export default ExceptionReport;
