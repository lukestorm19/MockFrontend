import React, { Fragment, useMemo } from 'react';
import {
  useTable,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination,
} from 'react-table';
import { Table, Row, Col, Button, Input, CustomInput } from 'reactstrap';
import { Filter, DefaultColumnFilter, DateFilter } from './Filter';
import "./Table.css"

const highStyle = {
  backgroundColor: "#CE1212",
  borderRadius: "10px",
  color:"#FFFFFF",
  fontWeight: "bold",
  lineHeight: "14px",
  letterSpacing: "0.5px",
  paddingLeft:"10px",
  paddingRight:"10px",
};
const lowStyle = {
  backgroundColor: "#FFC947",
  borderRadius: "12px",
  color:"#FFFFFF",
  fontWeight: "bold",
  lineHeight: "14px",
  letterSpacing: "0.5px",
  paddingLeft:"10px",
  paddingRight:"10px",
};

const TableContainer = ({ columns, data, renderRowSubComponent }) => {

  const filterTypes = React.useMemo(() => ({
    dateFilter: (rows, id, filterValue) => {
        return rows = rows.filter(row => {
            return new Date(row.values.date) >= filterValue[0] && new Date(row.values.date) <= filterValue[1];
        });
    },
}),
    []
)

  const {
    getTableProps,
    getTableBodyProps,
    getCellProps,
    headerGroups,
    page,
    prepareRow,
    visibleColumns,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setAllFilters,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
  );

  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : '';
  };

  const onChangeInSelect = (event) => {
    setPageSize(Number(event.target.value));
  };

  const onChangeInInput = (event) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(page);
  };
  const { rows } = useTable({ columns, data })
  console.log(rows.length)
  return (
    <div classNmae = "divStyle">
      {/*<button onClick={() => setAllFilters([])}>Reset</button>*/}
    <Fragment>
      <Table className="tableStyle" bordered hover {...getTableProps()}>
        <thead className="heading">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  <div {...column.getSortByToggleProps()}>
                    {column.render('Header')}
                    {generateSortingIndicator(column)}
                  </div>
                  <Filter column={column} />
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <Fragment key={row.getRowProps().key}>
                <tr>
                  {row.cells.map((cell) => {
                    if (cell.value==="HIGH"){
                      return (                      
                      <td{...cell.getCellProps()}><span  style ={highStyle}>{cell.render('Cell')}</span></td>
                    );
                    }
                    else if (cell.value==="LOW"){
                      return (                      
                      <td {...cell.getCellProps()}><span style ={lowStyle}>{cell.render('Cell')}</span></td>
                    );
                    }
                    else
                    return (                      
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
                {row.isExpanded && (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {renderRowSubComponent(row)}
                    </td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
        
      </Table>

      <Row style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
        <Col md={3}>
          <Button
            style={{backgroundColor:"#3C5186"}}
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {'<<'}
          </Button>
          <Button
            style={{backgroundColor:"#3C5186"}}
            onClick={previousPage}
            disabled={!canPreviousPage}
          >
            {'<'}
          </Button>
        </Col>
        <Col md={2} style={{ marginTop: 7 }}>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </Col>
        <Col md={2}>
          <Input
            type='number'
            min={1}
            style={{ width: 70 }}
            max={pageOptions.length}
            defaultValue={pageIndex + 1}
            onChange={onChangeInInput}
          />
        </Col>
        <Col md={2}>
          <CustomInput
            type='select'
            value={pageSize}
            onChange={onChangeInSelect}
        >
    
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </CustomInput>
        </Col>
        <Col md={3}>
          <Button style={{backgroundColor:"#3C5186"}} onClick={nextPage} disabled={!canNextPage}>
            {'>'}
          </Button>
          <Button
            style={{backgroundColor:"#3C5186"}}
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </Button>
        </Col>
      </Row>
    </Fragment>
    </div>
    
  );
};

export default TableContainer;