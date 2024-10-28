import perfil from '../../imgs/perfil.svg';
import sacola from '../../imgs/sacola.svg';
import styled from 'styled-components';

const ListaIcones = styled.ul`
  display: flex;
  align-items: center;
`;

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const icones = [perfil, sacola];

function Icones() {
  return (
    <ListaIcones>
      {icones.map((icone) => (
        <Icone>
          <img src={icone} alt="icones"></img>
        </Icone>
      ))}
    </ListaIcones>
  );
}

export default Icones;
