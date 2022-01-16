import { useReducer } from 'react';

import * as actions from './Actions';
import cartReducer from './CartReducer';

import CartContext from './cart-context';

const CartProvider = (props) => {
  const [state, cartDispatch] = useReducer(cartReducer, {
    items: [], // [{item: {id:.., name: ..}, quantity: x}, {item:..., quantity: ...}, ...]
    totalAmount: 0,
    numberOfItems: 0
  });

  const addItemToCartHandler = (item, quantity) => {
    const sanitizedQuantity = quantity || 1;
    console.log(
      'adding item',
      item,
      'quantity',
      sanitizedQuantity,
      'context items are currently (before add)',
      context.items
    );
    cartDispatch({ type: actions.ADD, value: {item, quantity} });
  };

  const removeItemFromCartHandler = (id) => {
    cartDispatch({type: actions.REMOVE, value: id});
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
