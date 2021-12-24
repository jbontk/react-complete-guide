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

const isValidEmail = (email) => email.includes('@');

export { emailReducer };
