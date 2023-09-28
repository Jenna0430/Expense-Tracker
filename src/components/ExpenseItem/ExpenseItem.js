import React from 'react'
import "./expenseItem.css"
import Card from '../Card/Card'
import ExpenseDate from '../ExpenseDate/ExpenseDate'

const ExpenseItem = (props) => {
  

  return (
    <Card className="expense-item">
     <ExpenseDate data = {props.date}/>
      <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">
        ${props.amount}
      </div>
      </div>
    </Card>
   
  )
}

export default ExpenseItem