import { Link, Navigation, NavList } from './Appbar.styled';

export const Appbar = () => {
  return (
    <header>
      <Navigation>
        <NavList>
          <li>
            <Link to={'/'}>About</Link>
            <Link to={'/contacts'}>Contacts</Link>
          </li>
          <li>
            <Link to={'/login'}>Login</Link>
            <Link to={'/registration'}>Sign up</Link>
          </li>
        </NavList>
      </Navigation>
    </header>
  );
};
