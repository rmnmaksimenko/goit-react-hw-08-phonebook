import { Link } from 'components/Appbar.styled';

export const AuthNav = () => {
  return (
    <>
      <Link to={'/login'}>Login</Link>
      <Link to={'/registration'}>Sign up</Link>
    </>
  );
};
