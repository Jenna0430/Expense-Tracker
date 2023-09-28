import React from 'react'
import "./newExpense.css"
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  function saveExpenseData(enteredExpenseData){
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
   <div className="new-expense">
    <ExpenseForm onSaveExpenseData = {saveExpenseData}/>
   </div>
  );
};

export default NewExpense