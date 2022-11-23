import 'index.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ContactsPage } from '../pages/ContactsPage';
import { Layout } from './layout';
import { AboutPage } from 'pages/AboutPage';
import { RegistrationPage } from 'pages/RegistrationPage';
import { LoginPage } from 'pages/LoginPage';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
export const STORAGE = 'contactList';

export function App() {
  axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
  const { isRefreshing } = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  console.log('refresh:', isRefreshing);
  return isRefreshing ? (
    <p>Fetching user data...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AboutPage />} end />
        <Route path="/contacts" element={<PrivateRoute component={ContactsPage} redirectTo="/" />} />
        <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />} />
        <Route path="/registration" element={<RestrictedRoute component={RegistrationPage} redirectTo="/contacts" />} />
        <Route path="*" element={<Navigate to={'/About'} />} />
      </Route>
    </Routes>
  );
}
