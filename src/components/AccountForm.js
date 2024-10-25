import React, { useState } from 'react';
import axios from 'axios';

const AccountForm = ({ addAccount }) => {
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const newAccount = { name, balance: parseFloat(balance) };
    const res = await axios.post('http://localhost:5000/api/accounts', newAccount);
    addAccount(res.data);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Hesap Adı</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <label>Bakiye</label>
        <input 
          type="number" 
          value={balance} 
          onChange={(e) => setBalance(e.target.value)} 
        />
      </div>
      <button type="submit">Hesap Ekle</button>
    </form>
  );
};

export default AccountForm;
