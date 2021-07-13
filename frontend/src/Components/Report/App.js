import React, { useEffect, useState, useMemo } from 'react';
import {
  Container,
 
} from 'reactstrap';
import TableContainer from '../Table/TableContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SelectColumnFilter,DateRangeColumnFilter } from '../Table/Filter';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
const App = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
      const doFetch = async () => {
      const response = await fetch('http://localhost:8000/getProcessedRecords');
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
              accessor: 'cob_dt',
              id: "date",
              
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
            // {  
            //     Header: 'Region',  
            //     accessor: 'region',
            //     Filter: SelectColumnFilter,
            //     filter: 'equals',
            // },
            // {  
            //     Header: 'BL',  
            //     accessor: 'business_line',
            //     disableSortBy: true,
            //     Filter: SelectColumnFilter,
            //     filter: 'equals',
            // },
    ],
    []
  )

  return (
    

    <Container style={{ marginLeft: "300px" }}>
      
      <TableContainer
        columns={columns}
        data={data}
        
      />
    </Container>
  );
}
export default App;