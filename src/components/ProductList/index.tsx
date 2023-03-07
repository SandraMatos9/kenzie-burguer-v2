import { useContext,useEffect } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { CartContext } from '../../pages/providers/CartContext';


const ProductList = () => {
  const { productsContext, info ,setSearch,search} = useContext(CartContext);

  function getProducts() {

     setSearch( productsContext.filter(produto => {return produto.name.toLowerCase().includes(info.toLowerCase())}))
 
}
 useEffect (() =>{
  getProducts()
 },[info])


  return (
    <StyledProductList>
      {search.length>0 ? search.map((product) => {
       return( <ProductCard key={product.id} product={product} />)
      }
): productsContext.map((product) => {
  return( <ProductCard key={product.id} product={product} />)
})} 
    
    </StyledProductList>
  );
};
export default ProductList;
