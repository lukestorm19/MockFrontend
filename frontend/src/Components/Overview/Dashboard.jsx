import React from 'react'
import Counter from '../Counter/Counter'
import Charts from '../Charts/Charts'
import Dropdown from '../DropDown/Dropdown'
import Bars from '../Charts/Bars'

import {Container, Col, Row} from 'reactstrap';
export default function Dashboard() {
    return (
        <div className="dashboard" style={{height:"100%"},{width:"100%"}}>
         <Charts/>
         <Counter/>  
         <Bars/>
        
         
        
        
        </div>
        
        
    )
}
