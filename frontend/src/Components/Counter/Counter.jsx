import React , {Component, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { Container, Row, Col } from 'reactstrap';
import "./Counter.scss"
import useHooks from '../UseHooks/useHooks.js';

//import Chart from '../charts/Chart';
/*Class to display count of records*/
export default function Counter() {
    // const [highException, setHighException] = useState();
    // const [lowException, setLowException] = useState();

    // const [filtered, setFiltered] = useState();

    // const dispatch = useDispatch();
    // const user = useSelector(selectUser);
    const [loading, setLoading] = useState(true)
    const [highException, lowException, filtered] = useHooks();

    // useEffect(() => {
    // const doFetch = async () => {
    // // const response = await fetch('http://localhost:8000/getProcessedRecords/');      
    // // const body = await response.json();      
    // // const records = body;
    // // const response_filter = await fetch('http://localhost:8000/getFilteredRecords');      
    // // const body_filter = await response_filter.json();      
    // // const records_filter = body_filter;
    // // const highException = records.filter(item => item.exception_BusinessLine === user.businessLine && 
    // // item.exception_Region === user.region && 
    // // item.exception_level === "HIGH" ).length
    // // setHighException(highException);
    // // const lowException = records.filter(item => item.exception_BusinessLine === user.businessLine && 
    // //     item.exception_Region === user.region && 
    // //     item.exception_level === "LOW").length
    // // setLowException(lowException);
    // // console.log("lowexc",lowException);
    // // const filtered = records_filter.filter(item => item.business_line === user.businessLine && 
    // //     item.region === user.region).length
    // // setFiltered(filtered);
    
    
    // };
    // doFetch();
    // }, []);

  
    return (
      <div className = "Main">
        {/*<Container >
        <Row>
          <div className="totalNo">
          <Col className="total">{this.state.record.number_of_records.total_records}</Col> <Col className="totalText">Total Number <br/>of Records</Col>
          </div>
        </Row>
        </Container>*/}
   
          <div className="Filtered">Filtered <div className="filter">{filtered}</div></div>
          <div className="HighException">High Exception <div className="highexception">{highException}</div></div>
          <div className="LowException">Low Exception <div className="lowexception">{lowException}</div></div>
          <div className="Processed">Processed<div className="processed">10</div></div>
     

        
      </div>
    );
    
  
  
    
  
}
