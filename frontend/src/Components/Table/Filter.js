import React,{useState, useEffect} from 'react';
import { Input, CustomInput } from 'reactstrap';
import Datepicker from './Datepicker';
export const Filter = ({ column }) => {
  return (
    <div style={{ marginTop: 5 }}>
      {column.canFilter && column.render('Filter')}
    </div>
  );
};

export function DateFilter({
  column: {
    filterValue = [],
    preFilteredRows,
    setFilter,
    id
  }})
{
  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? new Date(preFilteredRows[0].values[id]) : new Date(0)
    let max = preFilteredRows.length ? new Date(preFilteredRows[0].values[id]) : new Date(0)

    preFilteredRows.forEach(row => {
      const rowDate = new Date(row.values[id])

      min = rowDate <= min ? rowDate : min
      max = rowDate >= max ? rowDate : max
    })

    return [min, max]
  }, [id, preFilteredRows])

  return (
    <div>
      <input
        min={min.toISOString().slice(0, 10)}
        onChange={e => {
          const val = e.target.value
          setFilter((old = []) => [val ? val : undefined, old[1]])
        }}
        type="date"
        value={filterValue[0] || ''}
      />
      {' to '}
      <input
        max={max.toISOString().slice(0, 10)}
        onChange={e => {
          const val = e.target.value
          setFilter((old = []) => [old[0], val ? val.concat('T23:59:59.999Z') : undefined])
        }}
        type="date"
        value={filterValue[1]?.slice(0, 10) || ''}
      />
    </div>
  )
}

export const DefaultColumnFilter = ({
  column: {
    filterValue,
    setFilter,
    preFilteredRows: { length },
  },
}) => {
  return (
    <Input
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`search (${length}) ...`}
    />
  );
};

export const SelectColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}) => {
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  return (
    <CustomInput
      id='custom-select'
      type='select'
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value=''>All</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </CustomInput>
  );
};