import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'; // Import Outlet

import Dashboard from './Components/Dashboard';
import Inventory from './Components/Inventory';
import Sales from './Components/Sales';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} /> {/* Use index for the default child route */}
          <Route path="inventory" element={<Inventory />} />
          <Route path="sales" element={<Sales />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
