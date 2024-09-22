import React from 'react';

interface TableHeaderProps {
  addColumn: (title: string, type: 'string' | 'number') => void;
  addRow: () => void;
  filters: { [key: string]: string };
  setFilters: (filters: { [key: string]: string }) => void;
  columns: { title: string; type: string }[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ addColumn, addRow, filters, setFilters, columns }) => {
  const handleAddColumn = () => {
    const title = prompt('Enter column title:');
    const type = prompt('Enter column type (string/number):') as 'string' | 'number';
    if (title && (type === 'string' || type === 'number')) {
      addColumn(title, type);
    }
  };

  return (
    <div className="flex mb-4">
      <button onClick={handleAddColumn} className="bg-blue-500 text-white px-4 py-2 rounded">Add Column</button>
      <button onClick={addRow} className="bg-green-500 text-white px-4 py-2 rounded ml-2">Add Row</button>
      
      {columns.map((col) => (
        <div key={col.title} className="ml-2">
          <input
            type="text"
            placeholder={`Filter ${col.title}`}
            value={filters[col.title] || ''}
            onChange={(e) => setFilters({ ...filters, [col.title]: e.target.value })}
            className="border border-gray-400 p-1 rounded"
          />
        </div>
      ))}
    </div>
  );
};

export default TableHeader;
