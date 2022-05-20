import React from 'react';

import classes from './Input.module.css';
import commonClasses from './Common.module.css';

const Input = React.forwardRef((props, ref) => {

    const errorClasses = `${commonClasses.small} ${commonClasses.error}`;

    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
            {!props.isValid && <p className={errorClasses}>{props.errorMessage}</p>}
        </div>
    );
});

export default Input;
