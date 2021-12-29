import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { StrictMode } from 'react/cjs/react.development';
import { AuthContextProvider } from './store/auth-context';

ReactDOM.render(
  <StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StrictMode>,
  document.getElementById('root')
);
