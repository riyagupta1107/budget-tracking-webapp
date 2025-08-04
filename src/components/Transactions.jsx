import React, { useState, useEffect } from 'react';
import AddTransaction from './AddTransaction';

function Transactions({ userId, onTotalsUpdate }) {
  const storageKey = `transactions_${userId}`;
  const [transactions, setTransactions] = useState(() => {

    // if localStorage has saved transactions, it parses and sets them as state.
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      return JSON.parse(saved);
    } else {
      // Otherwise, it starts with an empty list.
      return [];

    }
  });
  // Controls visibility of the Add Transaction modal.
  const [showModal, setShowModal] = useState(false);

  // Update totals for header
  const updateTotals = (txList) => {
    const income = txList.filter(tx => tx.type === 'income')
                         .reduce((sum, tx) => sum + tx.amount, 0);
    const expense = txList.filter(tx => tx.type === 'expense')
                          .reduce((sum, tx) => sum + tx.amount, 0);
    onTotalsUpdate({ income, expense });
  };

  // Load saved transactions on mount
  // useEffect(() => {
  //   const saved = localStorage.getItem('transactions');
  //   if (saved) {
  //     const parsed = JSON.parse(saved);
  //     setTransactions(parsed);
  //     updateTotals(parsed);
  //   }
  // }, []);

  // Save to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(transactions));
    updateTotals(transactions);
  }, [transactions]);

  const addTransaction = (newTx) => {
    const transWithId = {...newTx, id: Date.now()};
    // const updated = [...transactions, newTx];
    setTransactions([...transactions, transWithId]);
    // updateTotals(updated);
  };

  return (
    <div className='text-customDarkText pb-24 font-inter'>
      <div className='p-6 font-inter'>
        <p className='font-semibold text-lg'>Transaction History</p>
      </div>

      <div className='px-6'>
        {transactions.length === 0 ? (
          <p className='text-gray-400 italic'>No transactions yet.</p>
        ) : (
          <ul className='space-y-2'>
            {transactions.map((tx) => (
              <li key={tx.id}className='bg-white shadow p-3 rounded-md'>
                <div className='flex justify-between'>
                  <div>
                    <p className='font-semibold'>{tx.title}</p>
                    <p className='text-sm text-gray-500'>{tx.date}</p>
                  </div>
                  <p className={`font-semibold ${tx.type === 'income' ? 'text-green-600' : 'text-red-500'}`}>
                    {tx.type === 'income' ? '+' : '-'}${tx.amount.toFixed(2)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        className='fixed bottom-6 right-6 bg-greenCustom text-customLightText px-6 py-3 rounded-full shadow-lg font-semibold'
        onClick={() => setShowModal(true)}
      >
        + Add Transaction
      </button>

      {showModal && (
        <AddTransaction
          onClose={() => setShowModal(false)}
          onSave={addTransaction}
        />
      )}
    </div>
  );
}

export default Transactions;
