import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink to="/" className="navigation__link">
            INÍCIO
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/pratos" className="navigation__link">
            PRATOS
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/sobre" className="navigation__link">
            SOBRE
          </NavLink>
        </li>

      </ul>
    </nav>
  );
}

export default Navigation;
