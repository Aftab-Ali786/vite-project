import React from 'react';

interface TableRowProps {
  row: { [key: string]: string[] | number[] };
  columns: { title: string; type: string }[];
  onCellChange: (rowIndex: number, columnTitle: string, newValue: string[] | number[]) => void;
  rowIndex: number;
}

const TableRow: React.FC<TableRowProps> = ({ row, columns, onCellChange, rowIndex }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, columnTitle: string, columnType: string) => {
    let newValue: string[] | number[] = [];
    
    if (columnType === 'string') {
      newValue = e.target.value.split(',').map(val => val.trim()); // Handle string array input
    } else if (columnType === 'number') {
      newValue = e.target.value.split(',').map(val => Number(val.trim())); // Convert to number array
    }

    onCellChange(rowIndex, columnTitle, newValue);
  };

  return (
    <tr>
      {columns.map((col) => (
        <td key={col.title} className="border border-gray-300 p-2">
          {col.type === 'string' ? (
            <input
              type="text"
              value={(row[col.title] as string[]).join(', ')} // Display the array as a comma-separated string
              onChange={(e) => handleInputChange(e, col.title, col.type)} // Add the column type to the handler
              className="border border-gray-400 p-1 rounded w-full"
            />
          ) : (
            <input
              type="text"
              value={(row[col.title] as number[]).join(', ')} // Display the number array as comma-separated string
              onChange={(e) => handleInputChange(e, col.title, col.type)} // Handle number array input
              className="border border-gray-400 p-1 rounded w-full"
            />
          )}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
