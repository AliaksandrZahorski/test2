import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRowColumn,
  TableRow
} from 'material-ui/Table';

const CustomTable = ({ data, columns }) => {
    // console.log(columns.map(({dataKey,label}) => dataKey))
    // console.log(data.map(item => columns.map(({dataKey, cellRenderer}) =>
    //  defaultCellRenderer({item,dataKey}))))
  const defaultCellRenderer = ({ item, dataKey }) => item[dataKey];

  const clickHandler = property => {
    console.log(property);
    // this.props.onRequestSort(event, property)
  };

  return (
    <Table
      onCellClick={(event) => (console.log('dataKey'))}

    >
      <TableHeader displaySelectAll={false} adjustForCheckbox={false} selectable={false}>
        <TableRow onCellClick={(event) => (clickHandler(event.target.id))}>
          {columns.map(({ dataKey, label }, id) =>
            <TableHeaderColumn key={dataKey} id={id} style={{ fontSize: '1em' }}>
              {label}
            </TableHeaderColumn>
          )}
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} stripedRows>
        {data.map((item, index) =>
          <TableRow key={index} >
            {columns.map(({ dataKey, cellRenderer }) =>
              <TableRowColumn key={dataKey} style={{ fontSize: '1em' }}>
                {(cellRenderer || defaultCellRenderer)({ item, dataKey })}
              </TableRowColumn>
            )}
          </TableRow>)}
      </TableBody>
    </Table>
  );
};

export default CustomTable;
