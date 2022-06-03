import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'cart',
  initialState: {items: {}, showCart: false},
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
        if (existingItem.quantity === 0) {
          delete items[id];
        } else {
          existingItem.total = existingItem.quantity * existingItem.price;
        }
      }
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    }
  }
});

export const cartActions = slice.actions;
export default slice.reducer;