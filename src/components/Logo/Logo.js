import './logo.css'
import logo from '../../images/logo.svg'

function Logo() {
  return (
    <a className="logo" href="/" rel="noopener">
      <img className="logo__image" src={logo} alt="Логотип" />
    </a>
  );
}

export default Logo;
