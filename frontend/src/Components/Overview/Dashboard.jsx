import React from 'react'
import Counter from '../Counter/Counter'
import Charts from '../Charts/Charts'
import Dropdown from '../DropDown/Dropdown'
import Bars from '../Charts/Bars'
import './Dashboard.scss'
import Cobdt from '../Cobdt/Cobdt';
import TotalCount from '../TotalCount/TotalCount'
import {Container, Col, Row} from 'reactstrap';
export default function Dashboard() {
  
    return (
        <main className="Dashboard">
        <div className = "TotalCount">
            <TotalCount/>
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
         
         
        
        
        </main>
        
        
    )
}
