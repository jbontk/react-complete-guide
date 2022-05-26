import React from 'react';

// noinspection JSUnusedLocalSymbols
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clear: () => {}
});

export default CartContext;