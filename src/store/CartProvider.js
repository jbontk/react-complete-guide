import { useReducer } from 'react';

import * as actions from './Actions';
import cartReducer, { INITIAL_CART_STATE } from './CartReducer';

import CartContext from './cart-context';

const CartProvider = (props) => {
  const [state, cartDispatch] = useReducer(cartReducer, INITIAL_CART_STATE);

  const addItemToCartHandler = (item) => {
    const sanitizedQuantity = item.quantity || 1;
    console.log(
      'adding item',
      item,
      'quantity',
      sanitizedQuantity,
      'context items are currently (before add)',
      context.items
    );
    cartDispatch({ type: actions.ADD, value: { item } });
  };

  const removeItemFromCartHandler = (id, quantity) => {
    cartDispatch({ type: actions.REMOVE, value: { id, quantity } });
  };

  const context = {
    items: state.items,
    totalAmount: state.totalAmount,
    numberOfItems: state.numberOfItems,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
