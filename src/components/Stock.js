// src/components/Stock.js
import React, { useState } from 'react';

const Stock = () => {
  const [stocks, setStocks] = useState([
    { id: 1, product: 'Kalem', quantity: 100, price: 2 }
  ]);

  const addStock = () => {
    const newStock = { id: Date.now(), product: 'Yeni Ürün', quantity: 50, price: 10 };
    setStocks([...stocks, newStock]);
  };

  return (
    <div>
      <h2>Stok Yönetimi</h2>
      <button onClick={addStock}>Yeni Stok Ekle</button>
      <ul>
        {stocks.map(stock => (
          <li key={stock.id}>
            {stock.product} - {stock.quantity} Adet - {stock.price} TL
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stock;
