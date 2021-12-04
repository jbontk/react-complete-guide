import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = ({ items }) => (
  <div className='expenses'>
    {items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </div>
);

export default Expenses;
