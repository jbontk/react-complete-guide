import { useState } from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './Expensesfilter';

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState('2021');

  const yearChangeHandler = (year) => setSelectedYear(year);

  const filteredExpenses = items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0)
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));

  return (
    <div>
      <ExpensesFilter
        selected={selectedYear}
        onYearChange={yearChangeHandler}
      />
      <Card className='expenses'>{expensesContent}</Card>
    </div>
  );
};

export default Expenses;
