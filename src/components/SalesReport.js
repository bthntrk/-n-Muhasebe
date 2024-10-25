import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SalesReport = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchSalesData = async () => {
      const res = await axios.get('http://localhost:5001/api/sales');
      setSalesData(res.data);
    };

    fetchSalesData();
  }, []);

  return (
    <div>
      <h2>Aylık Satış Raporu</h2>
      <LineChart width={600} height={300} data={salesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default SalesReport;
