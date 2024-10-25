import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accounts from './components/Accounts';
import Stock from './components/Stock';
import StockReport from './components/StockReport';
import SalesReport from './components/SalesReport'; // Yeni raporu ekleyin
import InventoryReport from './components/InventoryReport'; // Yeni raporu ekleyin

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Ön Muhasebe Programı</h1>
        <Routes>
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/stocks" element={<Stock />} />
          <Route path="/stock-report" element={<StockReport />} />
          <Route path="/sales-report" element={<SalesReport />} /> {/* Yeni raporu ekleyin */}
          <Route path="/inventory-report" element={<InventoryReport />} /> {/* Yeni raporu ekleyin */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
