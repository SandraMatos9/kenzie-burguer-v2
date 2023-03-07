import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext } from '../../../pages/providers/CartContext';


export interface IProductCard {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
interface IProductCardProps {
  product: IProductCard;
}


const ProductCard = ({ product }: IProductCardProps) => {
  const {handleClick} = useContext(CartContext);
 

  return (
    <StyledProductCard id={String(product.id)}>
     

      <div className='imageBox' >

        <img src={product.img} alt= {product.name} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
        {product.name}
        </StyledTitle>
        <StyledParagraph className='category'>{product.category}</StyledParagraph>
        <StyledParagraph className='price'>{product.price}</StyledParagraph>
        <StyledButton $buttonSize='medium' $buttonStyle='green'  onClick={() => { handleClick(product) }}>
          Adicionar
         
        </StyledButton>

      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
