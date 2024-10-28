import logo from '../../imgs/logo.svg';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  font-size: 30px;
`;

const LogoImagens = styled.img`
  margin-right: 10px;
`;

function Logo() {
  return (
    <NavContainer>
      <LogoImagens src={logo} alt="Imagem do logo" />
      <p>
        <strong>Alura</strong>Books
      </p>
    </NavContainer>
  );
}

export default Logo;
