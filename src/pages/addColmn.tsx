import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddColumn: React.FC = () => {
  const navigate = useNavigate();

   return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold mt-4">Add column</h2>
      <p>This feature is already included in the main table page. Go back to <button onClick={() => navigate('/')} className="text-blue-500">Home</button>.</p>
    </div>
  );
  
};

export default AddColumn;
