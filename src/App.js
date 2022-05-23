import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import OrderForm from "./components/OrderForm/OrderForm";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [orderFormIsShown, setOrderFormIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
    setOrderFormIsShown(false);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const closeHandler = () => {
    setCartIsShown(false);
    setOrderFormIsShown(false);
  };

  const placeOrderHandler = () => {
    setCartIsShown(false);
    setOrderFormIsShown(true);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} onOrder={placeOrderHandler} />}
      {orderFormIsShown && <OrderForm onBackToCart={showCartHandler} onClose={closeHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
