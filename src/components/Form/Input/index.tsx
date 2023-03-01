import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';


interface IInputProps {
  label: string;
  register:UseFormRegisterReturn<string>
  error?:FieldError
  type:'text'|'password'|'email'

}

const Input = ({label,register,error,type}:IInputProps) => {
 
  return (
    <fieldset>
      <StyledTextField label={label}type={type} {...register}/>
      
      <StyledParagraph fontColor='red' >Erro</StyledParagraph>
      {error?<p>{error.message}</p>:null}
      
    </fieldset>
  );
};

export default Input;
