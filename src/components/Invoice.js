import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InvoiceForm from './InvoiceForm';

const Invoice = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      const res = await axios.get('http://localhost:5001/api/invoices');
      setInvoices(res.data);
    };

    fetchInvoices();
  }, []);

  const addInvoice = (invoice) => {
    setInvoices([...invoices, invoice]);
  };

  return (
    <div>
      <h2>Fatura Yönetimi</h2>
      <InvoiceForm addInvoice={addInvoice} />
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            {invoice.customer} - {invoice.amount} TL - {new Date(invoice.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Invoice;
