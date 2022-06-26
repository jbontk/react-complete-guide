import React from 'react';
import Todo from '../models/todo';

const Todos: React.FC<{ items: Todo[] }> = (props) => <div>
  <ul>
    {props.items.map(item => <li key={item.id}>{item.text}</li>)}
  </ul>
</div>;

export default Todos;
