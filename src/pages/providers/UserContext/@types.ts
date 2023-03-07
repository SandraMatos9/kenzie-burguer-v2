export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUserLogin {
  email: string;
  password: number;
}

export interface IRegisterFormValues {
  email: string;
  password: number;
  name: string;
}

export interface ILoginFormValues {
  email: string;
  password: number;
}
export interface IUserLoginResposta {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}


export interface IProductsList {
  id: number,
  name: string,
  category: string,
  price: number,
  img: string,
}

export interface ICartContext{
  productsContext: IProductsList[] 
  productsList: () => Promise<void>
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleClick: (addProduto: IProductsList) => void
  currentSale: IProductsList[]
  setCurrentSale: React.Dispatch<React.SetStateAction<IProductsList[]>>
  search:IProductsList[]
  setSearch:React.Dispatch<React.SetStateAction<IProductsList[]>>
  info: string
  setInfo: React.Dispatch<React.SetStateAction<string>>
  

}

export interface IProductsListSearch{
  id: number,
  name: string,
  category: string,
  price: number,
  img: string,
}

export interface IModalTrueOrFalse{
  id: number,
  name: string,
  category: string,
  price: number,
  img: string,
}


export interface IUserContext {
  user: IUserLogin | null;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userLogout: () => void;
}

