import { SubmitHandler, useForm } from 'react-hook-form';
import { useContext } from 'react';
import { StyledForm } from '../../../styles/form';
import { IRegisterFormValues } from '../../../pages/providers/UserContext/@types';
import { UserContext } from '../../../pages/providers/UserContext/UserContext';
import { StyledButton } from '../../../styles/button';

import Input from '../Input';



const RegisterForm = () => {

  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>();
  
  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormValues> = (formData) =>{
    userRegister(formData)

  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Nome'
        type='text'
        register={register('name')}
        error={errors.name}
      />
      <Input
        label='Email'
        type='text'
        register={register('email')}
        error={errors.email}
      />
      <Input
        label='Crie uma senha'
        type='password'
        register={register('password')}
        error={errors.password}
      />
      <Input
        label='Confirmar senha'
        type='password'
        register={register('password')}
        error={errors.password}
      />
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
