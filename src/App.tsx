import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import AddColumn from './pages/addColmn';
import AddRow from './pages/addRow';
import FilterData from './pages/filterData';
import SortData from './pages/sortData';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/add-column" element={<AddColumn/>} />
        <Route path="/add-row" element={<AddRow/>} />
        <Route path="/filter-data" element={<FilterData/>} />
        <Route path="/sort-data" element={<SortData/>} />
      </Routes>
    </Router>
  );
};

export default App;
