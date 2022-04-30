import { useReducer } from 'react';
import {initialState, inputReducer} from "../reducers/input-reducer";
import {BLUR, INPUT, RESET} from "../actions/input-actions";


const useInput = (validationFn) => {

  const [state, dispatch] = useReducer(inputReducer, initialState);

  const valueIsValid = validationFn(state.value);
  const hasErrors = !valueIsValid && state.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({type: INPUT, value: event.target.value});
  };

  const inputBlurHandler = (_) => {
    dispatch({type: BLUR});
  };

  const reset = () => {
    dispatch({type: RESET});
  };

  return {
    value: state.value,
    isValid: valueIsValid,
    hasErrors,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
