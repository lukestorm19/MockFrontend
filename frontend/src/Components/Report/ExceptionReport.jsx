import React, { Component } from 'react';
import App from "./App";
import Counter from '../Counter/Counter';
import Dropdown from '../DropDown/Dropdown';
import Refresh from '../Refresh/Refresh';
// import DateFilter from '../DateFilter/DateFilter';
class ExceptionReport extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{marginTop:100}}>         
            <Dropdown/>    
            {/* <DateFilter/>      */}
            <App />
            </div>
            
         );
    }
}
 
export default ExceptionReport;
