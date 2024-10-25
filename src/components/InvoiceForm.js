import React, { useState } from 'react';
import axios from 'axios';

const InvoiceForm = ({ addInvoice }) => {
  const [customer, setCustomer] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const newInvoice = { customer, amount: parseFloat(amount) };
    const res = await axios.post('http://localhost:5001/api/invoices', newInvoice);
    addInvoice(res.data);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Müşteri Adı</label>
        <input 
          type="text" 
          value={customer} 
          onChange={(e) => setCustomer(e.target.value)} 
        />
      </div>
      <div>
        <label>Tutar</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
      </div>
      <button type="submit">Fatura Ekle</button>
    </form>
  );
};

export default InvoiceForm;

