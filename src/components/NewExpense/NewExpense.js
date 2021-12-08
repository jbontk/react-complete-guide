import { useState } from 'react';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };

  const [add, setAdd] = useState(false);

  const addHandler = () => setAdd(true);
  const cancelHandler = () => setAdd(false);

  return (
    <div className='new-expense'>
      {!add && <button onClick={addHandler}>Add New Expense</button>}
      {add && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
