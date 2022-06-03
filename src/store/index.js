import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialCounterState = {counter: 0, showCounter: true};
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const initialAuthState = {isAuthenticated: false};
const authenticationSlice = createSlice( {
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: authenticationSlice.reducer
  }
});


console.log(store);

export const counterActions = counterSlice.actions;
export const authenticationActions = authenticationSlice.actions;
export default store;