import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IDefaultProviderProps, ILoginFormValues, IRegisterFormValues, IUserContext, IUserLogin } from './@types';
import { api } from '../../../services/api';


export const UserContext = createContext({} as IUserContext);



export const UserProvider = ({ children }: IDefaultProviderProps) => {
  // const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUserLogin | null>(null);

  const navigate = useNavigate();

  

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      // setLoading(true)
      const response = await api.post('/login', formData);
      setUser(response.data.user);
      localStorage.setItem('@TOKEN', response.data.token);
      navigate('/');
      toast.success('Cadastro feito com sucesso!');
    } catch (error) {
      console.log(error);
      toast.error('Erro ao cadastrar');
    } 
  };

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      // setLoading(true)
      const response = await api.post('/login', formData);
      setUser(response.data.user);
      localStorage.setItem('@TOKEN', response.data.token);
      navigate('/shop');
      console.log('Login realizado com sucesso!');
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@TOKEN');
    navigate('/');
  };

  return (
    <UserContext.Provider value={{ user, userRegister, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
