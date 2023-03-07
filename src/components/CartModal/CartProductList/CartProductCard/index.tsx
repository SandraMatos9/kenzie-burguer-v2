import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { IProductsList } from '../../../../pages/providers/UserContext/@types';
import { CartContext } from '../../../../pages/providers/CartContext';


const CartProductCard = () => {
  const { currentSale, setCurrentSale } = useContext(CartContext);
  // eslint-disable-next-line no-shadow
  function deletarPedido(id:number) {

    const arrayFilter = currentSale.filter((item) => {
      return item.id !== id;
    });
    setCurrentSale(arrayFilter);
  }


  return 
 <>
 
    {currentSale.map((products:IProductsList) => {

    return (
     <StyledCartProductCard>
        <div className='imageBox'>
          <img src={products.img} alt={products.name} />
        </div>
        <div className='contentBox'>
          <StyledTitle tag='h3' $fontSize='three'>
            {products.name}
          </StyledTitle>
          {/* <button>-</button> 0 <button>+</button> */}
          <button
            type='button'
            aria-label='Remover'
            onClick={() => {
              deletarPedido(products.id);
            }}
          >
            <MdDelete size={24} />
          </button>
        </div>
      </StyledCartProductCard>
    );
  })};
</>
};

export default CartProductCard;
