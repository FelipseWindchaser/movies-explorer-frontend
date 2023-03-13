import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navigation.css'
import './menu.css';
import icon from '../../../images/account-icon.svg';
import iconWhite from '../../../images/account-icon_white.svg';
import { useLocation } from 'react-router-dom';

function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const location = useLocation();

  function handleClick() {
    setIsOpenMenu(!isOpenMenu);
  }
  return (
    <div className='navigation'>
      <div onClick={handleClick} className={`menu ${isOpenMenu && 'menu_active'}`}>
        <span className="menu_midline"></span>
      </div>
      <div onClick={handleClick} className={`menu__overlay ${isOpenMenu && 'menu__overlay_active'}`}></div>
      <nav className={`navigation__content ${isOpenMenu && 'navigation__content_active'}`}>
        <NavLink
          to="/"
          onClick={handleClick}
          className={({ isActive }) =>
              isActive ? 'navigation__link navigation__link_active navigation__link_main' : 'navigation__link navigation__link_main'
            }
          end
        >
          Главная
        </NavLink>
        <NavLink
          to="/movies"
          onClick={handleClick}
          className={({ isActive }) =>
              isActive ? 'navigation__link navigation__link_active' : 'navigation__link'
            }
          end
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          onClick={handleClick}
          className={({ isActive }) =>
              isActive ? 'navigation__link navigation__link_active' : 'navigation__link'
            }
        >
          Сохранённые фильмы
        </NavLink>
        <NavLink
          onClick={handleClick}
          className={({ isActive }) =>
              isActive ? 'navigation__account navigation__account_menu navigation__link_active' : 'navigation__account navigation__account_menu'
            }
          to="/profile"
        >
          Аккаунт
          <img className="header__icon" src={icon} alt="profile-logo" />
        </NavLink>
      </nav>
      <Link className="navigation__account" to="/profile">
        Аккаунт
        <img className="header__icon" src={location.pathname === "/" ? iconWhite : icon} alt="profile-logo" />
      </Link>
      </div> 
  );
}

export default Navigation;
