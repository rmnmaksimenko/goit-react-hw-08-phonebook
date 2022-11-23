import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  console.log('isloggedin:', isLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
