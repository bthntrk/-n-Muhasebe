import React, { useState } from 'react';
import axios from 'axios';

const EditAccount = ({ account, onSave }) => {
  const [name, setName] = useState(account.name);
  const [balance, setBalance] = useState(account.balance);

  const onSubmit = async (e) => {
    e.preventDefault();
    const updatedAccount = { ...account, name, balance: parseFloat(balance) };
    await axios.put(`http://localhost:5001/api/accounts/${account.id}`, updatedAccount);
    onSave(updatedAccount);
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
      <button type="submit">Kaydet</button>
    </form>
  );
};

export default EditAccount;
