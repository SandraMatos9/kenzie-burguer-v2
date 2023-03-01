import { useContext } from 'react';
import { StyledShopPage } from './style';
import { UserContext } from '../providers/UserContext/UserContext';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';

const ShopPage = () => {
  return(
    <StyledShopPage>
    <CartModal />
    <Header />
    <main>
      <StyledContainer containerWidth={1300}>
        <ProductList />
      </StyledContainer>
    </main>
  </StyledShopPage>

);
}
export default ShopPage;
