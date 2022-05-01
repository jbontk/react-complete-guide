import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import OrderForm from "./components/Form/OrderForm";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [orderFormIsShown, setOrderFormIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const showOrderFormHandler = () => {
    setOrderFormIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const closeOrderFormHandler = () => {
    setOrderFormIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {orderFormIsShown && <OrderForm onClose={closeOrderFormHandler} />}
      <Header onShowCart={showCartHandler} onShowOrderForm={showOrderFormHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
