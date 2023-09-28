import React from 'react'
import "./expenseDate.css"

const ExpenseDate = (props) => {

  let month = props.data.toLocaleString('en-US', { month:'long'});
  let day = props.data.toLocaleString('en-US', { day:'2-digit'});
  let year = props.data.getFullYear();
  return (
    <div className='expense-date'>

    <div className='expense-date__month'>{month}</div>
    <div className='expense-date__year'>{year}</div>
    <div className='expense-date__day'>{day}</div>

  </div>
  )
}

export default ExpenseDate