import {BLUR, INPUT, RESET} from "../actions/input-actions";
const initialState = {value: '', isTouched: false};

const inputReducer = (state, action) => {
    switch (action.type) {
        case INPUT:
            return {...state, value: action.value};
        case BLUR:
            return {...state, isTouched: true};
        case RESET:
            return initialState;
        default:
            throw new Error(`Unknown action type [${action.type}]`);
    }
};
export {initialState, inputReducer};
