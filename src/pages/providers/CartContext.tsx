import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { UserContext } from './UserContext/UserContext';

import {
  ICartContext,
  IDefaultProviderProps,
  IProductsList,
  IProductsListSearch,
} from './UserContext/@types';
import { api } from '../../services/api';

export const CartContext = createContext({} as ICartContext);






export const CartProvider = ({ children }: IDefaultProviderProps) => {
const [currentSale, setCurrentSale] = useState<IProductsList[]>([]);
const [search, setSearch] = useState<IProductsList[]>([]);
const [info,setInfo] = useState("")



  const [productsContext, setProductsContext] = useState<IProductsList[] | []>(
    []
  );

  const handleClick = (addProduto: IProductsList) => {
    const arrayFind = currentSale.find((item) => {
      return item.id === addProduto.id;
    });
    if (arrayFind) {
      toast.error('Já existe no carrinho!');
    }
    setCurrentSale([...currentSale, addProduto]);
    toast.success('Adicionado com sucesso!');
  };

  const [productSearchContext, setProductSearchContext] = useState([] as any[]);

  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem('@TOKEN');

  const productsList = async () => {
    try {
      const response = await api.get<IProductsList[]>('/products');
      console.log(response);
      setProductsContext(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (token) {
      productsList();
    }
  }, []);

   
  

  

  return (
    <CartContext.Provider
      value={{
        productsContext,
        productsList,
        isOpen,
        setIsOpen,
        handleClick,
        currentSale,
        setCurrentSale,
        search,
        setSearch,
        info,
        setInfo
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
