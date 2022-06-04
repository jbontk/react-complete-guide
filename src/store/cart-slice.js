import {createSlice} from '@reduxjs/toolkit';
import {uiActions} from './ui-slice';
import {CART_API} from '../utils/constants';

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
    }
  }
});


export const sendCartData = (cart) => {

  return async (dispatch) => {
    const sendRequest = async () => {

      dispatch(uiActions.showNotification({
        status: 'sending',
        title: 'Sending Cart Data',
        message: 'Sending Cart Data'
      }));

      const response = await fetch(CART_API, {method: 'PUT', body: JSON.stringify(cart.items)});

      if (!response.ok) {
        throw new Error('Failed sending Cart data');
      }
    }

    try {
      await sendRequest();

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Sent Cart Data',
        message: 'Cart Data sent successfully'
      }));
    } catch (e) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Failed to send Cart Data',
        message: `Error while sending Cart Data`
      }));
    }
  };
}


export const cartActions = slice.actions;
export default slice.reducer;