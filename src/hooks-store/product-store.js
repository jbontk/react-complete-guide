import {initStore} from './store';
import {initialState} from '../store/reducers/products';
import {TOGGLE_FAVORITE} from './action-identifiers';

export const configureStore = () => {
  const actions = {
    [TOGGLE_FAVORITE]: (curState, productId) => {
      const updatedProducts = [...curState.products];

      const productIndex = updatedProducts.findIndex(p => p.id === productId);
      if (productIndex > -1) {
        updatedProducts[productIndex].isFavorite = !updatedProducts[productIndex].isFavorite;
      }
      return {products: updatedProducts};
    }
  }
  initStore(actions, initialState);
};


