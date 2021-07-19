import React, { useEffect, useState, useMemo } from 'react';
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import TableContainer from '../Table/TableContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SelectColumnFilter,DateFilter } from '../Table/Filter';
import Counter from '../Counter/Counter';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import Dropdown from '../DropDown/Dropdown';
import exportFromJSON from 'export-from-json'
const fileName = 'download'  
const exportType = 'xls'

const FilterReport = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
       const doFetch = async () => {
      const response = await fetch('http://localhost:8000/getFilteredRecords');
      const body = await response.json();
      const records = body;
      if (records.filter(item => item.business_line === user.businessLine && item.region === user.region)){
        const user_records = records.filter(item => item.business_line === user.businessLine && item.region === user.region)
        setData(user_records);
        console.log(user_records);
      }
      if (records.filter(item => item.business_line === 'NA' && item.region === 'NA')){
        const user_records = records.filter(item => item.filter_component === 'TAINBOUND')
        setData(user_records);
        console.log(user_records);
      }
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
            accessor: 'filter_ID',
           }
           
           ,{  
            Header: 'Filter Layer',  
            accessor: 'filter_component' ,
            }
           ,{  
           Header: 'Filter Description',  
           accessor: 'filter_description' ,
           }
           ,{  
              Header: 'Date',  
              accessor: 'cob_dt',
              Filter:DateFilter,
              filter:dateBetweenFilterFn,
              },
            {  
                Header: 'PC',  
                accessor: 'profit_center',
                Filter: SelectColumnFilter,
                filter: 'equals',
            },
            {  
              Header: 'LE',  
              accessor: 'legal_entity',
              Filter: SelectColumnFilter,
              filter: 'equals',
          },
           
    ],
    []
  )
  const style={
    border:10,
  };

  function refreshPage() {
    // window.location.reload();
    const doFetch = async () => {
      const response = await fetch('http://localhost:8000/getFilteredRecords');
      const body = await response.json();
      const records = body;
      const user_records = records.filter(item => item.business_line === user.businessLine && item.region === user.region)
      console.log(user_records);      
      setData(user_records);
    };
    doFetch();
  }
  const ExportToExcel = () => {  
    exportFromJSON({ data, fileName, exportType })  
  } 
  return (
    <div style={{marginTop:100, marginLeft: "30px"}}>
    <Dropdown />
    <Container style={{marginLeft: 300}}>
    <button className="btn1" onClick={refreshPage}>⟳</button>
    <button type="button" className="btn2" onClick={ExportToExcel}>Export To Excel</button>
      <TableContainer
        columns={columns}
        data={data}
        
      />
    </Container>
    </div>
    
  );
}
export default FilterReport;