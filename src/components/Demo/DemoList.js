import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items } = props;

  const sortedList = useMemo(() => {
      // Will appear only once in the console thanks to useMemo here and in the parent (App)
      // useMemo is needed also in the parent, otherwise, when the parent is re-evaluated, a new items array 
      // is passed to this component which is different from the previous array (different address in memmory).
      // Having useMemo in the parent guarantees that the items array passed to this component is the same, 
      // (same address in memory) therefore sort is only called once
    console.log('Items sorted'); 
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
