import React , { useState } from 'react'
import ExpensesFilter from '../UserExpenses/ExpenseFilter';
import Card from '../Card/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
   const filteredExpenses = props.data.filter(expense => 
    {
      return expense.date.getFullYear().toString() === filteredYear;
    })

  return (
   
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList  data={filteredExpenses}/>
      </Card>
    
  )
}

export default Expenses