import Icones from '../icones';
import Logo from '../nav';
import OpcoesHeader from '../opcoesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <Icones />
    </HeaderContainer>
  );
}

export default Header;
