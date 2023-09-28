import React , { useState } from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpensesFilter from '../UserExpenses/ExpenseFilter';
import Card from '../Card/Card';

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
      
      {filteredExpenses.length === 0 ? (<p>No expenses found</p>) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
        ))
      )}
      
      </Card>
    
  )
}

export default Expenses