import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AccountForm from './AccountForm';
import EditAccount from './EditAccount';

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [editAccount, setEditAccount] = useState(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      const res = await axios.get('http://localhost:5000/api/accounts');
      if (Array.isArray(res.data)) {
        setAccounts(res.data);
      } else {
        console.error('Fetched data is not an array:', res.data);
      }
    };

    fetchAccounts();
  }, []);

  const addAccount = (account) => {
    setAccounts([...accounts, account]);
  };

  const updateAccount = (updatedAccount) => {
    setAccounts(accounts.map(account => account.id === updatedAccount.id ? updatedAccount : account));
    setEditAccount(null);
  };

  const deleteAccount = async (id) => {
    await axios.delete(`http://localhost:5000/api/accounts/${id}`);
    setAccounts(accounts.filter(account => account.id !== id));
  };

  return (
    <div>
      <h2>Cari Hesaplar</h2>
      <AccountForm addAccount={addAccount} />
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            {account.name} - Bakiye: {account.balance} TL
            <button onClick={() => setEditAccount(account)}>Düzenle</button>
            <button onClick={() => deleteAccount(account.id)}>Sil</button>
          </li>
        ))}
      </ul>
      {editAccount && <EditAccount account={editAccount} onSave={updateAccount} />}
    </div>
  );
};

export default Accounts;
