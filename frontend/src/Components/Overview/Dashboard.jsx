import React from 'react'
import Counter from '../Counter/Counter'
import Charts from '../Charts/Charts'
import Dropdown from '../DropDown/Dropdown'
import Bars from '../Charts/Bars'
import './Dashboard.scss'
//import LineChart from '../Charts/LineChart'
import {Container, Col, Row} from 'reactstrap';
export default function Dashboard() {
    return (
        <div className="Dashboard">
         {/*<div className = "Line">
           <LineChart/>
        </div>*/}
           <div className = "Bar">
            <Bars/>
          </div>
          <div className = "Pie">
            <Charts/>
          </div>
          <div className = "Counter">
            <Counter/>  
          </div>
         
         
        
        
        </div>
        
        
    )
}
