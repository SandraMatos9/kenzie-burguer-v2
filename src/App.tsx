import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './pages/providers/UserContext/UserContext';
import 'react-toastify/dist/ReactToastify.css';
import Router from './routes';
import AppRoutes from './routes/routes';
import { GlobalStyles } from './styles/global';
import { StyledContainer } from './styles/grid';

const App = () => {
  return (
    <>
      <UserProvider>
        <GlobalStyles />
        <AppRoutes />
      </UserProvider>
    <ToastContainer autoClose={2000} position='top-right' closeOnClick pauseOnHover/>

    </>
  );
};

export default App;
