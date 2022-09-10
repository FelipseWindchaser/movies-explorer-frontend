import React from 'react';
import './header.css';
import Logo from '../Logo/Logo';
import Navigation from './Navigation/Navigation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useLocation, Link } from 'react-router-dom';

function Header() {
  const currentUser = React.useContext(CurrentUserContext);
  const location = useLocation();
  
  return (
    <>
    {Object.keys(currentUser).length !== 0 ?
      <header className={location.pathname === "/" ? "header" : "header header_white"}>
      <Logo />
        <Navigation />
      </header>
      :
      <header className={location.pathname === "/" ? "header" : "header header_white"}>
        <Logo />
        <div className="header__text-content header__text-content_gap_30">
          <Link to="/signup" className="header__signup">Регистрация</Link>
          <Link to="/signin" className="header__login">Войти</Link>
        </div>
      </header>
    }
    </>
  );
}

export default Header;
