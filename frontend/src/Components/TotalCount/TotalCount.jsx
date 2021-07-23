import React , {Component, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";

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
    
    }, []);

    return (
        <div>
            
        </div>
    )
}
