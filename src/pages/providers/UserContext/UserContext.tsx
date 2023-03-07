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

  useEffect(() => {
    console.log("sandra")
    const token = localStorage.getItem("@TOKEN")
    if(token){
        const userAutoLogin = async () => {
            try {
              api.defaults.headers.common.Authorization = `Bearer ${token}`;

                const response = await api.get('/login')
                setUser(response.data);
                navigate('/shop')
                toast.success('Login feito com sucesso!');

            } catch (error) {
                console.log(error)
                // localStorage.clear("@TOKEN")
            }

           
        }
         userAutoLogin()
    }
}, [])

  

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      // setLoading(true)
      const response = await api.post('/users', formData);
      setUser(response.data.user);
      localStorage.setItem('@TOKEN', response.data.accessToken);
      navigate('/');
      toast.success('Cadastro feito com sucesso!');
    } catch (error) {
      console.log(error);
      toast.error('Erro ao cadastrar');
    } 
  };

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      const response = await api.post('/login', formData);
      setUser(response.data.user);
      localStorage.setItem('@TOKEN', response.data.accessToken);
      navigate('/shop');
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
