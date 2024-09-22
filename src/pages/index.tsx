import React from 'react';
import DynamicTable from '../components/dynamicTable';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mt-4">Dynamic Table</h1>
      <DynamicTable />
    </div>
  );
};

export default Home;
