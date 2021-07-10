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
import { SelectColumnFilter } from '../Table/Filter';
import Counter from '../Counter/Counter';

const FilterReport = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
       const doFetch = async () => {
      const response = await fetch('https://m8xm8i7lyx.api.quickmocker.com/records');
      const body = await response.json();
      const records = body.filter;
      console.log(records);
      setData(records);
    };
    doFetch();
  }, []);

  const columns = useMemo(
    () => [
        {  
            Header: 'ID',  
            accessor: 'filter_id',
           }
           ,{  
            Header: 'Filter Layer',  
            accessor: 'filter_layer' ,
            }
           ,{  
           Header: 'Filter Description',  
           accessor: 'filter_desc' ,
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
    <div>
    <Counter/>
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