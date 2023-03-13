import './logo.css'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="logo">
      <Link className="logo__link" to="/">
        <img className="logo__image" src={logo} alt="Логотип" />
      </Link>
    </div>
  );
}

export default Logo;
