import React from 'react';

const Todos: React.FC<{ items: string[] }> = (props) => <div>
  <ul>
    {props.items.map(item => <li key={item}>{item}</li>)}
  </ul>
</div>;

export default Todos;
