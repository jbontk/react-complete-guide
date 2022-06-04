import {configureStore} from '@reduxjs/toolkit';
import cart from './cart-slice';
import ui from './ui-slice';

const store = configureStore({
    reducer: {
        cart, ui
    }
});

export default store;