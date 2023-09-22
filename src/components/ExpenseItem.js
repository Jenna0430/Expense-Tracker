import React from 'react'
import "./expenseItem.css"
import Card from './Card'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
  

  return (
    <Card className="expense-item">
     <ExpenseDate data = {props.data.date}/>
      <div className="expense-item__description">
      <h2>{props.data.title}</h2>
      <div className="expense-item__price">
        ${props.data.amount}
      </div>
      </div>
    </Card>
   
  )
}

export default ExpenseItem