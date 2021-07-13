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
import { SelectColumnFilter,DateRangeColumnFilter } from '../Table/Filter';
import Counter from '../Counter/Counter';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import Dropdown from '../DropDown/Dropdown';
const FilterReport = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
       const doFetch = async () => {
      const response = await fetch('http://localhost:8000/getFilteredRecords');
      const body = await response.json();
      const records = body;
      const user_records = records.filter(item => item.business_line === user.businessLine && item.region === user.region)
      console.log(user_records);
      
      setData(user_records);
    };
    doFetch();
  }, []);
 
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
              
              },
            {  
                Header: 'PC',  
                accessor: 'profit_center',
                Filter: SelectColumnFilter,
                filter: 'equals',
            },
            // {  
            //     Header: 'LE',  
            //     accessor: 'legal_entity',
            //     Filter: SelectColumnFilter,
            //     filter: 'equals',
            // },
            // {  
            //     Header: 'Region',  
            //     accessor: 'region',
            //     Filter: SelectColumnFilter,
            //     filter: 'equals',
            // },
           
    ],
    []
  )
  const style={
    border:10,
  };
  return (
    <div>
    <Dropdown/>
    <Container style={{marginLeft: 300}}>
      <TableContainer
        columns={columns}
        data={data}
        
      />
    </Container>
    </div>
    
  );
}
export default FilterReport;