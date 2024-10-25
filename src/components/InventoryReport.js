import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const InventoryReport = () => {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    const fetchInventoryData = async () => {
      const res = await axios.get('http://localhost:5001/api/inventory');
      setInventoryData(res.data);
    };

    fetchInventoryData();
  }, []);

  return (
    <div>
      <h2>Envanter Seviyeleri</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={inventoryData}
          cx={200}
          cy={200}
          labelLine={false}
          label
          outerRadius={80}
          fill="#8884d8"
          dataKey="quantity"
        >
          {inventoryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default InventoryReport;
