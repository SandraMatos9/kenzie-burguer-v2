import { MdSearch } from 'react-icons/md';
import { useContext,useEffect, useState  } from 'react';
import { toast } from 'react-toastify';

import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { CartContext } from '../../../pages/providers/CartContext';


const SearchForm = () => {
   
    const {productsContext,info,setInfo} = useContext(CartContext);
  


    function handleSearch(_event: unknown){
      setInfo(info)

    }

   

  return (
    <StyledSearchForm>

      <input type='text' placeholder='Digitar pesquisa'   onChange={(event) => {return setInfo(event.target.value)
     }} />
  
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green' onClick={handleSearch} >
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;



