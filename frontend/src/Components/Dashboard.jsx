import React, { Component } from 'react';
import Exception from './Exception';
import Header from './Header';
import Filter from './Filter';
class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
              <Header/>
              <Filter/>
              <Exception/> 
            </div>
       
         );
    }
}
 
export default Dashboard;