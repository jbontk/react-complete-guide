import React from 'react';
import classes from './Input.module.css';

export const activate = (ref) => ref.current.focus();

const Input = React.forwardRef((props, ref) => (
  <div
    className={`${classes.control} 
    ${props.isValid === false ? classes.invalid : ''} 
    ${props.className}`}
  >
    <label htmlFor={props.id}>{props.label}</label>
    <input
      ref={ref}
      type={props.type || 'text'}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>
));
export default Input;
