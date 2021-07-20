import React, { useEffect, useState, useMemo } from 'react';
import {  Container, } from 'reactstrap';
import TableContainer from '../Table/TableContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SelectColumnFilter,DateFilter } from '../Table/Filter';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import "./Button.css";
import exportFromJSON from 'export-from-json'
const fileName = 'download'  
const exportType = 'xls' 

const App = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
      const doFetch = async () => {
      const response = await fetch('http://localhost:8000/getProcessedRecords/');      
      const body = await response.json();      
      const records = body;
      if (records.filter(item => item.business_line === user.businessLine && item.region === user.region)){
        const user_records = records.filter(item => item.business_line === user.businessLine && item.region === user.region)
        setData(user_records);
        console.log(user_records);
      }
      if (records.filter(item => item.business_line === 'ALL' && item.region === 'ALL')){
        const user_records = records;
        setData(user_records);
        console.log(user_records);
      }
    };
    doFetch();
  }, []);
  // function getData(sd,ed) {
  //   const doFetch = async () => {
  //     const response = await fetch('https://mocki.io/v1/cd05b8fa-c279-4cce-b63f-efdc5d12b7cf');
  //     const body = await response.json();
  //     const records = body;
  //     const user_records = records.filter(item => item.exception_BusinessLine === user.businessLine 
  //     && item.exception_Region === user.region && item.exception_COBDT>=sd && item.exception_COBDT<=ed)    
  //     console.log(user_records)
  //     setData(user_records);
  //   };
  //   doFetch();
  // }

  
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
  const ExportToExcel = () => {  
    exportFromJSON({ data, fileName, exportType })  
  } 
  return (   
    
    <Container style={{ marginLeft: "330px" }}>
    <button className="btn1" onClick={refreshPage}>⟳</button>
    <button type="button" className="btn2" onClick={ExportToExcel}>Export To Excel</button>  
      <TableContainer
        columns={columns}
        data={data}
        
      />
    </Container>
    
  );
}
export default App;
