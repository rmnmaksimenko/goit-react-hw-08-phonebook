import { Link } from 'components/Appbar.styled';

export const AuthNav = () => {
  return (
    <>
      <Link to={'/login'}>Log in</Link>
      <Link to={'/registration'}>Sign up</Link>
    </>
  );
};
