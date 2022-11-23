import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { Greetings } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogout = () => dispatch(logout());
  return (
    <>
      <Greetings>{user.name}</Greetings>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};
