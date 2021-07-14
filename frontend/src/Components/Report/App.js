import React, { useEffect, useState, useMemo } from 'react';
import {  Container, } from 'reactstrap';
import TableContainer from '../Table/TableContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SelectColumnFilter,DateRangeColumnFilter } from '../Table/Filter';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import "./Button.css";

const App = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
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
  }, []);

  


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