import { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './Expensesfilter';
import ExpensesList from './ExpensesList';

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState('2021');

  const yearChangeHandler = (year) => setSelectedYear(year);

  const filteredExpenses = items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={selectedYear}
          onYearChange={yearChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
