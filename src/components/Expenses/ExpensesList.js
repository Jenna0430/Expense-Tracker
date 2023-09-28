import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import "./expensesList.css";

const ExpensesList = (props) => {

  if(props.data.length === 0){
    return <p className='expenses-list__fallback'>No expenses found</p>
  } else {
    return (
      <div>
        <ul className='expenses-list'>
         {props.data.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
          ))}
        </ul>
      </div>
    )
  }
  
}

export default ExpensesList