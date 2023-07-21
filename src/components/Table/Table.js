import React from 'react';

const Table = ({ columns, data, onRowClick }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} onClick={() => onRowClick(row)}>
            {columns.map((column) => (
              <td key={`${row.id}-${column.key}`}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;