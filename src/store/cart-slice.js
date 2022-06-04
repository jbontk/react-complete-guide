import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'cart',
  initialState: {items: {}},
  reducers: {
    addToCart({items}, {payload}) {
      const {id, quantity} = payload;

      const existingItem = items[id];
      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.total = existingItem.quantity * existingItem.price;
      } else {
        const {title, price} = payload;
        items[id] = {title, price, quantity, total: quantity * price};
      }
    },
    removeFromCart({items}, {payload}) {
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
    },
    replaceCart(state, {payload}) {
      if (payload.items) {
        state.items = payload.items;
      }
    }
  }
});

export const cartActions = slice.actions;
export default slice.reducer;