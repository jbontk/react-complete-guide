import CartContext from './cart-context';

const CartProvider = (props) => {

  const addItemToCartHandler = (item, quantity) => {
    const sanitizedQuantity = quantity || 1;
    for (let i = 0; i < sanitizedQuantity; i++) {
      context.items.push(item);
    }
    console.log('added item', item, 'quantity', sanitizedQuantity, 'context items are now', context.items);
  };
  const removeItemFromCartHandler = (id) => {
    context.items = context.items.filter((item) => item.id !== id);
  };

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
