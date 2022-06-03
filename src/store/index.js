import {configureStore} from '@reduxjs/toolkit';
import counter from './counter';
import authentication from './authentication';

const store = configureStore({
  reducer: {
    counter,
    authentication
  }
});

export default store;