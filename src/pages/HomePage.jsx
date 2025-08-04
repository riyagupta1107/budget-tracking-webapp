import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Transactions from '../components/Transactions';

import { auth } from '../firebase';

function HomePage() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [userId, setUserId] = useState(null);
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    if (auth.currentUser) {
      setUserId(auth.currentUser.uid);
      setDisplayName(auth.currentUser.displayName || 'User');
    }
  },[]);

  const handleTotalsUpdate = ({income,expense}) => {
    setIncome(income);
    setExpense(expense);
  }

  if (!userId) return null;

  return (
    <div className='w-full min-h-screen bg-bgCustom'>
        <Header income={income} expense={expense} displayName={auth.currentUser?.displayName}/>
        
        <Transactions userId={userId} onTotalsUpdate={handleTotalsUpdate} />
    </ div>
  )
}

export default HomePage