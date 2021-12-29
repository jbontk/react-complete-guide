import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

import * as reducers from './Reducers';
import * as actions from './Actions';
import AuthContext from '../../store/auth-context';

const Login = () => {
  const authCtx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, emailDispatch] = useReducer(reducers.emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, passwordDispatch] = useReducer(reducers.passwordReducer, {
    value: '',
    isValid: null,
  });


  const { isValid: emailIsValid} = emailState;
  const { isValid: passwordIsValid} = passwordState;

  useEffect(() => {
    const cleanupFunction = () => {
      console.log(`Cleaning Timer ID {${timeoutId}}`);
      clearTimeout(timeoutId);
    };

    const timeoutId = setTimeout(() => {
      console.log(
        `[Login] inside useEffect, emailIsValid = {${emailIsValid}}`,
        `passwordIsValid = {${passwordIsValid}}`
      );

      // Ok to refer to a previous state in a state updating function here:
      // no risk of referring to an outdated state, because inside useEffect, 
      // which is guaranteed to run after re-render, thus after
      // the state has been updated.
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return cleanupFunction;

    // depending on nested properties (isValid) to avoid unecessary effect execution
    // (rather than passing the whole object which re-run the effect function whenever ANY property changes)
  }, [emailIsValid, passwordIsValid]); 
  

  const emailChangeHandler = (event) =>
    emailDispatch({ type: actions.USER_INPUT, value: event.target.value });

    const passwordChangeHandler = (event) =>
    passwordDispatch({ type: actions.USER_INPUT, value: event.target.value });

  const blurEmailHandler = () => {
    emailDispatch({type: actions.INPUT_BLUR});
  };

  const blurPasswordHandler = () => {
    passwordDispatch({type: actions.INPUT_BLUR});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={blurEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={blurPasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
