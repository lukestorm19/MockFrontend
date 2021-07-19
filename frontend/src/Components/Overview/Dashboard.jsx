import React from 'react'
import Counter from '../Counter/Counter'
import Charts from '../Charts/Charts'
import Dropdown from '../DropDown/Dropdown'
import Bars from '../Charts/Bars'
import './Dashboard.scss'
import Cobdt from '../Cobdt/Cobdt'
import {Container, Col, Row} from 'reactstrap';
export default function Dashboard() {
    return (
        <div className="Dashboard">
         <div className = "Cob">
           <Cobdt/>
        </div>
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
