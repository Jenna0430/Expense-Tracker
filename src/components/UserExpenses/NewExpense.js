import React, { useState } from 'react'
import "./newExpense.css"
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

  const [isHidden, setIsHidden] = useState(false);

  function saveExpenseData(enteredExpenseData){
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  function hiddenItem(){
    setIsHidden(true);
  }
  function cancelForm(){
    setIsHidden(false);
  }

  return (
   <div className="new-expense">
    {!isHidden && <button onClick={hiddenItem}>Add New Expense</button>}
    {isHidden && <ExpenseForm onSaveExpenseData = {saveExpenseData} cancel={cancelForm}/>}
   </div>
  );
};

export default NewExpense