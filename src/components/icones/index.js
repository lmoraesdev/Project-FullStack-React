import './style.css';
import perfil from '../../imgs/perfil.svg';
import sacola from '../../imgs/sacola.svg';

const icones = [perfil, sacola];

function Icones() {
  return (
    <ul className="icones">
      {icones.map((icone) => (
        <li>
          <img src={icone} alt="icones" className="icone"></img>
        </li>
      ))}
    </ul>
  );
}

export default Icones;
