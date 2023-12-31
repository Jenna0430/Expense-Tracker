import React, { useState } from 'react'
import "./expenseForm.css"

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  
  

 function inputChangeHandler(identifier, value){
  if(identifier === 'title'){
    setEnteredTitle(value);
  } else if (identifier === 'date'){
    setEnteredDate(value);
  } else{
    setEnteredAmount(value);
  }
 }

 function submitHandler(event){
   event.preventDefault();
   
   const expenseData = {
    title: enteredTitle,
    amount: +enteredAmount,
    date: new Date(enteredDate),
   };

   props.onSaveExpenseData(expenseData);
   setEnteredAmount('');
   setEnteredDate('');
   setEnteredTitle('');
 };
 
  return (
   <div className="expense-form">
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">

        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={(event) => {
            inputChangeHandler('title', event.target.value)
          }} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={(event) => {
            inputChangeHandler('amount', event.target.value)
          }} />
          </div>

          <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01"  max="2022-12-31" value={enteredDate} onChange={(event) => {
            inputChangeHandler('date', event.target.value)
          }}/>
         </div>

       </div>
       <div className="flex">
          <button type='submit' onClick={props.cancel}>Cancel</button>
        </div>
        <div className="new-expense__actions">
          <button type='submit'>Add Expense</button>
        </div>
     
    </form>
   </div>
  )
      
}

export default ExpenseForm