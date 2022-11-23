import { useAuth } from 'hooks/useAuth';
import { Link, Navigation, NavList } from './Appbar.styled';
import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';

export const Appbar = () => {
  const { isLoggedIn } = useAuth();
  console.log('isloggedin:', isLoggedIn);

  return (
    <header>
      <Navigation>
        <NavList>
          <li>
            <Link to={'/'}>About</Link>
            {isLoggedIn ? <Link to={'/contacts'}>Contacts</Link> : null}
          </li>
          <li>{isLoggedIn ? <UserMenu /> : <AuthNav />}</li>
        </NavList>
      </Navigation>
    </header>
  );
};
