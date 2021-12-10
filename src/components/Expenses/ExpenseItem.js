import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) =>
    (
        <li>
          <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
              <h2>{title}</h2>
              <div className="expense-item__price">${props.amount}</div>
            </div>
          </Card>
        </li>
    );

export default ExpenseItem;
