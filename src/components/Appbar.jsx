import { useAuth } from 'hooks/useAuth';
import { Header, Link, Navigation, NavList } from './Appbar.styled';
import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';

export const Appbar = () => {
  const { isLoggedIn } = useAuth();
  console.log('isloggedin:', isLoggedIn);

  return (
    <Header>
      <Navigation>
        <NavList>
          <li>
            <Link to={'/'}>About</Link>
            {isLoggedIn ? <Link to={'/contacts'}>Contacts</Link> : null}
          </li>
          <li>{isLoggedIn ? <UserMenu /> : <AuthNav />}</li>
        </NavList>
      </Navigation>
    </Header>
  );
};
