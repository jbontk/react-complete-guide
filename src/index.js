import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
import ProductsProvider from './context/products-context';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>);
