import classes from './Input.module.css';

const Input = (props) => (
  <div
    className={`${classes.control} 
    ${props.isValid === false ? classes.invalid : ''} 
    ${props.className}`}
  >
    <label htmlFor={props.id}>{props.label}</label>
    <input
      type={props.type || 'text'}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>
);

export default Input;
