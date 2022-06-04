import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import Notification from './components/UI/Notification';
import {fetchCartData, sendCartData} from './store/cart-actions';

let isInitial = true;

function App() {

  const dispatch = useDispatch();
  const showCart = useSelector(({ui}) => ui.showCart);
  const notification = useSelector(({ui}) => ui.notification);
  const cart = useSelector(({cart}) => cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification {...notification} />}
      <Layout>
        {showCart && <Cart/>}
        <Products/>
      </Layout>
    </>
  );
}

export default App;
