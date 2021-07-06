import React, { Component } from 'react';
import Exception from './Exception';
import Header from './Header';
import Filter from './Filter';
import Chart from './charts/Chart';
import Counter from './Counter/Counter'
class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
              <Header/>
              
              <Counter/>
              <Chart/>
            </div>
       
         );
    }
}
 
export default Dashboard;