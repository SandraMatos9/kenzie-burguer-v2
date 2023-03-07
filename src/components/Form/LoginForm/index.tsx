// eslint-disable-next-line import/no-extraneous-dependencies
import * as yup from "yup";

import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserLogin, ILoginFormValues } from '../../../pages/providers/UserContext/@types';

import { UserContext } from '../../../pages/providers/UserContext/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
const LoginForm = () => {
   const loginformSchema = yup.object().shape({
    email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha  é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>( {resolver:yupResolver(loginformSchema)});

  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginFormValues> = (formData) => {
    userLogin(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Email'
        type='text'
        register={register('email')}
        error={errors.email?.message}
      />
      <Input
        label='Senha'
        type='password'
        register={register('password')}
        error={errors.password?.message}
      />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
