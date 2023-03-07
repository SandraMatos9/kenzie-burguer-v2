import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { CartProvider } from './pages/providers/CartContext';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/shop' element={<CartProvider><ShopPage /></CartProvider>} />
    </Routes>
  );
};

export default Router;
