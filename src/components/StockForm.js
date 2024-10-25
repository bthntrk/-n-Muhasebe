import React, { useState } from 'react';
import axios from 'axios';

const StockForm = ({ addStock }) => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const newStock = { product, quantity: parseInt(quantity), price: parseFloat(price) };
    const res = await axios.post('http://localhost:5001/api/stocks', newStock);
    addStock(res.data);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Ürün Adı</label>
        <input 
          type="text" 
          value={product} 
          onChange={(e) => setProduct(e.target.value)} 
        />
      </div>
      <div>
        <label>Miktar</label>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
        />
      </div>
      <div>
        <label>Fiyat</label>
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
      </div>
      <button type="submit">Stok Ekle</button>
    </form>
  );
};

export default StockForm;
