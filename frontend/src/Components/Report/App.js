import React, { useEffect, useState, useMemo } from 'react';
import {  Container, } from 'reactstrap';
import TableContainer from '../Table/TableContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SelectColumnFilter,DateFilter } from '../Table/Filter';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import "./Button.scss";
import exportFromJSON from 'export-from-json'
import DateRangeFilter from '../DateFilter/DateRangeFilter'
const fileName = 'download'  
const exportType = 'xls' 

const App = () => {
  const [data, setData] = useState([]);
  /*
  const [date, setDate] = useState({
    sd: new Date(),
    ed: new Date().toLocaleDateString(),
  });*/
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
      const doFetch = async () => {
      const response = await fetch('http://localhost:8000/getProcessedRecords/');      
      const body = await response.json();      
      const records = body;
      if (records.filter(item => item.exception_BusinessLine === user.businessLine && item.exception_Region === user.region)){
        const user_records = records.filter(item => item.exception_BusinessLine === user.businessLine && item.exception_Region === user.region)
        setData(user_records);
        console.log(user_records);
      }/*
      if (records.filter(item => item.business_line === 'ALL' && item.region === 'ALL')){
        const user_records = records;
        setData(user_records);
        console.log(user_records);
      }*/
    };
    doFetch();
  }, []);

/*
  function getData(sd,ed){
    const doFetch = async () => {
      console.log(sd,ed)
      const response = await fetch('https://mocki.io/v1/ce62db04-c3ee-43e3-b410-b36c180149b4');
      const body = await response.json();
      const records = body;
      const user_records = records.filter(item => item.exception_BusinessLine === user.businessLine
      && item.exception_Region === user.region
      && new Date(item.exception_COBDT)>=new Date(sd) && new Date(item.exception_COBDT)<=new Date(ed))
        console.log(user_records);
         setData(user_records);  
    };
    doFetch();   
  }

  function handleChange(event){
    const { value, name } = event.target;
    setDate(prevValue => {
    if (name === "sd") {
    return {
     sd : value,
     ed : prevValue.ed
    };
    }
    else if (name === "ed") {
    return {
      sd: prevValue.sd,
      ed: value
    };
  }
  });
  getData(date.sd,date.ed);
}   
*/
  
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
    
    {/*
      <div style={{paddingBottom:"0px"}}>
        <input style={{width:"150px",marginTop:"40px",marginRight:"10px"}}
          name="sd"
          type="date"
          onChange={handleChange}
          value={date.sd}
        />    
        
        <input style={{width:"150px",marginTop:"40px"}}
          name="ed"
          type="date"
          onChange={handleChange}
          value={date.ed}
        /> 
          
      </div>*/}
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
