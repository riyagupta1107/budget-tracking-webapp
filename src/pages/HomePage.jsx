import React, {useState} from 'react'
import Header from '../components/Header'
import Transactions from '../components/Transactions';
import Footer from '../components/Footer';

function HomePage() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const handleTotalsUpdate = ({income,expense}) => {
    setIncome(income);
    setExpense(expense);
  }
  return (
    <div className='w-full min-h-screen bg-bgCustom'>
        <Header income={income} expense={expense} />
        
        <Transactions onTotalsUpdate={handleTotalsUpdate} />
        {/* <Footer /> */}
    </ div>
  )
}

export default HomePage