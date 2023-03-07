import { useContext, useState } from 'react';

import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../pages/providers/CartContext';

const CartProductList = () => {
  const { currentSale, setCurrentSale } = useContext(CartContext);

  const [cartTotal, setCartTotal] = useState(0);

  const somaTotal = currentSale.reduce((valorAntigo, valorNovo) => {
    return valorAntigo + valorNovo.price;
  }, 0);

  function deletarTodosPedidos() {
    setCurrentSale([]);
  }

  return (
    <StyledCartProductList>
   
       
          <ul>
            <CartProductCard />
            {/* // key={id} dados={dados} currentSale={currentSale} setcurrenSale={setcurrenSale} */}
          </ul>

          <div className='totalBox'>
            <StyledParagraph>
              <strong>Total</strong>
            </StyledParagraph>

            <StyledParagraph className='total'>
              {' '}
              {somaTotal.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </StyledParagraph>
          </div>
          <StyledButton
            $buttonSize='default'
            $buttonStyle='gray'
            onClick={deletarTodosPedidos}
          >
            Remover todos
          </StyledButton>
      
  
    </StyledCartProductList>
  );
};

export default CartProductList;
