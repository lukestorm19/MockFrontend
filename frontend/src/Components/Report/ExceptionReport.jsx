import React, { Component } from 'react';
import App from "./App";
import Counter from '../Counter/Counter';
class ExceptionReport extends Component {
    state = {  }
    render() { 
        return ( 
            <div> 
                <Counter/>     
            <App/>
            </div>
            
         );
    }
}
 
export default ExceptionReport;
