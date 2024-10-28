import './style.css';
import Icones from '../icones';
import Logo from '../nav';
import OpcoesHeader from '../opcoesHeader';

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <OpcoesHeader />
      <Icones />
    </header>
  );
}

export default Header;
