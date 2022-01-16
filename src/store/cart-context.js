import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  numberOfItems: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
});

export default CartContext;
