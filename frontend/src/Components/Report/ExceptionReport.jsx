import React, { Component } from 'react';
import App from "./App";
import Counter from '../Counter/Counter';
import Dropdown from '../DropDown/Dropdown';
class ExceptionReport extends Component {
    state = {  }
    render() { 
        return ( 
            <div> 
            <Dropdown/>
                 
            <App/>
            </div>
            
         );
    }
}
 
export default ExceptionReport;
