import CartContext from './cart-context';

const CartProvider = (props) => {
    const addItemToCartHandler = (item) => {};
    const removeItemFromCartHandler = (id) => {};
    
    const context = {
    items: [],
    totalAmount: 0,
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
