import React, { useState } from 'react';
import TableHeader from './Tablehader';
import TableRow from './table';

type ColumnType = 'string' | 'number';

interface Column {
  title: string;
  type: ColumnType;
}

const DynamicTable: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>([]);
  const [rows, setRows] = useState<Array<{ [key: string]: string[] | number[] }>>([]);
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  
  const addColumn = (title: string, type: ColumnType) => {
    setColumns([...columns, { title, type }]);
  
    // Update existing rows with a default value for the new column
    const updatedRows = rows.map(row => ({
      ...row,
      [title]: type === 'string' ? [] : [0], // Initialize with [] for strings or [0] for numbers
    }));
    
    setRows(updatedRows);
  };
  
  const addRow = () => {
    const newRow = columns.reduce((acc, col) => {
      acc[col.title] = col.type === 'string' ? [] : [0]; // Initialize with [] for strings and [0] for numbers
      return acc;
    }, {} as { [key: string]: string[] | number[] });
    
    setRows([...rows, newRow]);
  };

  // The handleCellChange function that updates the specific cell's value
  const handleCellChange = (rowIndex: number, columnTitle: string, newValue: string[] | number[]) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][columnTitle] = newValue; // Update the row with the new value (either string[] or number[])
    setRows(updatedRows);
  };
  

  const filteredRows = rows.filter(row => {
    return Object.keys(filters).every(columnTitle => {
      const filterValue = filters[columnTitle].toLowerCase();
  
      const cellValue = row[columnTitle];
      if (Array.isArray(cellValue)) {
        // Check if the filter matches any value in the array
        const cellString = cellValue.map(String).join(', ').toLowerCase(); // Convert numbers to strings for comparison
        return cellString.includes(filterValue);
      }
  
      return false;
    });
  });
  

  return (
    <div className="p-4">
      <TableHeader addColumn={addColumn} addRow={addRow} filters={filters} setFilters={setFilters} columns={columns} />
      <table className="min-w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.title} className="border border-gray-300 p-2">{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              row={row}
              columns={columns}
              rowIndex={rowIndex}
              onCellChange={handleCellChange} // Pass handleCellChange to TableRow
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
