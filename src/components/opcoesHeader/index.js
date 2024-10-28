import styled from 'styled-components';

const ListaMenu = styled.ul`
  display: flex;
`;

const IconesMenu = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
  return (
    <ListaMenu>
      {textoOpcoes.map((texto) => (
        <IconesMenu>
          <p>{texto}</p>
        </IconesMenu>
      ))}
    </ListaMenu>
  );
}

export default OpcoesHeader;
