import * as actions from './Actions';

const emailReducer = (state, action) => {
  switch (action.type) {
    case actions.USER_INPUT:
      return { value: action.value, isValid: isValidEmail(action.value) };
    case actions.INPUT_BLUR:
      return { ...state, isValid: isValidEmail(state.value) };
    default:
      return { value: '', isValid: false };
  }
};
const isValidEmail = (value) => value.includes('@');

const passwordReducer = (state, action) => {
  switch (action.type) {
    case actions.USER_INPUT:
      return { value: action.value, isValid: isValidPassword(action.value) };
    case actions.INPUT_BLUR:
      return { ...state, isValid: isValidPassword(state.value) };
    default:
      return { value: '', isValid: false };
  }
};
const isValidPassword = (value) => value.trim().length > 6;

export { emailReducer, passwordReducer };
