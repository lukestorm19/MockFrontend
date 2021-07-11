import React, { useEffect, useState, useMemo } from 'react';
import {
  Container,
 
} from 'reactstrap';
import TableContainer from '../Table/TableContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SelectColumnFilter } from '../Table/Filter';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
const App = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
       const doFetch = async () => {
      const response = await fetch('https://m8xm8i7lyx.api.quickmocker.com/records');
      const body = await response.json();
      const records = body.exception;
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
            accessor: 'exception_id',
           }
           ,{  
            Header: 'Exception Layer',  
            accessor: 'exception_layer' ,
            }
           ,{  
           Header: 'Exception Name',  
           accessor: 'exception_name' ,
           }
           ,{  
           Header: 'Description',  
           accessor: 'exception_desc',
           },
           {  
            Header: 'Type',  
            accessor: 'exception_type',
            },
            {  
              Header: 'Date',  
              accessor: 'cob_dt',
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
    <Container style={{ marginLeft: 200 }}>
      <TableContainer
        columns={columns}
        data={data}
        
      />
    </Container>
  );
}
export default App;