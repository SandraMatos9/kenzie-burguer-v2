import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from 'styled-components';
import { mainTheme } from './styles/theme';

import App from './App';
import { CartProvider } from './pages/providers/CartContext';
import { GlobalStyles } from './styles/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
        <App />

      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
