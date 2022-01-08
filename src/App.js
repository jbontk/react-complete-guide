import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => setShowCart(true);
  const closeCartHandler = () => setShowCart(false);

  return (
    <>
      {showCart && <Cart onClose={closeCartHandler} />}
      {!showCart && <Header onShowCart={showCartHandler} />}
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
