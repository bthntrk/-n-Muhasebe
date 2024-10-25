import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const StockReport = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      const res = await axios.get('http://localhost:5001/api/stocks');
      setStocks(res.data);
    };

    fetchStocks();
  }, []);

  return (
    <div>
      <h2>Stok Raporu</h2>
      <BarChart width={600} height={300} data={stocks}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="product" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="quantity" fill="#8884d8" />
        <Bar dataKey="price" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default StockReport;
