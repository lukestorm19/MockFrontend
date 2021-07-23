import React , {Component, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { Container, Row, Col } from 'reactstrap';

import './TotalCount.scss'
export default function TotalCount() {
    const [count, setCount] = useState();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    useEffect(() => {
    const doFetch = async () => {
    const response = await fetch('http://localhost:8000/getProcessedRecords/');      
    const body = await response.json();      
    const records = body;
    const response_filter = await fetch('http://localhost:8000/getFilteredRecords');      
    const body_filter = await response_filter.json();      
    const records_filter = body_filter;
    const highException = records.filter(item => item.exception_BusinessLine === user.businessLine && 
    item.exception_Region === user.region && 
    item.exception_level === "HIGH" ).length
    const lowException = records.filter(item => item.exception_BusinessLine === user.businessLine && 
    item.exception_level === "LOW" ).length
    const filtered = records_filter.filter(item => item.business_line === user.businessLine && 
        item.region === user.region).length
    const processed = 10;
    const count = highException + lowException + filtered + processed;
    setCount(count);
    };
    doFetch();
    }, []);

    return (
        <Row>
        <div className="totalNo">
          <Col className="total">{count}</Col> <Col className="totalText">Total Number <br/>of Records</Col>
        </div>
        </Row>
    )
}
