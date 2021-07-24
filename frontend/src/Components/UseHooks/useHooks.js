import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";

import React, {Component,useEffect, useState, useMemo} from 'react';

const useHooks = () => {
 const [highException, setHighException] = useState([]);
 const [lowException, setLowException] = useState([]);
 const [filtered, setFiltered] = useState([]);
 const [highException_tailayer, setHighExceptionTailayer] = useState([]);
 const [filtered_tailayer, setFilteredTailayer] = useState([]);
 const [filtered_tainbound, setFilteredTainbound] = useState([]);
 const [highException_accounting, setHighExceptionAccounting] = useState([]);
 const [lowException_tailayer, setLowExceptionTailayer] = useState([]);
 const [lowException_accounting, setLowExceptionAccounting] = useState([]);

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
        item.exception_level === "HIGH").length

        const lowException = records.filter(item => item.exception_BusinessLine === user.businessLine && 
        item.exception_Region === user.region && 
        item.exception_level === "LOW").length

        const filtered = records_filter.filter(item => item.business_line === user.businessLine && 
        item.region === user.region).length
        console.log("lowException chart", lowException)

        const highException_tailayer = records.filter(item => item.exception_BusinessLine === user.businessLine && 
        item.exception_Region === user.region && 
        item.exception_level === "HIGH" && item.exception_component === "TAILAYER").length

        const filtered_tailayer = records_filter.filter(item => item.business_line === user.businessLine && 
        item.region === user.region && item.filter_component === "TAILAYER").length

        const filtered_tainbound = records_filter.filter(item => item.business_line === user.businessLine && 
        item.region === user.region && item.filter_component === "TAINBOUND").length

        const highException_accounting = records.filter(item => item.exception_BusinessLine === user.businessLine && 
        item.exception_Region === user.region && 
        item.exception_level === "HIGH" && item.exception_component === "Accounting").length

        const lowException_accounting = records.filter(item => item.exception_BusinessLine === user.businessLine && 
        item.exception_Region === user.region && 
        item.exception_level === "LOW" && item.exception_component === "Accounting").length
        
        const lowException_tailayer = records.filter(item => item.exception_BusinessLine === user.businessLine && 
        item.exception_Region === user.region && 
        item.exception_level === "LOW" && item.exception_component === "TAILAYER").length

        setHighException(highException);
        setLowException(lowException);
        setFiltered(filtered);
        setHighExceptionTailayer(highException_tailayer)
        setFilteredTailayer(filtered_tailayer);
        setFilteredTainbound(filtered_tainbound);
        setHighExceptionAccounting(highException_accounting)
        setLowExceptionAccounting(lowException_accounting)
        setLowExceptionTailayer(lowException_tailayer)

        //setTimeout(() => setLoading(false), 500)
        //console.log(user_records);
      
    };
    doFetch();
    }, []);

return [highException, 
lowException, 
filtered, 
highException_tailayer,
filtered_tailayer,
filtered_tainbound,
highException_accounting,
lowException_accounting,
lowException_tailayer];
};

export default useHooks;