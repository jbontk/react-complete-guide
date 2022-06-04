import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {CART_API} from './utils/constants';
import {uiActions} from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {

  const dispatch = useDispatch();
  const showCart = useSelector(({ui}) => ui.showCart);
  const notification = useSelector(({ui}) => ui.notification);
  const cart = useSelector(({cart}) => cart);

  useEffect(() => {
    const sendCartData = async () => {

      if (isInitial) {
        isInitial = false;
        return;
      }

      dispatch(uiActions.showNotification({
        status: 'sending',
        title: 'Sending Cart Data',
        message: 'Sending Cart Data'
      }));

      const response = await fetch(CART_API, {method: 'PUT', body: JSON.stringify(cart.items)});

      if (!response.ok) {
        throw new Error('Failed sending Cart data');
      }
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Sent Cart Data',
        message: 'Cart Data sent successfully'
      }));
    };

    sendCartData().catch(e => {

      console.warn(e);

      return dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Failed to send Cart Data',
        message: `Error while sending Cart Data`
      }));
    });

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
