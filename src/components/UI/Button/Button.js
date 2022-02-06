import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button RUNNING');
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// Gotcha: By default it will only shallowly compare complex objects in the props object. 
// If you want control over the comparison, you can also provide a custom comparison function as the second argument.
// https://reactjs.org/docs/react-api.html#reactmemo
// And https://academind.com/tutorials/reference-vs-primitive-values

// => props.onClick !== props.prev.onClick
export default React.memo(Button);
