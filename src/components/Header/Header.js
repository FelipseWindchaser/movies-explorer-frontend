import './header.css';
import Logo from '../Logo/Logo';
import Navigation from './Navigation/Navigation';

function Header({ isAuthorized = false}) {
  return (
    <>
    {isAuthorized ?
      <header className="header header_white">
      <Logo />
        <Navigation />
      </header>
      :
      <header className="header">
        <Logo />
        <div className="header__text-content header__text-content_gap_30">
          <a href="/signup" className="header__signup">Регистрация</a>
          <a href="/signin" className="header__login">Войти</a>
        </div>
      </header>
    }
    </>
  );
}

export default Header;
