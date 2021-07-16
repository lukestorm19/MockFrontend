import React, { useEffect, useState, useMemo } from 'react';
import {  Container, } from 'reactstrap';
import TableContainer from '../Table/TableContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SelectColumnFilter,DateFilter } from '../Table/Filter';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import "./Button.css";

const App = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
      const doFetch = async () => {
      const response = await fetch('http://localhost:8000/getProcessedRecords/');
      const response_accounting = await fetch('http://localhost:8000/getAccountingRecords/');
      const body = await response.json();
      const body_accounting = await response_accounting.json();
      const records = body;
      const records_accounting = body_accounting;
      console.log(body);
      console.log(records_accounting);
      const user_records = records.filter(item => item.exception_BusinessLine === user.businessLine && item.exception_Region === user.region)
      console.log(user_records);
      const accounting_records = records_accounting.filter(item => item.exception_BusinessLine === user.businessLine && item.exception_Region === user.region)
      const final_records = user_records.concat(accounting_records);
      console.log(accounting_records)
      console.log(final_records)

      //setData(accounting_records);
      setData(final_records);

    };
    doFetch();
  }, []);

  
  function dateBetweenFilterFn(rows, id, filterValues) {
    let sd = filterValues[0] ? new Date(filterValues[0]) : undefined
    let ed = filterValues[1] ? new Date(filterValues[1]) : undefined

    if (ed || sd) {
      return rows.filter(r => {
        var time = new Date(r.values[id])

        if (ed && sd) {
          return (time >= sd && time <= ed)
        } else if (sd){
          return (time >= sd)
        } else if (ed){
          return (time <= ed)
        }
      })
    } else {
      return rows
    }
  }

  const columns = useMemo(
    () => [
        {  
            Header: 'ID',  
            accessor: 'exception_ID',
           }
           ,{  
            Header: 'Exception Layer',  
            accessor: 'exception_component' ,
            }
           ,{  
           Header: 'Exception Name',  
           accessor: 'exception_name' ,
           }
           ,{  
           Header: 'Description',  
           accessor: 'exception_description',
           },
           {  
            Header: 'Type',  
            accessor: 'exception_level',
            
            },
            {  
              Header: 'Date',  
              accessor: 'exception_COBDT',
              id: "date",
              Filter:DateFilter,
              filter:dateBetweenFilterFn,
              
              
              },
            {  
                Header: 'PC',  
                accessor: 'exception_ProfitCenter',
                Filter: SelectColumnFilter,
                filter: 'equals',
            },
            {  
                Header: 'LE',  
                accessor: 'exception_LegalEntity',
                Filter: SelectColumnFilter,
                filter: 'equals',
            },
    ],
    []
  )
  function refreshPage() {
    // window.location.reload();
    const doFetch = async () => {
      const response = await fetch('http://localhost:8000/getProcessedRecords');
      const body = await response.json();
      const records = body;
      console.log(body);
      const user_records = records.filter(item => item.exception_BusinessLine === user.businessLine && item.exception_Region === user.region)
      console.log(user_records);
      
      setData(user_records);
    };
    doFetch();
  }
  return (   
    <Container style={{ marginLeft: "300px" }}>
      <button onClick={refreshPage}>⟳</button>
      <TableContainer
        columns={columns}
        data={data}
        
      />
    </Container>
  );
}
export default App;