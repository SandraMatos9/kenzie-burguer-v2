import { UserProvider } from './pages/providers/UserContext/UserContext';
import AppRoutes from './routes/routes';
import { GlobalStyles } from './styles/global';

const App = () => {
  return (
    <UserProvider>
      <GlobalStyles />
      <AppRoutes />
    </UserProvider>
  );
};

export default App;
