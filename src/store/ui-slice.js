import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'ui',
  initialState: {showCart: true},
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    }
  }
});

export const uiActions = slice.actions;
export default slice.reducer;