import { useState } from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from "./Expensesfilter";

const Expenses = ({items}) => {
    const [selectedYear, setSelectedYear] = useState('2020');

    const yearChangeHandler = (year) => setSelectedYear(year);

    return (
        <div>
            <ExpensesFilter selected={selectedYear} onYearChange={yearChangeHandler}/>
            <Card className="expenses">
                {items.filter(expense => expense.date.getFullYear() === +selectedYear).map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;
