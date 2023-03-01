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

export interface IUserContext {
  user: IUserLogin | null;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userLogout: () => void;
}