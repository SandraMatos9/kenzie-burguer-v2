import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import ProtectedRoutes from '../pages/ProtectedRoute';
import { CartProvider } from '../pages/providers/CartContext';
import RegisterPage from '../pages/RegisterPage';
import ShopPage from '../pages/ShopPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route
          path='/shop'
          element={
            <CartProvider>
              <Route path='/shop' element={<ShopPage />} />
            </CartProvider>
          }
        />
      </Route>
    </Routes>
  );
};

//
export default AppRoutes;
