import React , {Component, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { Container, Row, Col } from 'reactstrap';
import useHooks from '../UseHooks/useHooks.js';

import './TotalCount.scss'
export default function TotalCount() {
    // const [count, setCount] = useState();
    const [highException, lowException, filtered] = useHooks();

    useEffect(() => {
    const doFetch = async () => {
    // const response = await fetch('http://localhost:8000/getProcessedRecords/');      
    // const body = await response.json();      
    // const records = body;
    // const response_filter = await fetch('http://localhost:8000/getFilteredRecords');      
    // const body_filter = await response_filter.json();      
    // const records_filter = body_filter;
    // const highException = records.filter(item => item.exception_BusinessLine === user.businessLine && 
    // item.exception_Region === user.region && 
    // item.exception_level === "HIGH" ).length
    // const lowException = records.filter(item => item.exception_BusinessLine === user.businessLine && 
    //     item.exception_Region === user.region && 
    //     item.exception_level === "LOW").length
    // console.log("total low",lowException);
    // const filtered = records_filter.filter(item => item.business_line === user.businessLine && 
    //     item.region === user.region).length
    // const processed = 10;
    
    // setCount(count);
    };
    doFetch();
    }, []);
    const count = highException + lowException + filtered + 10;
    return (
        <Row>
        <div className="totalNo">
          <Col className="total">{count}</Col> <Col className="totalText">Total Records</Col>
        </div>
        </Row>
    )
}
