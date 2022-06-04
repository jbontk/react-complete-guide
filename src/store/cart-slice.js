import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'cart',
  initialState: {items: {}, changed: false},
  reducers: {
    addToCart(state, {payload}) {
      const {items} = state;
      const {id, quantity} = payload;

      const existingItem = items[id];
      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.total = existingItem.quantity * existingItem.price;
      } else {
        const {title, price} = payload;
        items[id] = {title, price, quantity, total: quantity * price};
      }
      state.changed = true;
    },
    removeFromCart(state, {payload}) {
      const {items} = state;
      const {id, quantity} = payload;

      const existingItem = items[id];
      if (existingItem) {
        existingItem.quantity -= quantity;
        if (existingItem.quantity <= 0) {
          delete items[id];
        } else {
          existingItem.total = existingItem.quantity * existingItem.price;
        }
      }
      state.changed = true;
    },
    replaceCart(state, {payload}) {
        state.items = payload?.items || {}; // question mark because payload can be equal to null when cart node does not exist in Firebase
    }
  }
});

export const cartActions = slice.actions;
export default slice.reducer;