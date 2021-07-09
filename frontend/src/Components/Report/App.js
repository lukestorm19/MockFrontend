import React, { useEffect, useState, useMemo } from 'react';
import {
  Container,
 
} from 'reactstrap';
import TableContainer from '../Table/TableContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SelectColumnFilter } from '../Table/Filter';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
       const doFetch = async () => {
      const response = await fetch('https://m8xm8i7lyx.api.quickmocker.com/records');
      const body = await response.json();
      const records = body.exception;
      console.log(records);
      setData(records);
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
            {  
                Header: 'Region',  
                accessor: 'region',
                Filter: SelectColumnFilter,
                filter: 'equals',
            },
            {  
                Header: 'BL',  
                accessor: 'business line',
                disableSortBy: true,
                Filter: SelectColumnFilter,
                filter: 'equals',
            },
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