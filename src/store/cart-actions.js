import {uiActions} from './ui-slice';
import {CART_API} from '../utils/constants';
import {cartActions} from './cart-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
        const response = await fetch(CART_API);

        return await response.json();
    }

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (e) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Failed to fetch Cart Data',
        message: `Error while fetching Cart Data`
      }))
    }
  }
}

export const sendCartData = (cart) => {

  return async (dispatch) => {
    const sendData = async () => {

      dispatch(uiActions.showNotification({
        status: 'sending',
        title: 'Sending Cart Data',
        message: 'Sending Cart Data'
      }));

      const response = await fetch(CART_API, {method: 'PUT', body: JSON.stringify(cart)});

      if (!response.ok) {
        throw new Error('Failed sending Cart data');
      }
    }

    try {
      await sendData();

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
