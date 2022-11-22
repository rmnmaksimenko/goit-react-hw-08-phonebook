import { NavLink } from 'react-router-dom';
import { Navigation, NavList } from './Appbar.styled';

export const Appbar = () => {
  return (
    <header>
      <Navigation>
        <NavList>
          <li>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/contacts'}>Contacts</NavLink>
          </li>
          <li>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/registration'}>Sign up</NavLink>
          </li>
        </NavList>
      </Navigation>
    </header>
  );
};
