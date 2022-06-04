import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'ui',
  initialState: {showCart: true, notification: null},
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, {payload}) {
      const {status, title, message} = payload;
      state.notification = {status, title, message};
    }
  }
});

export const uiActions = slice.actions;
export default slice.reducer;