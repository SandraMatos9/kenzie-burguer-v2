import { MdShoppingCart, MdLogout } from 'react-icons/md';
import { useContext } from 'react';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';
import { StyledContainer } from '../../styles/grid';
import { UserContext } from '../../pages/providers/UserContext/UserContext';
import { CartContext } from '../../pages/providers/CartContext';

const Header = () => {
  const { userLogout } = useContext(UserContext);
  const { setIsOpen } = useContext(CartContext);

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <img
            src={LogoKenzieBurguer}
            alt='Kenzie Burguer Logo'
            className='logo'
          />
          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <button
                onClick={() => {
                  return setIsOpen(true);
                }}
                type='button'
              >
                <MdShoppingCart size={28} />
              </button>
              <button type='button' onClick={userLogout}>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};
export default Header;
