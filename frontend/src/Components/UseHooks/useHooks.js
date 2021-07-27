import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";

import React, {Component,useEffect, useState, useMemo} from 'react';

const useHooks = () => {
 const [highException, setHighException] = useState([]);
 const [lowException, setLowException] = useState([]);
 const [filtered, setFiltered] = useState([]);
 const [filteredTailayer, setFilteredTailayer] = useState([]);
 const [filteredTainbound, setFilteredTainbound] = useState([]);
 const [highExceptionTailayer, setHighExceptionTailayer] = useState([]);
  const [lowExceptionTailayer, setLowExceptionTailayer] = useState([]);
  const [highExceptionAccounting, setHighExceptionAccounting] = useState([]);
 const [lowExceptionAccounting, setLowExceptionAccounting] = useState([]);



 const dispatch = useDispatch();
 const user = useSelector(selectUser);

   useEffect(() => {
      const doFetch = async () => {
      
      const response = await fetch(`http://localhost:8000/getCacheData/bl=${user.businessLine}/region=${user.region}`);      
      const body = await response.json();      
      const records = body;
      console.log("new exception",records);

      const response_filter = await fetch(`http://127.0.0.1:8000/getFilterCacheData/bl=${user.businessLine}/region=${user.region}`);      
      const body_filter = await response_filter.json();      
      const records_filter = body_filter;
      console.log("new filter", records_filter);

        const highException = records.filter(item => item.exception_level.toUpperCase() === "HIGH").length
       
        const lowException = records.filter(item => item.exception_level.toUpperCase() === "LOW").length

        const filtered = records_filter.length
        
        const filteredTailayer = records_filter.filter(item => item.filter_component === "TAILAYER").length

        const filteredTainbound = records_filter.filter(item => item.filter_component === "TAINBOUND").length

        const highExceptionTailayer = records.filter(item => 
        item.exception_component === "TAILAYER"  && item.exception_level.toUpperCase() === "HIGH" ).length
        
        const lowExceptionTailayer = records.filter(item => 
        item.exception_component === "TAILAYER" &&  item.exception_level.toUpperCase() === "LOW" ).length
        
        const highExceptionAccounting = records.filter(item => 
        item.exception_component === "Accounting" && item.exception_level.toUpperCase() === "HIGH"  ).length
        console.log(highExceptionAccounting);
        const lowExceptionAccounting = records.filter(item => 
        item.exception_component === "Accounting" &&  item.exception_level.toUpperCase() === "LOW" ).length
        // console.log("taibound filter",filtered_tainbound)

        

        
        
        

        setHighException(highException);
        setLowException(lowException);
        setFiltered(filtered);
        setFilteredTailayer(filteredTailayer);
        setFilteredTainbound(filteredTainbound);
        setHighExceptionTailayer(highExceptionTailayer);
        setLowExceptionTailayer(lowExceptionTailayer);
        setHighExceptionAccounting(highExceptionAccounting);
        setLowExceptionAccounting(lowExceptionAccounting);
        

        //setTimeout(() => setLoading(false), 500)
        //console.log(user_records);
      
    };
    doFetch();
    }, []);
console.log(
filteredTailayer,
filteredTainbound,
highExceptionTailayer,
lowExceptionTailayer,
highExceptionAccounting,
lowExceptionAccounting);
return [highException, 
lowException, 
filtered, 
filteredTailayer,
filteredTainbound,
highExceptionTailayer,
lowExceptionTailayer,
highExceptionAccounting,
lowExceptionAccounting];
};

export default useHooks;