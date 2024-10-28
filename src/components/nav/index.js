import logo from '../../imgs/logo.svg';
import './style.css';

function Logo() {
  return (
    <nav className="logo">
      <img src={logo} alt="Imagem do logo" className="logo-img"></img>
      <p>
        <strong>Alura</strong>Books
      </p>
    </nav>
  );
}

export default Logo;
